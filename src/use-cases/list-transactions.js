
export default function makeListTransaction({ transactionDb }){
  return async function listTransaction(){
      const transactions = await transactionDb.findAll();
      return transactions;
  }
}
