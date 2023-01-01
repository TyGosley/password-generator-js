// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">", "+", "-", "_", ",", ".", "=", "'"];

var passwordLength;
var confirmLowerChar;
var confirmUpperChar;
var confirmNumbers;
var confirmSpecialCharacters;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// var passwordLength = prompt("Please choose a password between 8 and 128 characters");
//   if (passwordLength <= 8 || passwordLength>= 128) {
//   alert("Please choose a password between 8 and 128 characters");
//     }else {
//       prompt(`You chose ${passwordLength} characters for your password.`);
//         console.log("You chose " + passwordLength + " characters!");
// }

// ask for character Length
function passwordLength() {
charLength = prompt("Please choose a password length between 8 and 128 characters");

if (charLength <= 8 || charLength >= 128) {
  alert("Your password must be between 8 and 128 characters");
charLength = prompt("Please choose how many characters you want in your password.");
}};
passwordLength();
charLength = parseInt(charLength, 10);

// Confirm remaining password prompts
var confirmLowerChar = confirm("Click ok if you want to include lower case characters in your password.");
var confirmUpperChar = confirm("Click ok if you want to include upper case characters in your password.");
var confirmNumbers = confirm("Click ok if you want to include numbers in your password.");
var confirmSpecialChar = confirm("Click ok if you want to include special characters in your password.");


// build character set for random password
var selectedChar = "";
if (confirmLowerChar === true) {
  selectedChar += lowerCase;
}

if (confirmUpperChar === true) {
  selectedChar += upperCase;
}

if (confirmNumbers === true) {
  selectedChar += numbers;
}

if (confirmSpecialChar === true) {
  selectedChar += specials;
}



let randomArray = [];
for (var i = 0; i < charLength ; i++) {
  //get random value from array
  let randomValue = i[Math.floor(Math.random() * i.length)];
  // put that value inside newArray
  randomArray.unshift(randomValue);
  // turn array to string
  let password1 = randomArray.join('');
  document.getElementById("password").innerText = password1;
  
}


// Write password to the #password input
// function writePassword() {}
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
