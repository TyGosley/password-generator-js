// Assignment code here
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">", "+", "-", "_", ",", ".", "=", "'"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Prompt length of password between 8 and 128: yes or no
function writePassword(){
   passwordLength = prompt("How many characters would you like in your password?");

if (passwordLength < 8 || passwordLength > 128) {
  alert("Please choose between 8 and 128 characters.");
  passwordLength = prompt("How many characters would you like in your password?");
}
};

writePassword();
passwordLength = parseInt(passwordLength);

// confirm prompt

// Prompt would you like lowerChar: yes or no

// confirm prompt

// Prompt would you like upperChar: yes or no

// confirm prompt

// Prompt would you like numbers: yes or no

// confirm prompt

// Prompt would you like specialChar: yes or no

// confirm prompt

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
