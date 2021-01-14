# News API
## Steps to run this application:
1. Create a .env file
    You can create your own key from https://newsapi.org or use the provided one.

2. To run the application install node.js (> v10.16.0) and execute below commands:
    npm i
    npm start

3. To run the test cases execute below commands:
    npm test

## Project Description:
Node.js back-end application

Framework - Express
Test library - Mocha
Assertion library - Chai

By default the app listens on port 8080. A common express error handler is used to return error object. There are two endpoints developed to return the news as described below:
1. GET "api/headlines" - fetches newsapi top headlines for UK region
2. GET "api/news?q=query" - fetches newsapi everything

Dependencies:
1. newsapi - Used to fetch headlines and other news. Currently we have not cached the response but could have been done if we were to use paid version. However, this library caches the response for 100 request or 5 mins whichever happens first.
2. CORS - Used to allow only "http://localhost:3000" to make calls to the APIs
3. dotenv - Used to pass newsAPIKey in process.env object