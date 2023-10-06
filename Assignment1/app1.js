//Question-1
//Create an array containing letter characters
// Add each letter in the text to the array
//Create an object to count letter occurrences
//Calculate the number of repeated letters by rotating through the array

const inputString =
  "How would you calculate the number of repeated letters in the string?";

const lettersArray = [];

for (const letter of inputString) {
  if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= "Z")) {
    lettersArray.push(letter);
  }
}
console.log(lettersArray);

const letterCount = {};

for (const letter of lettersArray) {
  if (letterCount[letter]) {
    letterCount[letter]++;
  } else {
    letterCount[letter] = 1;
  }
}

for (const letter in letterCount) {
  if (letterCount[letter] > 1) {
    console.log("The letter", letter, "is repeat", letterCount[letter]);
  }
}
