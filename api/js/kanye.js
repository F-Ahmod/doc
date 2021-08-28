// const loadQuotes = () => {
//     fetch('https://api.kanye.rest/')
//         .then(res => res.json())
//         .then(data =>displayQuotes (data));
// }

// const displayQuote = quote => {
//     const quoteElement = document.getElementById('quote');
//     quoteElement.innerText = quote.quote;
// }

const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then (data => displayQuotes(data));
}
const displayQuotes =quot =>{
    const quoteElement=document.getElementById('quote');
    quoteElement.innerText=quot.quote;
};