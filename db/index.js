import {makeDb} from '../src/data-access/index.js'

export default async function setupDb () {
  console.log('Setting up database...')
  // database collection will automatically be created if it does not exist
  // indexes will only be added if they don't exist
  try{
    const db = await makeDb();
    const result = await db.collection('transactions');
    console.log('Database setup complete...')

  } catch(e){
    console.log(e);
  }
}
