/*
    CIT 281 Project 2
    Name: Michael O'Neal
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

let lengthOfOutputString = getRandomInteger(5, 26);

// Returns a single, random, lowercase letter
function getRandomLetter() {
    randomLetter = alphabet[getRandomInteger(0,alphabet.length)];
    return randomLetter;
}

// Returns a random length string with random lowercase letters
function getRandomString(minLength, maxLength) {
    for (let j = 0; j < getRandomInteger(10, 20); j++) {
        result += getRandomLetter();
    }
    return result
}

//Returns a string in ascending order
function getSortedString(string) {
    return string.split('').sort().join(''); 
}

for (let i = 0; i < lengthOfOutputString; i++) {
    result += getRandomLetter();
}

getRandomString();