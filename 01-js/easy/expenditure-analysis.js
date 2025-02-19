/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var spendExpenditureMap = {};
  for( let i=0 ; i<transactions.length ;i++) {
    var txn = transactions[i];
    spendExpenditureMap[txn.category] = spendExpenditureMap[txn.category] ? spendExpenditureMap[txn.category] +txn.price : txn.price;
  }
  var result = [];
  var mapKeys1 = Object.keys(spendExpenditureMap);
  for( let j=0 ; j< mapKeys1.length ; j++) {
    result.push({mapKeys1[j] : spendExpenditureMap[mapKeys1[j]]});
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
