var generateBtn = document.querySelector("#generate");
const lChars = "abcdefghijklmnopqrstuvwxyz";
const uChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nChars = "0123456789";
const sChars = "!#$%&\"'\\]()*+,-./:;<=>?@[^_`{|}~"; 
// Escape character used to include \ and " symbols in the list of special characters to be used for generating password.

// Write generatePassword function 
function generatePassword () {  
  var newPassword = "";
  var allChars = "";
  // 1: Promt user for the pass criteria.
  const passwordLength = window.prompt("How long would you like your password to be?");
  const lowerCase = window.confirm("Would you like your password to include lowercase letters?");
  const upperCase = window.confirm("Would you like your password to include upper letters?");
  const numChar = window.confirm("Would you like your password to include numbers?");
  const specialChar = window.confirm("Would you like your password to include special characters?");

  // 2: Validate the input.
  var valid = true;
  function validateInput () {
    if (lowerCase == false && upperCase == false && numChar == false && specialChar == false) {
      valid = false; 
      window.alert("Error! Select at least one character type for your password. Please try again.");
    }
    if (passwordLength == " " || passwordLength < 8 || passwordLength > 128) {
      valid = false; 
      window.alert("Error! Select a password length between 8 and 128 characters. Please try again.");
    }
    if ((isNaN(passwordLength))) {
      valid = false; 
      window.alert("Error! Password length should be a number. Please try again.");
    }
    return valid;
  }
  validateInput();

// Stop function if valid is false.
 if (valid == false) {
    return "";
  }

  // Select which password strings to use depending on users choice. Used (?) operatior to shorten if ... else statements.
  (lowerCase) ? allChars += lChars : "";
  (upperCase) ? allChars += uChars : "";
  (numChar) ? allChars += nChars : "";
  (specialChar) ? allChars += sChars : "";

  // 3: Generate a random password based on selected criteria.
    // 3.1. Generate a random number between 0 - 0.99 and multiply it by the length of the string that the random characters will be chosen from. Since the index starts with 0 this ensures that no index outside of the range can be chosen.
    // 3.2. Use Math.floor to get rid of decimals. 
    // 3.3. Use the index to select a random letter from the string and concatenate it to generate a new string which will be the new password. 
    // 3.4. Repeat the process using a for loop until the desired length is reached. 
  for (var i = 0; i < passwordLength; i++) {
        var randomChar = Math.floor(Math.random()*allChars.length); 
        newPassword += allChars[randomChar];
    }
  var generatedPassword = newPassword;
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);