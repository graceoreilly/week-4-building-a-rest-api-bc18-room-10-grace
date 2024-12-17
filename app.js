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
//4. use the add quote function✅
//5. add the new quote to the body of the request✅

//ticket 6
//create a post request, path is /quotes
app.post("/quotes", async (req, res) => {
//define what needs to go into the body of the post request - quoteText, author
// e.g it extracts the quoteText property from the req.body and assigns it to a variable named quoteText
//req.body is telling the post request, there needs to be a body and what needs to be in it
const { quoteText, author } = req.body; 
//if quoteText is not defined in the body, error message says it is the client's error
if (!quoteText) { 
  return res.status(400).send({error: "Quote is required!"});
}
//create a variable to store newQuote data
//use the addQuote function(e.g. call it) to take in two variables and store this info in the newQuote variable
//this function adds the new quote to the variable
const newQuote = await addQuote(quoteText, author);
//set the response status to 201 (status for created)
//the .send(newQuote) will send the new quote object as the response body to the client to confirm to the client that the new quote was created
res.status(201).send(newQuote);
})



app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});