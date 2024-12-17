import { v4 as uuidv4 } from "uuid";

import { readQuotes, writeQuotes } from "./helpers.js";

export async function getQuotes() {
  const quotes = await readQuotes();
  return quotes;
}

export async function addQuote(quoteText, author = "Unknown") {
  const newQuote = {
    id: uuidv4(),
    quoteText,
    author,
  };

  const quotes = await readQuotes();

  quotes.push(newQuote);
  await writeQuotes(quotes);

  return newQuote;
}

export async function getQuoteByID(id) {
  const quotes = await readQuotes();

  const found = quotes.find((quote) => quote.id === id);

  return found;
}

export async function editQuote(id, newQuoteText, newAuthor) {
  const quotes = await readQuotes();

  const quote = quotes.find((quote) => quote.id === id);

  if (quote) {
    quote.quoteText = newQuoteText ?? quote.quoteText;
    quote.author = newAuthor ?? quote.author;
  }

  await writeQuotes(quotes);

  return quote;
}

export async function deleteQuote(id) {
  const quotes = await readQuotes();

  const index = quotes.findIndex((quote) => quote.id === id);

  if (index === -1) {
    return null;
  }

  const [deletedQuote] = quotes.splice(index, 1);
  await writeQuotes(quotes);
  return deletedQuote;
}
