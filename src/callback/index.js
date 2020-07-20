export default function makeCallBack(controllerFunction){
  console.log("1");
  return async (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
      }
    }
    try{
      console.log("2");
      const httpResponse = await controllerFunction(httpRequest);
      if (httpResponse.headers) {
        res.set(httpResponse.headers)
      }
      res.type('json');
      res.status(httpResponse.statusCode).send(httpResponse.body);

    } catch(e){
      console.log("3");
      console.log(e);
      res.status(500).send({ error: 'An unkown error occurred.' });
    }
  }
}
