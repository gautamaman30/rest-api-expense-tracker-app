import makeAddTransaction from './add-transaction.js'
import makeDeleteTransaction from './delete-transaction.js'
import makeListTransaction from './list-transactions.js'
import transactionDb from '../data-access/index.js'


const addTransaction = makeAddTransaction({transactionDb});
const removeTransaction = makeDeleteTransaction({transactionDb});
const listTransaction = makeListTransaction({transactionDb});


const transactionService = Object.freeze({
  addTransaction,
  removeTransaction,
  listTransaction
});

export default transactionService
export { addTransaction, removeTransaction, listTransaction}
