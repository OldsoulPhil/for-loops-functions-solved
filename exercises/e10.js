// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let newArr = [];
  for (let obj of array) {
    let names = obj.name;
    for (let char of names) {
      if (char === letter.toLowerCase() || char === letter.toUpperCase()) {
        newArr.push(names);
      }
    }
  }
  return newArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
