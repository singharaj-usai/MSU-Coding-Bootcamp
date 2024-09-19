// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// Refactored to use promises
const practiceCoding = () => {
  return new Promise((resolve, reject) => {
    if (studentDistracted) {
      reject({
        issue: 'Distracted',
        message: 'Coding stopped',
      });
    } else {
      resolve('We are coding!');
    }
  });
};

const callback = (message) => console.log(message);
const errorCallback = (message) => console.log(message);

// Refactored to call 'practiceCoding()' and chain 'then()' and 'catch()'
practiceCoding()
  .then(() => console.log("We are coding in promises!"))
  .catch((error) => console.log("Promise rejected: ", error));
