const quoteContainer = document.querySelector('.quote-container');
const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const newQuoteButton = document.querySelector('#new-quote');

let quotes = [
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    // Add more quotes here
];

newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = `— ${randomQuote.author}`;
});