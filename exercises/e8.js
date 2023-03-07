
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  const newArr = [];
  let maxObjBal = array[0].balance;
  for (let obj of array) {
    if (obj.balance > maxObjBal) {
      maxObjBal = obj.balance;
    };
  }
  for (let obj of array) {
    if (obj.balance === maxObjBal) {
      newArr.push(obj);
    }
  }
  return newArr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
