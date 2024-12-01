import {quotes} from './quotes.js';
// so that we can get unique quotes everytime we click
const quoteElement =document.querySelector('#quote');
const usedIndexes = new Set();
function  generateQuote(){
    const randomIdx = Math.floor(Math.random()*quotes.length);
    //floor will always round down beacuse length is always one index beyond what we wants to access
    const quote = quotes[randomIdx];
    quoteElement.innerHTML=quote;
}
window.generateQuote = generateQuote;