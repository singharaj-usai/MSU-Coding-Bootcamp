# 09.3 Full-Time Lesson Plan: Technical Interview and MongoDB

## Overview

In today's class, you will prepare students for technical interviews through the Module 17 mini-project. In Module 18, you will introduce students to NoSQL databases and executing CRUD functions using MongoDB commands. You will also explore embedded documents.

## Instructor Notes

* In this lesson, students will complete activities `28-Stu_Mini-Project` in Module 17 through `08-Stu_Embedded-Documents` in Module 18.

* Be sure to review the activities before class and try to anticipate any questions that students might have.

* The Module 17 mini-project will not be in a typical group project setting, but rather in smaller groups of 2&mdash;3 students. Students will simulate a technical interview, with one student assuming the role of the interviewer and the other assuming the role of the candidate. If students struggle to adjust to the new format, emphasize that practicing interviews will help them clarify and organize their thoughts so that they are more prepared for a real interview. They should also revisit this on their own time because additional practice will make them more prepared and comfortable with the process. Try to share a personal anecdote of the interview process if possible.

* Be sure to install MongoDB and Compass on your machine before class. Refer to the [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb).

* MongoDB Compass is a powerful GUI that is used in today's lesson to help students explore data visually. Refer to the the [MongoDB Compass docs on interacting with data](https://docs.mongodb.com/compass/current/manage-data/) for details on how to connect to a local MongoDB host and work with data with Compass.

* Today's MongoDB activities do not have a front end, and all routes will be tested using Insomnia. Please make sure you have Insomnia installed locally prior to class. Refer to the [Insomnia installation docs](https://insomnia.rest/download) as needed.

* While MongoDB may be new to most learners, today's activities build on skills developed in prior modules including Express servers, SQL databases, data management, and queries. Where possible, encourage students to make connections to prior learning and start thinking of the role databases such as MongoDB play in their apps.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Articulate and implement sorting algorithms in a technical interview setting.

* Identify and explain the differences between SQL and noSQL databases.

* Create and manipulate data using MongoDB Compass.

* Insert, find, and return documents stored in a MongoDB database.

* Update and delete documents stored in a MongoDB database.

* Explain how embedded documents can be used to create one-to-one and one-to-many relationships.

## Slide Deck

