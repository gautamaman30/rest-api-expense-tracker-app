//buildMakeTransaction returns a factory function which
// is our transaction entity

export default function buildMakeTransaction(){
  return function makeTransaction({text, amount}){
    return Object.freeze({
      getText: () => text,
      getAmount: () => amount,
    });
  }
}
