import makeGetTransaction from './get-transactions.js'
import makeDeleteTransaction from './delete-transaction.js'
import makePostTransaction from './post-transaction.js'
import { addTransaction, removeTransaction, listTransaction} from '../use-cases/index.js'


const postTransaction = makePostTransaction({addTransaction});
const getTransaction = makeGetTransaction({listTransaction});
const deleteTransaction = makeDeleteTransaction({removeTransaction});


const transactionController = Object.freeze({
  postTransaction,
  getTransaction,
  deleteTransaction
});
console.log("4");

export default transactionController
export { postTransaction, getTransaction, deleteTransaction}
