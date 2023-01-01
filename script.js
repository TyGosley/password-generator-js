document.querySelector("#generate").addEventListener("click", writePassword);

// Variable Arrays for characters being used
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">", "+", "-", "_", ",", ".", "=", "'"];


var passwordLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecials;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters");

  // Use loop if they choose outside 8 and 128
  while(passwordLength <= 7 || passwordLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var passwordLength = prompt("Please choose a password length between 8 and 128 characters");
      } 

  
    // Determine parameters of password with confirm prompt
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters in your password");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters in your password");
    var confirmNumbers = confirm("Click OK to confirm if you would like to include numbers in your password");    
    var confirmSpecials = confirm("Click OK to confirm if you would like to include special characters in your password");
      // create a loop for password confirms 
      while(confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSpecials === false) {
        alert("You must choose at least one set of characters");
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters in your password");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters in your password");   
        var confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters in your password");    
        var confirmSpecials = confirm("Click OK to confirm if you would like to include special characters in your password");
    } 

      // Assign an action to the password parameters.  Use concat to tie strings together here
      var passwordCharacters = []
      
      if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(lowerCase)
      }
  
      if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(upperCase)
      }
        
      if (confirmNumbers) {
        passwordCharacters = passwordCharacters.concat(numbers)
      }

    if (confirmSpecials) {
      passwordCharacters = passwordCharacters.concat(specials)
    }

      

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < passwordLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}