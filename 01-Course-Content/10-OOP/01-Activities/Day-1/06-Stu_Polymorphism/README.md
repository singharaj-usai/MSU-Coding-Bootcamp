# 🐛 Grading App Returns Undefined

Work with a partner to resolve the following issues:

* As a developer, I want to understand the concept of polymorphism by writing code that uses method overloading.

## Expected Behavior

* When the user passes a number grade, like `95`, into the `displayGrade()` method, the method should return a string indicating the letter grade, like `A`.

* When the user passes a letter grade, like `B`, into the `displayGrade()` method, the method should return a string indicating the range of the grade percentage, like `80-89`. 

## Actual Behavior

When the user passes in a number grade or letter grade, the method returns `undefined`.

## Steps to Reproduce the Problem

1. Run `node index.js` from the command line.

---

## 💡 Hints

* With method overloading, a single function can behave differently depending on the type of inputs it receives&mdash;how can we use this to build a object method that accepts different grade formats?

* How might the `inRange()` helper function and `switch` statements come in handy?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Think of another method you could implement that would use the parameters of the method to behave a certain way. How could you check the number of arguments that were passed to a method?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.