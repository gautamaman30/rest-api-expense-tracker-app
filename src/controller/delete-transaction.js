export default function makeDeleteTransaction({removeTransaction}){
    return async function deleteTransaction(httpRequest){
      const headers = {
        'content-Type': 'application/json'
      }
      try{
        const deleted = await removeTransaction({id: httpRequest.params.id});
        return {
          headers,
          statusCode: deleted.deletedCount === 0? 404:200,
          body: deleted,
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
