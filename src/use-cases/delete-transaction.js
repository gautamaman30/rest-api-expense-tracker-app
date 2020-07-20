
export default function makeDeleteTransaction({ transactionDb }){
  return async function removeTransaction({id}={}){
    if (!id) {
      console.log('No id supplied');
      return { deletedCount: 0, message: "not found"};
    }
    const count = await transactionDb.remove({id});
    return { deletedCount: count, message: "deleted"};
  }
}
