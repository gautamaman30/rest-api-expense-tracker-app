//create an function through which we will allow db access functions
//as dependecies injections and no one will be able to call
//other db functions provided by mongodb driver


export default function makeTransactionsDb({makeDb}){
  //freezed Objects can't be changed
  return Object.freeze({
    remove,
    insert,
    findAll,
  });

  async function findAll(){
    try{
      const db = await makeDb();
      const result = await db.collection('transactions').find({});
      return (await result.toArray()).map(({ _id: id, ...rest}) => ({id, ...rest}));
    } catch(e){
      console.log(e);
      return [];
    }
  }

  async function insert({...transactionInfo}){
    try{
      const db = await makeDb();
      const result = await db.collection('transactions').insertOne({...transactionInfo});
      const {_id: id, ...insertedInfo} = result.ops[0];
      return { id, ...insertedInfo};
    } catch(e){
      console.log(e);
      return {};
    }
  }

  //delete is not working because in mondodb _id type is ObjectId("2313213")
  // not _id : "2313213"
  // so we should implement the id field using uuid or etc and save to mongodb
  async function remove({id: _id}){
    try{
      const db = await makeDb();
      const result = await db.collection('transactions').deleteOne(obj);
      return result.deletedCount;
    } catch(e){
      console.log(e);
      return 0;
    }
  }
}
