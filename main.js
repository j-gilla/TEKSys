function getChange(cost, payment) {

  let res={};
  let change = payment - cost;
  let penceLeft = +change.toFixed(2) * 100;
  console.log(penceLeft)


  let amounts = [1000,200,50,10,5,1];

  let ans = amounts.map((el)=>{
    res[el] = Math.floor(penceLeft / el);
    penceLeft = (penceLeft % el)
    return res;
  });
  return res;
};

console.log(getChange(9.99, 10))

if(typeof module !== 'undefined') {
  module.exports = getChange;
};
