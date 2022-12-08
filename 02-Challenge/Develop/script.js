// TO DO: remove console.log
// Assignment Code
var generateBtn = document.querySelector("#generate");
const lChars = "abcdefghijklmnopqrstuvwxyz";
const uChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nChars = "0123456789";
const sChars = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
var allChars = "";
var newPassword = "";

// Write generatePassword function 
function generatePassword () {  
  // 1: Promt user for the pass criteria
  const passwordLength = window.prompt("How long would you like your password to be?");
  // Try with stopping it here 
  // console.log(passwordLength);
  // if ((isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)) {
  //   return "";
  // }
  const lowerCase = window.confirm("Would you like your password to include lowercase letters?");
  console.log(lowerCase);
  const upperCase = window.confirm("Would you like your password to include upper letters?");
  console.log(upperCase);
  const numChar = window.confirm("Would you like your password to include numbers?");
  console.log(numChar);
  const specialChar = window.confirm("Would you like your password to include special characters?");
  console.log(specialChar);
  
  // 2: Validate the input
  // does this need ot be a function? 
  var valid = true;
  function validateInput () {
    if (lowerCase == false && 
        upperCase == false && 
        numChar == false && 
        specialChar == false) {
      valid = false; 
      window.alert("Error! Please select at least one character type for your password. Please try again.");
    }
    if (passwordLength == " " ||
       passwordLength < 8 || 
       passwordLength > 128) {
      valid = false; 
      window.alert("Error! Please select a password length between 8 and 128 characters. Please try again.");
    }
    if ((isNaN(passwordLength))) {
      valid = false; 
      window.alert("Error! Password length should be a number. Please try again.");
    }
    return valid;
  }
  validateInput();

// function needs to stop if valid is false 
 if (valid == false) {
    return "";
  }

  // Select which password strings to use depending on users choice 
  (lowerCase) ? allChars += lChars : "";
  (upperCase) ? allChars += uChars : "";
  (numChar) ? allChars += nChars : "";
  (specialChar) ? allChars += sChars : "";

  // 3: Generate a random password based on selected criteria
  for (var i = 0; i < passwordLength; i++) {
        var randomChar = Math.floor(Math.random()*allChars.length); // need to test this agains
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