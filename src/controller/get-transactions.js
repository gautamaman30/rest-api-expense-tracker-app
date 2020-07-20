export default function makeGetTransaction({listTransaction}){
    return async function getTransaction(httpRequest){
      const headers = {
        'content-Type': 'application/json'
      }
      try{
        const transactions = await listTransaction();
        return {
          headers,
          statusCode: 200,
          body: transactions,
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
