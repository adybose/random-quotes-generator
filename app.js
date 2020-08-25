const quotes = [
    {
        quote: `If you are working on something exciting that you really care about, you don’t have to be pushed. The vision pulls you.`,
        author: '- Steve Jobs'
    },
    {
        quote: `Before software can be reusable, it first has to be usable.`,
        author: '- Ralph Johnson'
    },
    {
        quote: `If debugging is the process of removing software bugs, then programming must be the process of putting them in.`,
        author: '- Edsger Dijkstra'
    },
    {
        quote: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
        author: `- Martin Fowler`
    },
    {
       quote: `Copy and paste is a design error.`,
       author: `- David Parnas`
    }
]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
});


