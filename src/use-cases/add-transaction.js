import makeTransaction from '../transactions/index.js'

export default function makeAddTransaction({ transactionDb }){
  return async function addTransaction(transactionInfo){
      const transaction = makeTransaction(transactionInfo);
      return transactionDb.insert({
        text: transaction.getText(),
        amount: transaction.getAmount(),
      });
    }
}
