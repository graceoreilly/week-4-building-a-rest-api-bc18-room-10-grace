import express from "express";
const app = express();
const PORT = 3000;

import {
  getQuotes,
  getQuoteByID,
  addQuote,
  editQuote,
  deleteQuote,
} from "./quote.js";

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to the inspirational quotes API");
});


//ticket 3
app.get("/quotes", async (req, res) => { //create get request. /quotes url.
  const quotes = await getQuotes(); 
  res.status(200).send(quotes); //response should be to send getQuotes
});

//needed to be an async function with await, as getQuotes is an async function, so this function was fulfulling before the getQuotes function, so returning an empty object.

//ticket 4
app.get("/quotes/:id", async (req, res) =>{ 
const { id } = req.params; //take the ID from the URL
  const quoteId = await getQuoteByID(id);
res.status(200).send(quoteId);
})

//ticket 5
//PLAN:
//1. write a POST request✅
//2. define the path to receive as /quotes✅
//3. use an async function✅
//4. use the edit quote function✅
//5. add the new quote to the body of the request✅

app.post("/quotes", async (req, res) => {
const { quote } = req.body;
const quotes = await editQuote()
res.status(201).send(req.body);
})

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});