/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

var refresh= setInterval(printQuote, 20000);

/*** 
 * `quotes` array 
***/
// first and last quote are without citation and year respectively
var quotes= [
  {
    quote: "Frankly my dear, I don't give a damn",
    source: "Rhett Butler",
    year: '1939'
  },
  {
    quote: "I'm the king of the world!",
    source: "Leonardo DiCaprio",
    citation: "Titanic",
    year: '1997'
  },
  {
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    source: "Robin Williams",
    citation: "Dead Poets Society",
    year: '1989'
  },
  {
    quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source: "Tom Hanks",
    citation: "Forrest Gump",
    year: '1994'
  },
  {
    quote: "You talking to me?",
    source: "Robert DeNiro",
    citation: "Taxi Driver",
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes) {
  var random= quotes[Math.floor(Math.random() * quotes.length)];
  return random;
}


/***
 * `printQuote` function
***/
function printQuote() {
  var selectedQuote= getRandomQuote(quotes);
  var outputQuote= '<p class="quote">' + selectedQuote.quote + '</p>';
  outputQuote+= '<p class="source">' + selectedQuote.source
    if(selectedQuote.citation) {
      outputQuote+= '<span class="citation">' + selectedQuote.citation + '</span>';
    }
    if(selectedQuote.year) {
      outputQuote+= '<span class="year">' + selectedQuote.year + '</span>'
    }'</p>'
  document.getElementById('quote-box').innerHTML = outputQuote;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);