// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = newPassword;
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Prompts

let answer = confirm("Wassup? Do you like apples?");
console.log(answer);

let answerNum = confirm("Do you want numbers?");
console.log(answerNum);

let answerUppercase = confirm("Do you want upper case letters?");
console.log(answerUppercase);

let answerLowercase = confirm("Do you want lower case letters?");
console.log(answerLowercase);

let answerSpecialChars = confirm("Special Characters?");
console.log(answerSpecialChars);

let confirmLength = prompt("How many characters? (8 - 128 only)");
if (confirmLength < 8 || confirmLength > 128) {
  alert("Password length is too small or big");

}
let pwLength = parseInt(confirmLength);


// Char possible char set builder

let possibleChars = '';

let numbers = '1234567890';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let specialChars = '!@#$%^&*()';

// Logic

if (answerNum) {
  possibleChars = possibleChars + numbers;
  console.log(possibleChars);
}  

if (answerLowercase) {
  possibleChars = possibleChars + lowerCase;
  console.log(possibleChars);
} 

if (answerUppercase) {
  possibleChars = possibleChars + upperCase;
  console.log(possibleChars);
}

if (answerSpecialChars) {
  possibleChars = possibleChars + specialChars;
  console.log(possibleChars);
}

// Generating password as string

let newPassword = "";

for (let i = 0; i < pwLength; i++) {
  newPassword = newPassword + possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
}

console.log(newPassword);
hhu