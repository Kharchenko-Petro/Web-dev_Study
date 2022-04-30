// Cash Register
// Design a cash register drawer function checkCashRegister() that 
// accepts purchase price as the first argument (price), payment 
// as the second argument (cash), and cash-in-drawer (cid) as 
// the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object 
// with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if 
// cash-in-drawer is less than the change due, or if you 
// cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as 
// the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with 
// the change due in coins and bills, sorted in highest to 
// lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  const SumAllCashFromCid = sumCashFromCid(cid);
  
  if (SumAllCashFromCid === change) {
    return answer('CLOSED', cid);
  }

  const changeFromCid = countChangeFromCid(cid, change);

  if (changeFromCid === 'INSUFFICIENT_FUNDS') {
    return answer('INSUFFICIENT_FUNDS', []);
  }

  return answer('OPEN', changeFromCid);
 
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

function accSum(a, b) {
  const accSum = Number( (a + b).toFixed(2) );

  return accSum;
}

function accSub(a, b) {
  const accSub = Number( (a - b).toFixed(2) );

  return accSub;
}

function accDiv(a, b) {
  const accDiv = Number( (a / b).toFixed(2) );

  return accDiv;
}

function answer(status, change) {
  const answer = {
      status,
      change
    }
  
  return answer;
}

function sumCashFromCid(cid) {
  const sum = Object.values(cid).reduce( (sum, boxInCid) => {
    let moneyInBox = boxInCid[1];

    return accSum(sum, moneyInBox);
  }, 0);

  return sum;
}

function countChangeFromCid(cid, change) {
  const changeFromCid = [];

  const leftOver = cid.reduceRight( (remainder, item) => {
    const name = item[0];
    const bankValue = determBankValue(name);

    let moneyInBox = item[1];
    let countChange = 0;

    while (remainder >= bankValue && moneyInBox > 0) {      
      remainder = accSub(remainder, bankValue);
      moneyInBox = accSub(moneyInBox, bankValue);
      countChange = accSum(countChange, bankValue);
    }

    if (countChange > 0) {
      changeFromCid.push([name, countChange]);
    }
  
    return remainder;
  }, change );

  if (leftOver > 0) {
    return "INSUFFICIENT_FUNDS";
  }

  if (leftOver === 0) {
    return changeFromCid;
  }
}

function determBankValue(bankName) {
  switch (bankName) {
    case 'PENNY':
      return 0.01;
    case 'NICKEL':
      return 0.05;
    case 'DIME':
      return 0.1;
    case 'QUARTER':
      return 0.25;
    case 'ONE':
      return 1;
    case 'FIVE':
      return 5;
    case 'TEN':
      return 10;
    case 'TWENTY':
      return 20;
    case 'ONE HUNDRED':
      return 100;
  }
}