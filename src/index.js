import { postTransaction, getTransaction, deleteTransaction} from './controller/index.js'
import makeCallBack from './callback/index.js'
import express from 'express'
import dotenv from 'dotenv'
import setupDb from '../db/index.js'

dotenv.config({path: 'C:/Users/Asus/Documents/Nodejs/expense-tracker-api-cleanArch/.env'});
setupDb();

const apiRoot = process.env.DM_API_ROOT;
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/transactions", makeCallBack(getTransaction));
app.post("/transactions", makeCallBack(postTransaction));
app.delete("/transactions/:id", makeCallBack(deleteTransaction));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
