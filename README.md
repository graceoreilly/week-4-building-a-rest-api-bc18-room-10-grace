# Workshop - Building a REST API

## 🎯 Workshop objectives

- Build a REST API using Node.js and Express
- Create API endpoints allowing the user to create, read, update and delete a resource
- Use Postman or ThunderClient to make HTTP requests to test API endpoints

## 💼 The brief

The goal is to build an inspirational quotes app to ensure that words of wisdom are never lost and are easily accessible for future users.

Today, the task is to construct the REST API, which will serve as the backend for the app.

The API will use the `quotes.js` helper functions previously built in the "crud-functionality" workshop.

The API will feature the following endpoints:

| HTTP Method | Path        | Request Body (JSON)                       | Response Body (JSON)          | Status Code | Result                          |
| ----------- | ----------- | ----------------------------------------- | ----------------------------- | ----------- | ------------------------------- |
| GET         | /quotes     |                                           | An array of all quote objects | 200         | Gets all quotes                 |
| GET         | /quotes/:id |                                           | A matching quote object       | 200         | Gets a quote with a matching id |
| POST        | /quotes     | `{ quoteText: (String), author: (String) }` | A newly created quote object  | 201         | Creates a new quote             |
| PATCH       | /quotes/:id | `{ quoteText: (String), author: (String) }` | An edited quote object        | 200         | Updates a quote                 |
| DELETE      | /quotes/:id |                                           | A deleted quote object        | 200         | Deletes a quote                 |

## 🎫 Ticket 1 - Starter files

This project has already been initialized for you using the `npm init` command.

Open the `package.json` file and you'll notice that the following dependencies have already been added:

- uuid - a package you'll use to generate unique ids
- express - a package you'll use to handle http requests and send responses

Now would be a good time to install these packages and their dependencies.

Run `npm install` in the terminal.

Another key thing to notice is the `dev` script.

This will enable you to start the Express server by running `npm run dev` in the terminal.

The following files have been created for you in the root of your project:

- `quote.js` - where the helper functions will be located
- `quotes.json` - where the list of quotes will be stored
- `app.js` - where your Express/API logic will be located
- `.gitignore` - tells git what files to ignore
- `package.json` - where your project dependencies are listed
- `package-lock.json` - where your project dependencies are locked
- `helpers.js` - where the helper functions will be located
- `config.js` - where the configuration for the project will be located
- `README.md` - where you're reading this workshop

We've initialized `quotes.json` with an array of quote objects to get you started.

💡 In your `.gitignore` file we've added "node_modules" as you don't want all of those files being pushed up to GitHub.

### 🎫 Ticket 2 - Getting familiar with app.js

Open `app.js`.

You'll notice that the code for a basic Express API is already there.

💡 Start the server using `npm run dev`.

💡 You can then test out the route handler provided by sending a HTTP GET request (via Postman or Thunderclient) to the URL logged in the terminal.

💡 If the server starts and you're getting the correct response (`Welcome to the inspirational quotes API`) in Postman or Thunderclient, move on to the next ticket. ✔️

💡 If you need to stop the server, you can stop the server by holding `ctrl c`. Remember if the server isn't running you can't get feedback from your endpoints.

## 🎫 Ticket 3 - Create a GET route handler for all quotes

Write a request handler to return the correct response and perform the correct action when a `GET` request is received to `/quotes`. Choose the appropriate helper function from `quote.js` to get your data.

## 🎫 Ticket 4 - Create a GET route handler that gets a particular quote

Write a request handler to return the correct response and perform the correct action when a `GET` request is received to `/quotes/:id`, with a particular ID provided in the url. Choose the appropriate helper function from `quote.js` to get your data.

## 🎫 Ticket 5 - Create the POST route handler

Write a request handler to return the correct response and perform the correct action when a `POST` request is received to `/quotes`. Choose the appropriate helper function from `quote.js` to create your data.

## 🎫 Ticket 6 - Create the PATCH route handler

Write a request handler to return the correct response and perform the correct action when a `PATCH` request is received to `/quotes/:id`. Choose the appropriate helper function from `quote.js` to update your data.

## 🎫 Ticket 7 - Create the DELETE route handler

Write a request handler to return the correct response and perform the correct action when a `DELETE` request is received to `/quotes/:id`. Choose the appropriate helper function from `quote.js` to delete your data.

## 🥇 You've finished

The goal is to learn, not to build a perfect production-ready API. You've already done great work - now just try taking it a little further!

🧠 Reflect on what you've learned about building a simple API. Here are some steps you can take:

- Review your code and see if anything can be refactored to make it more readable and maintainable. **_If you make any changes while refactoring, thoroughly re-test your routes using Postman or Thunderclient._**

- Reason about your code - what are the request and response objects? Try console logging them to inspect their properties. If you're pairing with someone, talk through your code together.

- How does changing the API endpoints affect the requests your server receives? Try deliberately breaking things - comment out lines in the `app.js`, change the port, etc.

- Help others in your bootcamp cohort if they need assistance getting their API working properly.

## 🏁 Stretch Goals

Now that you have built a basic CRUD API, here are some beginner-level ways to improve it:

- Add basic input validation to make sure required fields are sent in requests.

- Handle errors gracefully by sending custom error messages instead of crashing the server.

- Put the api behind a well structured path which contains a version, e.g. instead of `/quotes` the path would be `/api/v1/quotes`. Try to look into and using a router file and the `express.Router` method [near the bottom of this documentation](https://expressjs.com/en/guide/routing.html). You can read more about [api versioning here](https://www.postman.com/api-platform/api-versioning/).
