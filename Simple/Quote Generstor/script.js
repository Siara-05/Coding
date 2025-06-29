
const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things."
];

const quoteElement = document.getElementById("quote");
let currentIndex = 0;

// Shuffle the quotes array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(quotes);

function generateQuote() {
    if (currentIndex >= quotes.length) {
        quoteElement.innerHTML = "No more quotes available!";
        return;
    }

    quoteElement.innerHTML = quotes[currentIndex];
    currentIndex++;
}
















/*


const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things."
]



const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }


    while (true) {

    const randomIdx = Math.floor(Math.random()* quotes.length)
   
    if (usedIndexes.has(randomIdx)) continue

    const quote= quotes [randomIdx]
    quoteElement.innerHTML= quote;
    usedIndexes.add(randomIdx)
    break
    }
}
*/