* [Module 18 Slide Deck](https://docs.google.com/presentation/d/1U9HV8gv4am28LWJ46sDm367mrBi0PZ3tpIDYNpRoj3A/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                            | Duration |
|---     |---  |---                                       |---       |
| 10:00AM| 1   | Instructor Demo: Mini Project            | 0:05     |
| 10:05AM| 2   | Student Do: Mini Project                 | 0:60     |
| 11:05AM| 3   | Instructor Review: Mini Project          | 0:10     |
| 11:15AM| 4   | Introduce Challenge                      | 0:05     |
| 11:20AM| 5   | FLEX                                     | 0:30     |
| 11:50PM| 6   | Instructor Do: Stoke Curiosity           | 0:10     |
| 12:00PM| 7   | BREAK                                    | 0:30     |
| 12:30PM| 8   | Instructor Demo: Compass                 | 0:05     |
| 12:35PM| 9   | Student Do: Compass                      | 0:15     |
| 12:50PM| 10  | Instructor Review: Compass               | 0:10     |
| 1:00PM | 11  | Instructor Demo: Create-Read             | 0:05     |
| 1:05PM | 12  | Student Do: Create-Read                  | 0:15     |
| 1:20PM | 13  | Instructor Review: Create-Read           | 0:10     |
| 1:30PM | 14  | Instructor Demo: Update-Delete           | 0:05     |
| 1:35PM | 15  | Student Do: Update-Delete                | 0:15     |
| 1:50PM | 16  | Instructor Review: Update-Delete         | 0:10     |
| 2:00PM | 17  | Instructor Demo: Embedded Documents      | 0:05     |
| 2:05PM | 18  | Student Do: Mongo Embedded Documents     | 0:15     |
| 2:20PM | 19  | Instructor Review: Embedded Documents    | 0:10     |
| 2:30PM | 20  | END                                      | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Mini Project (5 min)

* Welcome students to class.

* Open `28-Stu_Mini-Project/README.md` in your IDE and explain the following:

  * 🔑 Technical interviews are intimidating for even the most experienced developers, so it's good to practice either with others or on your own to build confidence.

  * 🔑 The questions asked during an interview are sometimes purposefully ambiguous and will require the candidate to follow up with some questions or assumptions. This gives the interviewer an idea of how the candidate approaches problems, even if they do not know the solution.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What happens if we don't know the answer to a question asked?

  * 🙋 During an interview, be honest about it and talk your way through it anyway, asking questions as needed. In this environment, work together to come to a solution.

* Answer any questions before inviting students to start the mini-project.

### 2. Student Do: Mini Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # Module 17 Mini-Project: Technical Interview Practice (Sorting Algorithms)

  In this mini-project, you and a partner will simulate a technical interview by taking turns as the interviewer and job candidate.

  ## Roles

  * **The Interviewer**: The role of the interviewer is to pose the question, ensure the candidate understands what is expected of them as they work towards a solution, and respond to any questions the candidate has without giving away the answer.

  * **The Candidate**: The role of the candidate is to ensure that the problem stated by the interviewer is clear by asking clarifying questions and stating assumptions, pseudocoding a solution, and then implementing it (if time allows).

  ## Instructions

  * Take turns playing each role and go through each interview question.

  * Spend about 20 minutes on each, allowing time for research of the problem, pseudocoding the solution, implementing the solution, and discussing throughout for clarification.

  * The interviewer can use the prompts and solutions laid out for each question in the [Main](./Main) directory.

  * The candidate can use the prompts, notes, and workspace for each question in the [Develop](./Develop) directory.

  * During each question, allow the candidate to do some research on the question using Google to help outline a solution. The interviewer can spend that time reviewing the solution code and come up with prompts to support the candidate.

  * Take this seriously, but don't put too much pressure on yourself to get to an answer! The idea is to be conversational about these questions to help both of you come to a solution that you can understand and explain in an interview setting.
  ```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Mini Project (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Sorting algorithms

  * ✔️ The role of the interviewer

  * ✔️ The role of the candidate

* Open `28-Stu_Mini-Project/Main/01_bubble-sort/bubble-sort.js` in your IDE and explain the following:

  * 🔑 A bubble sort function can be implemented in a couple of ways. One way involves sorting the array one index at a time, the other will iterate the entire array multiple times and sort elements gradually until it doesn't need to sort anymore. The second way is slightly more efficient because we build in a base condition to end early if the array is sorted:

    ```js
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          const tmp = array[i];

          array[i] = array[i + 1];

          array[i + 1] = tmp;

          sorted = false;
        }
      }
    }
    ```

  * 🔑 The interviewer will likely want the candidate to be able to articulate the differences between the two implementations and why one might be more efficient than the other.

  * 🔑 The candidate should be able to articulate the need for a temporary variable to hold an element being swapped and how a flag can be set to determine if the array has been sorted yet or not.

* Open `28-Stu_Mini-Project/Main/02_quick-sort/quick-sort.js` in your IDE and explain the following:

  * 🔑 A quick sort algorithm works by recursively splitting an array in two based on greater than or less than values compared to a pivot element until there are numerous arrays in order that can be concatenated back together and returned in a sorted fashion:

    ```js
    const quickSort = (array) => {
      if (array.length <= 1) {
        return array;
      }

      const pivot = array.splice(Math.floor(Math.random() * array.length), 1);

      const left = [];
      const right = [];

      array.forEach((el) => {
        if (el <= pivot) {
          left.push(el);
        } else {
          right.push(el);
        }
      });

      return quickSort(left).concat(pivot, quickSort(right));
    };
    ```

  * 🔑 The interviewer might ask this question to see if the candidate has a good understanding of recursion.

  * 🔑 The candidate should be able to visualize the recursive nature of this type of algorithm and be able to explain why the selection of a random pivot point works for this type of algorithm.

* Open `28-Stu_Mini-Project/Main/03_merge-sort/merge-sort.js` in your IDE and explain the following:

  * 🔑 A merge sort algorithm involves using recursion to continuously break apart an array until we're left with a series of single-element arrays:

    ```js
    const mergeSort = (array) => {
      if (array.length <= 1) {
        return array;
      }

      const middle = Math.floor(array.length / 2);

      const left = array.slice(0, middle);
      const right = array.slice(middle);

      return mergeArrays(mergeSort(left), mergeSort(right));
    };
    ```

  * All of these arrays are then compared to one another and used to build a new array that's sorted and eventually returned:

    ```js
    const mergeArrays = (leftArray, rightArray) => {
      const resultArray = [];

      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
          resultArray.push(leftArray[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(rightArray[rightIndex]);
          rightIndex++;
        }
      }

      return resultArray
        .concat(leftArray.slice(leftIndex))
        .concat(rightArray.slice(rightIndex));
    };
    ```

  * 🔑 This is a difficult interview question, so the interviewer might ask this when they are confident in the previous answers a candidate has provided. Because it's a bit longer to implement in code, the interviewer will likely want to ensure that the candidate can accurately describe a solution in pseudocode first so that time isn't lost.

  * 🔑 The candidate should be able to again visualize the recursive nature of this algorithm and explain that rather than trying to sort a large set of data, we break our data into smaller sets and iteratively sort them back together.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we prepare ourselves for questions like this during an interview?

  * 🙋 We can practice and not be discouraged if we can't always get to an answer!

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, undertake more interview practice among ourselves, and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Challenge (5 min)

* Open `02-Challenge/README.md` in your browser and explain the following:

  * Sometimes the best way to learn or fully understand a topic is to challenge yourself with teaching it to others. Web developers often do this by writing tutorials and blog posts.

  * In this Challenge, you will write a tutorial that explains the components that go into a specific regular expression, or regex.

  * You will have to do some research on regex in order to properly write your tutorial.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning regex by writing a tutorial about it.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 The more knowledge we have about certain tools and algorithms, the more effective we will be as developers.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Regex is a powerful tool that we can implement, just like an algorithm. Knowledge about it will make us more confident in our skills both on the job and during a technical interview.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

### 5. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in Module 17 or getting started on the Challenge.

* If there are students who haven't installed MongoDB and Compass on their machines yet, direct them to the [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) and help with the installation as needed.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Open the [slide deck](https://docs.google.com/presentation/d/1U9HV8gv4am28LWJ46sDm367mrBi0PZ3tpIDYNpRoj3A/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **What Is NoSQL?**: NoSQL is an umbrella term for any database that is not a traditional relational SQL database. There are four main types of NoSQL databases: document databases, graph databases, key-value stores, and column-oriented databases.

  * **How Do NoSQL Databases Store Data?**: While NoSQL databases are all non-relational, each NoSQL database stores data very differently and are used differently by developers. In this module, we will focus on MongoDB, a general purpose, NoSQL, document database that uses documents to store data and works great with JavaScript because it stores data in objects.

  * **How Does MongoDB Store Data Differently from SQL Databases?** and **SQL Is a Relational Database**: SQL uses rows and tables to store data, enforcing a rigid schema. Because SQL is a relational database, SQL also relies on joins to combine related data from different tables.

  * **MongoDB Uses Documents and Objects Instead of Tables and Rows**: MongoDB stores data in objects which are stored in a format called BSON, or Binary JSON. BSON looks and acts just like JSON, but is optimized for faster parsing.

  * **Groups of Documents Are Stored in Collections**: Unlike SQL tables, collections do not have an enforced schema to limit the type of data stored. Each document in a collection can have different fields (keys) and can contain different types of data.

  * **Related Data Can Be Stored in Embedded Documents**: Unlike SQL, related data in MongoDB is not split between tables. Instead, related data is nested within a single object as an embedded document.

  * **SQL vs. MongoDB**: Let’s compare how data is stored in SQL and MongoDB databases. SQL relationships are relational and SQL enforces a rigid schema and uses rows tables. MongoDB is NoSQL, does not enforce a rigid schema, and uses documents and collections. Finally, SQL relies on joins to relate data, whereas MongoDB uses embedded documents.

  * **So Why Use MongoDB?**: MongoDB stores data as a BSON object, making it a great fit for JavaScript apps. MongoDB does not use tables or enforce a rigid schema, allowing more flexibility for developers. MongoDB is a great choice for heterogeneous data, and scales easily. MongoDB is capable of storing related data well.

  * **Instructor Demonstration: Mini-Project**: Transition to demonstrating the mini-project.

* In the command line, navigate to `28-Stu_Mini-Project/Main` and run `npm install` to demonstrate the following:

  * Before we can query our database, we first need to insert data using `npm run seed`.

  * In the console, we can see all the data that has been populated and added to our database. We can query this data by using a `GET` request.

  * Next, we run `npm start` to start the app on port 3001.

* Open Insomnia on your local machine to demonstrate the following:

  * We make a `GET` request to the route `localhost:3001/api/students` to return a list of all of the student data as well as each student's associated grades.

  * In the data returned, we see that each `student` document is made up of key-value pairs and has multiple, related `assignment` documents embedded that provide details of each assignment. Notice that this structure looks and functions just like the objects we have been working with in JavaScript.

  * In today's class, we will learn how to write our own routes to create, read, update, and delete these document objects in a MongoDB database.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to use MongoDB, a NoSQL database, to store our data and retrieve it using CRUD operations.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 We learned how to create a JavaScript object in Module 03. We also learned how to use and query a database using SQL in Module 12, and how to create routes to perform CRUD operations with Express in Module 11. MongoDB builds on all of these skills.

  * ☝️ How does this project relate to your career goals?

  * 🙋 MongoDB is a popular NoSQL database solution for companies large and small. MongoDB is also the "M" in two popular technology stacks -- MERN and MEAN -- which are used by developers to create easily scalable full-stack apps. We will learn more about the MERN stack in the weeks ahead, and we will use MongoDB to store data for our final projects.

* Answer any questions before proceeding to the next activity.

### 7. BREAK (30 min)

### 8. Instructor Demo: Compass (5 min)

* With a MongoDB server installed locally and running, open Compass on your local machine to do the following:

  * 🔑 To work with our local MongoDB server, we first have to make a connection. By default, the local MongoDB instance runs on `localhost` with default port `27017`. We will use the default connection at `127.0.0.1:27017` to connect to Compass.

  * Below New Connection at the center of the screen, click the Connect button.

    > Note: You do not need to paste a connection string in the text box, because you are using the default setting. Simply click the Connect button and proceed to the next screen.

  * At the top-left of the Local screen under `host`, we see that a successful connection to the default `127.0.0.1:27017` has been made.

  * The built-in MongoDB shell is located on the bottom-left of the Local screen. Click MONGOSH to open a new MongoDB shell.

* In the open MongoDB shell, do the following:

  * 🔑 To create a database, we select the new database using the `use` command and give it a name. The `use` command performs two common functions. If the database already exists, the `use` command selects the existing database for use. If the database does not yet exist, `use` creates the database as well as selects it for use.

  * To create a new `shelterDB` database, we type `use` followed by the name of the database, `shelterDB`, after the prompt.

    ```sh
    use shelterDB;
    ```

  * 🔑 Data in MongoDB databases is stored in one or more collections. Just like when we create a database, we do not have to use a special command to create the collection. Instead, we can simply give the new collection a name and insert data in a single step.

    * We start our command with `db.` This `db` refers to the current database in use. We then use dot notation to enter the name of the collection that we want to use. Because `petCollection` doesn't exist yet, it will be automatically created when our command is executed.

    * Next, we add the `insertOne()` method to insert a single document into our new collection, `petCollection`.

      ```sh
      db.petCollection.insertOne();
      ```

  * 🔑 Before we can execute the command, though, we must add our document's data. We define an object that contains the fields and values that we want to store, and pass the object into `insertOne()`.

    ```sh
    db.petCollection.insertOne({ pet: "dog", breed: "chihuahua"});
    ```

  * Now that our command is complete and contains the data we want to insert, we press Enter to execute the command.

  * When a document has been successfully created, an object is returned. If we have not explicitly included a value for the `_id` field, the inserted ID that MongoDB creates for us is included in this object.

    ```sh
    {
     acknowledged: true,
     insertedId: ObjectId("{Unique-ID-String-Here}")
    }
    ```

  * 🔑 To fetch the document we just created, we use the same syntax with the `find()` method. Notice that when our new document is returned, an `_id` has been inserted into the document.

    ```sh
    db.petCollection.find();
    ```

* Scroll to the top of the page, and do the following to explore our data using Compass's interface:

  * When we click on the `Refresh` located the top of the Compass screen below `Local`, the `shelterDB` database that we just created should appear in the list of available databases.

  * We click on the arrow to the left of the `shelterDB` database to open it, and then click on the `petCollection` collection that appears below.

  * Once the `petCollection` is opened, the new document that we created appears in the Documents tab on the right of the screen.

  * Using the visual interface, we can explore, modify, and even delete the data using the Find and Edit buttons on the page. In the next steps, we will learn to perform these CRUD operations within our app.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we create a new database and insert data?

  * 🙋 To create a new database, we use the `use` command followed by the name of the new database that we want to create. To add data, we first must define a collection to hold that data within the database. Then we use an insert method to add our new data object into the collection.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Compass/README.md`.

