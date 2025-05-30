// ### Question 6: Text Processing


const words = ["javascript", "array", "method", "function", "variable", "object", "string"];

// a) Find the longest word
let longestWord = words.reduce((a, b) => {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
});
console.log(longestWord);

// b) Calculate the total number of characters across all words
let totalChar = words.reduce((a, b) => a +b.length,0 );
console.log(totalChar);

// c) Count how many words contain the letter 'a'
let countA = words.filter((e) => e.includes('a'));
console.log(countA.length);

// d) Create a single string with all words joined by commas
console.log(words.join(', '));

// e) Find the word that comes first alphabetically
let firstWord = words.sort();
console.log(firstWord[0]);