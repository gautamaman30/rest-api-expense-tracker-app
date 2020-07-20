export default function makePostTransaction({addTransaction}){
    return async function postTransaction(httpRequest){
      const headers = {
        'content-Type': 'application/json'
      }
      try{
        const {...transactionInfo} = httpRequest.body;
        const transaction = await addTransaction({...transactionInfo});
        return {
          headers,
          statusCode: 201,
          body: {
            transaction
          },
        }
      } catch(e){
        console.log(e);
        return {
          headers,
          statusCode: 500,
          body: {
            error: e.message
          }
        }
      }
    }
}
