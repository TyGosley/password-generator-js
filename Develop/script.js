// Assignment code here
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">", "+", "-", "_", ",", ".", "=", "'"];

var passwordLength;
var confirmLowerChar;
var confirmUpperChar;
var confirmNumbers;
var confirmSpecialChar;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Prompt length of password between 8 and 128: yes or no
function generatePassword(){
  var passwordLength = prompt("How many characters would you like in your password?");

if (passwordLength <= 8 || passwordLength >= 128) {
  alert("Please choose between 8 and 128 characters.");
  passwordLength = prompt("How many characters would you like in your password?");
}
};

generatePassword();
passwordLength = parseInt(passwordLength);

// confirm prompt
// Prompt would you like lowerChar
// Prompt would you like upperChar
// Prompt would you like numbers
// Prompt would you like specialChar

var confirmLowerChar = confirm("Click ok if you want to include lower case characters in your password.");
var confirmUpperChar = confirm("Click ok if you want to include upper case characters in your password.");
var confirmNumbers = confirm("Click ok if you want to include numbers in your password.");
var confirmSpecialChar = confirm("Click ok if you want to include special characters in your password.");




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