### 9. Student Do: Compass (15 min)

* Direct students to the activity instructions found in `02-Stu_Compass/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 📖 Create and View Data Using MongoDB Compass

  Work with a partner to implement the following user story:

  * As a developer, I want to create a MongoDB database to store data.

  * As a developer, I want to add a collection to my database and insert a document so that I can visually explore that data using MongoDB Compass.

  ## Acceptance Criteria

  * It is done when I click the Connect button to navigate to the Compass home page.

    > Note: You do not have to paste a connection string before clicking Connect.

  * It is done when I have created a new local database named `inventoryDB` using Compass's Embedded MongoDB Shell (MongoSH).

  * It is done when I have added a new collection named `bookCollection`, inserted a field called `title`, and provided a value for the `title` field.

  * It is done when I refresh the page and the `inventoryDB` appears on the list of databases.

  * It is done when I open the `bookCollection` collection and the document I just created is visible on the Documents tab and an `_id` field has been automatically inserted.

  * It is done when I have modified the existing document, added a new field called `author`, and provided a value for the `author` field.

  ## 📝 Notes

  Refer to the documentation:

  [MongoDB Compass docs on Connect to MongoDB](https://docs.mongodb.com/compass/current/connect/)

  [MongoDB Compass docs on Embedded MongoDB Shell](https://docs.mongodb.com/compass/current/embedded-shell/)

  [MongoDB docs on Creating a MongoDB Database with the CLI (the MongoDB shell)](https://www.mongodb.com/basics/create-database)

  [MongoDB docs on MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)

  [MongoDB Compass docs on View Documents](https://docs.mongodb.com/compass/current/documents/view/)

  [MongoDB Compass docs on Modify Documents](https://docs.mongodb.com/compass/current/documents/modify/)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Image showing bookCollection collection with one document in Compass.](./assets/image_1.png)

  ---

  ## 💡 Hints

  * What shell command do you use to create a new database?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you perform create, insert, and delete operations in bulk using MongoDB? When would this be useful?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Compass (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Compass? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ MongoDB Shell

  * ✔️ `insertOne()`

  * ✔️ `find()`

* Open Compass on your local machine to do the following:

  * 🔑  With MongoDB server installed and running locally, we use the default connection at `127.0.0.1:27017` to connect to Compass by clicking on the `Connect` button.

  * On the Local screen, scroll to the bottom and click on `MONGOSH` to open an embedded MongoDB shell. We will use this shell to enter our commands.

* Open the MongoDB shell to do the following:

  * 🔑 To create a database, we select the new database using the `use` command and give it the name `inventoryDB`.

    ```sh
    use inventoryDB;
    ```

    * We use the `insertOne()` method to insert a single document into our new collection, `bookCollection`. In the next step, we will define the data for our new document.

    ```sh
    db.bookCollection.insertOne();
    ```

  * 🔑 To add our data, we define an object that contains the fields and values that we want to store and pass the object into our `insertOne()`. Then we press Enter to insert the data.

    ```sh
    db.bookCollection.insertOne({ title: "Hello World: The Real Story"});
    ```

  * When a document has been successfully created, an object is returned. If we have not explicitly included a value for the `_id` field, the inserted ID that MongoDB creates is included in this object.

    ```sh
    {
     acknowledged: true,
     insertedId: ObjectId("{Unique-ID-String-Here}")
    }
    ```

  * It is important to note that `insertOne()` method is only one of the ways to insert data with MongoDB. We can also use `insert()` to add single or multiple documents, or `insertMany()` to add an array of documents.

  * 🔑 We can also fetch our new document in various ways. One way is to simply use the `find()` method. This will return all of the documents currently in our collection.

      ```sh
    db.bookCollection.find();
    ```

  * 🔑 We can also use the `find()` method and pass in an empty object `{}`. Because the filter contains no data, this will return all the documents in the collection.

    ```sh
    db.bookCollection.find({});
    ```

  * 🔑 To fetch the only document we just created, we use the `find()` method and pass in a filter. This will return only the documents currently in our collection that match the data in the filter. Using a filter is a useful way to limit the number of documents returned to only those you actually need.

    ```sh
    db.bookCollection.find({ title: "Hello World: The Real Story"});
    ```

* Click Refresh at the top of the Compass screen to demonstrate the following:

  * When we click Refresh at the top of the Compass screen, the `inventoryDB` database that we just created should appear in the list of available databases.

  * When we click the arrow to the left of the `inventoryDB` database to open it and click the `bookCollection` collection that appears below, the new document that we created appears in the Documents tab.

  * Using the visual interface, we can modify the existing document, add a new field called `author`, and provide a value for the `author` field.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What CRUD function does the `insertOne()` method perform?

  * 🙋 The `insertOne()` method is used to create a single, new document.

  * ☝️ What CRUD function does the `find()` method perform?

  * 🙋 The `find()` method reads data from a MongoDB database.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MongoDB docs on introduction to MongoDB](https://docs.mongodb.com/manual/introduction/), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Create-Read (5 min)

* Navigate to `03-Ins_Create-Read/` from the command line and run `npm install` and `node server` to demonstrate the following in Insomnia.

* Open Insomnia on your local machine to demonstrate the following:

  * We can use the `find()` and `insertOne()` methods in our Express routes to create and read data from our MongoDB database.

  * To create a new document, we create a `POST` request and add the route `localhost:3001/create`.

  * We then add the data we want to insert as a JSON object and click `Send` to insert our data.

    ```json
    {
	    "name": "Mickey",
	    "breed": "chihuahua"
    }
    ```

  * In the returned data, we see that our new document includes an `_id` field.

  * To fetch the new document that we just created from our database, we make a `GET` request and add the route `localhost:3001/read` and click Send.

  * Our new document, including the `_id` field with the same value, is returned. If our collection contains any other documents, those documents will be returned as well.

* Open `03-Ins_Create-Read/server.js` in your IDE to demonstrate the following:

  * The `POST` request that we tested with Insomnia uses `insertOne()` to add a single document with a `name` and a `breed` field to the `petCollection`.

    ```js
    app.post('/create', (req, res) => {
      db.collection('petCollection').insertOne(
        { name: req.body.name, breed: req.body.breed },
        (err, results) => {
          if (err) throw err;
          res.json(results);
        }
      );
    });
    ```

  * The `GET` route that we tested uses `find()` to retrieve all the documents from the `petCollection`.

    ```js
    app.get('/read', (req, res) => {
      db.collection('petCollection')
      .find()
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we perform create and read operations on a MongoDB database using Express routes?

  * 🙋 We use the MongoDB methods `insertOne()` and `find()` to create a new document and read all the documents in a collection, respectively.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Create-Read/README.md`

### 12. Student Do: Create-Read (15 min)

* Direct students to the activity instructions found in `04-Stu_Create-Read/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Creating and Reading Data with MongoDB and Express.js

  Work with a partner to add comments that describe the functionality of the code found in [server.js](./Unsolved/server.js).

  ## 📝 Notes

  Refer to the documentation:

  [Express docs on Integrating MongoDB](https://expressjs.com/en/guide/database-integration.html#mongodb)

  [MongoDB docs on Find a Document](https://docs.mongodb.com/manual/reference/method/db.collection.find/)

  [MongoDB docs on Insert a Document](https://docs.mongodb.com/manual/tutorial/insert-documents/)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is **atomicity** within the context of databases? Why is it important to understand when performing write operations with MongoDB?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: Create-Read (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with creating and reading data with a MongoDB database? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `require('mongodb').MongoClient`

  * ✔️ `mongodb://127.0.0.1:27017/inventoryDB`

  * ✔️ `mongodb.connect()`

  * ✔️ `collection()`

  * ✔️ `insertOne()`

  * ✔️ `find()`

* Open `04-Stu_Create-Read/Solved/server.js` in your IDE and explain the following:

  * 🔑 To integrate MongoDB into an existing Express server, we must install the `mongodb` package using the command `npm install mongodb`, and require `mongodb` and the `MongoClient` class in the `server.js` file.

    ```js
    const mongodb = require('mongodb').MongoClient;
    ```

  * 🔑 We connect to a local instance of MongoDB, including the database name, using `mongodb://127.0.0.1:27017/` and appending the database name.

    ```js
    const connectionStringURI = `mongodb://127.0.0.1:27017/inventoryDB`;
    ```

  * We declare a variable to store our connection.

    ```js
    let db;
    ```

  * 🔑 We then use the `db` variable to create a connection to a MongoDB instance and return the reference to the database.

    ```js
    mongodb.connect(
      connectionStringURI,
      (err, client) => {
        db = client.db();
        app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`);
        });
      }
    )
    ```

  * 🔑 After MongoDB is integrated into the server, we can then use MongoDB methods to perform CRUD operations -- such as create and read -- directly in a route. This allows us to interact with the underlying MongoDB in our apps.

  * To create a `POST` request, we start by creating a `POST` request and defining a `/create` route.

    ```js
    app.post('/create', (req, res) => {}
    ```

  * Inside the request, we add our query. We use `collection()` to create or select an instance of a collection and `insertOne()` to add a single document to the selected collection. We also add handling for both errors and the results.

    ```js
    db.collection('bookCollection').insertOne(
      { title: req.body.title, author: req.body.author },
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
    ```

  * To insert multiple documents, we use `insertMany()` and place the documents we want to insert inside an array.

    ```js
    app.post('/create-many', function (req, res) {
      db.collection('bookCollection').insertMany(
        [
          {"title" : "Oh the Places We Will Go!"},
          {"title" : "Diary of Anne Frank"}
        ],
        (err,results) => {
          if (err) throw err;
          res.json(results);
        }
      );
    });
    ```

  * To create a `GET` request to fetch data, we use the `find()` method. Since the filter contains no data, all documents will be returned. We also use the `toArray()` method so that multiple documents are returned in an array. Because the filter contains no data, all documents will be returned.

    ```js
    app.get('/read', (req, res) => {
      db.collection('bookCollection')
      .find({})
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
    })
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we insert multiple documents using a single MongoDB method?

  * 🙋 We use the `insertMany()` method and pass in an array containing all the documents we want to add.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MongoDB docs on insert methods](https://docs.mongodb.com/manual/reference/insert-methods/) and the [MongoDOB docs on query methods](https://docs.mongodb.com/manual/tutorial/query-documents/), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: Update-Delete (5 min)

* With a MongoDB server installed locally and running, open Compass on your local machine to do the following:

  * Below New Connection at the center of the screen, click Connect.

  * The built-in MongoDB shell is located on the bottom-left of the Local screen. Click MONGOSH to open a new MongoDB shell.

* In the open MongoDB shell, do the following:

  * 🔑 To create a database, we select the new database using the `use` command, and give it a name.

    ```sh
    use mygroceryDB;
    ```

  * 🔑 We use the `insertOne()` method to a create a new collection, `groceryCollection`, and insert a single document with two key pairs.

    ```sh
    db.groceryCollection.insertOne( {"item": "banana", "department": "produce"} );
    ```

  * Click Enter to execute the shell command. Make sure you note the generated `ObjectId({Unique-ID-String-Here})`. We will use this unique identifier to delete this record later on.

  * 🔑 To verify that the document has been added to our new collection, we can use the `find` method and pass in an empty object `{}` so that all documents currently in the collection will be returned.

    ```sh
    db.groceryCollection.find({});
    ```

  * 🔑 To update the document we just created, we use the `updateOne()` method to update a single document.

    * The first object that we add is key pair that we want to use to find the document, or the filter. In this case, we are going to use the filter to find the document by its item name. Using a filter is important so that only the document that you want updated is changed -- not all the documents.

    * Then, we use the MongoDB update operator `$set` to set our new value, updating our document.

    ```sh
    db.groceryCollection.updateOne({"item": "banana"}, {$set: { "item" : "apple"}});
    ```

  * 🔑 To delete the document that we just updated, we use the `deleteOne()` method.

    * It is important that you provide filter information so that only the document that you want deleted is deleted, and not all the documents in the collection!

    * In this case, only the document with the item name of `apple` will be deleted. If there happens to be more than one document with the item of `apple`, only the first one will be deleted. Don't press Enter yet!

      ```sh
      db.groceryCollection.deleteOne( {"item": "apple"});
      ```

  * A better way to do this is to use the unique identifier, the `_id`. Replace the `item` field with `_id` and paste the unique ObjectId generated by MongoDB you noted above as the key-pair value. Then, press Enter to execute the command.

  * Notice that to return the id, we must wrap the generated id value in `ObjectId()`! In Compass, the `ObjectId()` is automatically available. However,  in the activity's `server.js` file, we have to require the `ObjectId` before we can return a value! This is important to make sure the document is actually returned by id and deleted!

      ```sh
      db.groceryCollection.deleteOne({ "_id" : ObjectId("YOUR-UNIQUE_ID")} );
      ```

  * 🔑 To verify that the document has been deleted, we can use the `find` method. If successful, no documents should be returned, because the one document in the collection has now been deleted.

      ```sh
      db.groceryCollection.find({});
      ```

  * While this demonstration uses `updateOne()` and `deleteOne()` to work with a single document, MongoDB has multiple update and delete methods that we can use to best handle our data.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use MongoDB methods to perform update and delete operations on a MongoDB database?

  * 🙋 We can use MongoDB's `updateOne()` to update a single document and `deleteOne()` to delete a single document. But MongoDB is not limited to working on one document at a time. There are multiple update and delete methods that we can research and use in our code to work with both single documents and multiple documents at the same time.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Update-Delete/README.md`.

### 15. Student Do: Update-Delete (15 min)

* Direct students to the activity instructions found in `06-Stu_Update-Delete/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 🏗️ Delete Data Using MongoDB and Express.js

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to delete an existing document in a MongoDB database.

  * As a developer, I want to be able to update data in an existing document in a MongoDB database.

  ## Acceptance Criteria

  * It is done when I use the existing `/create` GET Route to create a new document that includes a title.

  * It is done when I add a new `/delete` DELETE route that uses a filter to find a single document by its unique `_id` and deletes that document. The `_id` value should be provided by the request body.

  * It is done when I test the route using Insomnia and the document that I just created is deleted. No other documents should be changed.

  ## 💡 Hints

  * Why is it important to specify a filter when updating and deleting documents?

  * Why do you need to require the `ObjectId()` when sending an `_id` string in JSON?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are indexes? How do they support the efficient execution of queries in MongoDB?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: Update-Delete (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with updating and deleting data in a MongoDB database? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with updating and deleting data in a MongoDB database? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `ObjectId()`

  * ✔️ `deleteOne()`

  * ✔️ filter object

* Open `06-Stu_Update-Delete/Solved/server.js` in your IDE and explain the following:

  * Each MongoDB document is given a unique, 12-byte BSON type identifier. To access that identifier, we have to require the `ObjectId` type from `mongodb`.

    ```js
    const ObjectId = require('mongodb').ObjectId;
    ```

  * Next, we create a `DELETE` request that we will use to delete data and define the `/delete` route. Remember to wrap the `req.body.id` in `ObjectId` to return the unique identifier from MongoDB.

    ```js
    db.collection('bookCollection').deleteOne(
      // This is the filter. We delete only the document that matches the _id provided in the request body,
      { _id: ObjectId(req.body.id) },
      (err) => {
        if (err) throw err;
        res.send("Document deleted");
    ```

  * 🔑 When using a delete method, it is very important that we specify a filter so that only the documents we want deleted are removed. This filter will match the id that we provide in the request body and only delete that document, not all documents!


    ```js
    db.collection('bookCollection').deleteOne({ _id: ObjectId(req.body.id) },...)
    ```

  * 🔑 We also add logic to handle our data response and possible errors. If the document is deleted, `Document deleted` will be returned.

    ```js
    (err) => {
      if (err) throw err;
      res.send('Document deleted');
    }
    ```

* Navigate to `06-Stu_Update-Delete/Solved/` in your command line and run `npm install` and `node server` to demonstrate the following in Insomnia:

  * To test our route, we first use a POST request with the route `localhost:3001/create` to insert a new document with a title `Hello World` into our database. We add the data object into the request body as JSON.

    ```json
    {
	      "title": "Hello World"
    }
    ```

  * We click SEND and copy the id string for our new document from the returned data. We will use that to delete the document that we just created by id.

  * To delete our document, we use a DELETE request with the route `localhost:3001/delete`. In the request body, we add the string of the new document that we copied, wrapped in `ObjectID()`.

    ```json
    {
	    "id": "{INSERT-COPIED-ID-HERE}"
    }
    ```

  * We click SEND and see that `Document deleted` has been returned.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it important to use a filter object when using a MongoDB delete method?

  * 🙋 When using a delete method, it is important that you only remove the documents you are targeting, not all the documents. Using a filter allows us to target only the documents we want to delete. In addition, by filtering by id, we know we are only targeting one document, because each id is unique.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MongoDB docs on delete methods](https://docs.mongodb.com/manual/reference/delete-methods/), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: Embedded Documents (5 min)

* Open `07-Ins_Embedded-Documents/models/data.js` in your IDE and demonstrate the following:

  * To create a data relationship in MongoDB, it is possible to use a reference to establish a relationship between two documents. This is similar to SQL databases' primary and foreign keys. In this example, the `promotion_id` refers to the promotion object below.

    ```js
     {
       department: 'floral',
       promotion_id: 'flowers',
     },
     {
      promotion_id: 'flowers',
      sale: 'discount on red flowers',
      percentage_discount: 50,
    },
    ```

  * We can also model relationships much more easily by using embedded documents. An embedded document is simply a document inside another relationship. Using embedded documents reduces the number of read operations needed to retrieve data and makes it simple to determine relationships among documents.

  * To model a one-to-one relationship, we embed one related document as a subdocument. In this instance, the parent document has one related promotion child document.

    ```js
    {
      department: 'frozen',
      promotion: {
        promotion_id: 'popsicle',
        sale: 'discount frozen treats',
        percentage_discount: 20,
      },
    }
    ```

  * To model a one-to-many relationship, we add many related embedded documents. In this instance, the parent document has multiple related child documents.

    ```js
    {
      department: 'produce',
      promotion: [
        {
          promotion_id: 'Monday',
          sale: 'discount on bananas',
          percentage_discount: 25,
        },
        {
          promotion_id: 'Tuesday',
          sale: 'half-price apples',
          percentage_discount: 50,
        },
        {
          promotion_id: 'Wednesday',
          sale: 'discount on cherries',
          percentage_discount: 10,
        },
        {
          promotion_id: 'Thursday',
          sale: 'free grapes',
          percentage_discount: 100,
        },
        {
          promotion_id: 'Friday',
          sale: '5% off berries',
          percentage_discount: 5,
        },
        {
          promotion_id: 'Saturday',
          sale: 'discount on all fruit',
          percentage_discount: 30,
        },
        {
          promotion_id: 'Sunday',
          sale: 'discount on all fruit',
          percentage_discount: 12,
        },
      ],
    },
    ```

* Open `07-Ins_Embedded-Documents/server.js` in your IDE and demonstrate the following:

  * Just like any other object, to access the data in an embedded object, we use dot notation. This will find any document in the `groceryList` collection that has a `percentage_discount` that is greater than 30 inside the `promotion` document.

    ```js
    app.get('/sale-over-30', (req, res) => {
      db.collection('groceryList')
      .find({ 'promotion.percentage_discount': { $gte: 30 } })
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
    })
    ```

* Navigate to `07-Ins_Embedded-Documents/` in your command line and run `npm install` and `node server` to demonstrate the following in Insomnia:

  * When we test the `GET` request with the route `localhost:3001/sale-over-30`, all documents that have a matching percentage discount are returned.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we model a one-to-one or one-to-many relationship with MongoDB?

  * 🙋 We can embed one or more related subdocuments, or child documents, and access them using dot notation.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Embedded-Documents/README.md`.

### 18. Student Do: Embedded Document (15 min)

* Direct students to the activity instructions found in `08-Stu_Embedded-Documents/README.md`, which are also shown below.

* Break your students into pairs who will work together on this activity.

  ```md
  # 🐛 Query on Embedded Document Not Returning Matching Data

  Work with a partner to resolve the following issue(s):

  * As a book store owner, I should be able to execute a query that returns a list of books that have a price of less than $10.

  * As a book store owner, I should be able to execute a query that returns a list of books that has at least one featured author.

  ## Expected Behavior

  When I query the embedded data using the `db.collection.find()` method, the matching data should be returned.

  ## Actual Behavior

  When I query the embedded data using the `db.collection.find()` method, no matching data is returned.

  ## Steps to Reproduce the Problem

  Follow these steps to reproduce the problem:

  1. In the Unsolved folder, run `npm install` and `node server`.

  2. Open Insomnia and enter the GET Route `/price-less-than-10`. A list of books that have a price of less than $10 is not returned.

  3. Open Insomnia and enter the GET Route `/featured-authors`. A list of books that have at least one featured author is not returned.

  ---

  ## 💡 Hints

  What notation do you use to access an object inside another object in JavaScript?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How would you query an array of embedded documents in MongoDB?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: Embedded Documents (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with embedded documents? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ One-to-one relationships

  * ✔️ Dot notation

  * ✔️ One-to-many relationship

* Open `08-Stu_Embedded-Documents/Solved/server.js` in your IDE and explain the following:

  * When we look at the data, we see that each book has one set of information. This is a one-to-one relationship. We also see that the information is an embedded document.

    ```js
    {
      title: 'Heads You Lose',
      authors: [
        { name: 'Lisa Lutz', featured: false },
        { name: 'David Hayward', featured: false },
      ],
      information: { ISBN: 9780399157400, price: 20, total_in_stock: 8 },
    },
    ```

  * 🔑 To access the `price` field inside the embedded `information` document, we use dot notation.

    ```js
    app.get('/price-less-than-10', (req, res) => {
      db.collection('authorList')
      .find({ 'information.price': { $lt: 10 } })
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    ```

  * When we look at the data, we see that each book can have multiple authors. This is a one-to-many relationship.

    ```js
    {
      title: 'Good Omens',
      authors: [
        { name: 'Neil Gaiman', featured: true },
        { name: 'Terry Pratchett', featured: true },
      ],
      information: { ISBN: 9780425132159, price: 10, total_in_stock: 10 },
    },
    ```

  * 🔑 To access the `featured` field inside the embedded `author` document, we can use dot notation.

    ```js
    app.get('/featured-authors', (req, res) => {
      db.collection('authorList')
      .find({ 'authors.featured': true })
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
    });
    ```

* Navigate to `08-Stu_Embedded-Document/Solved` in your command line and run `npm install` and `node server` to demonstrate the following in Insomnia:

  * When we test the `GET` request with the route `localhost:3001/price-less-than-10`, all documents that have an embedded document with a `price` field that is less than 10 are returned.

  * When we test the `GET` request with the route `localhost:3001/featured-authors`, all documents that have an embedded document with a `featured` field that is `true` are returned.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we access fields in an embedded document?

  * 🙋 Because we are working with objects, we use dot notation.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MongoDB docs on modeling one-to-one relationships with embedded documents](https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-one-relationships-between-documents/) and the [MongoDB docs on modeling one-to-many relationships with embedded documents](https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/), and attend Office Hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
