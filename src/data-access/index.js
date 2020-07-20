import makeTransactionsDb from './transaction-db.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'

const MongoClient = mongodb.MongoClient;
const url = process.env.DM_TRANSACTION_DB_URL
const dbName = process.env.DM_TRANSACTION_DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


export async function makeDb(){
  if(!client.isConnected()){
    await client.connect();
  }
  return client.db(dbName);
}
const transactionDb = makeTransactionsDb({ makeDb });
export default transactionDb;
