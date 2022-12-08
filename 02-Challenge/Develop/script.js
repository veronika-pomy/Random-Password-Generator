

// When user clicks buttom, a series of prompts for password criteria appear 
// Prompts include selectable criteria which user has an option to include when generating pwd
// Length of password must be selected 
// Lengths mush be at least 8 characters and no more than 128 characters
// Character types must present options for: lowercase, uppercase, numeric and/or special characters
// When each prompt is answered, the answer should be validated and at least one character type shuld be selected 
// When all prompts are answered, the password is generated based on selected criteria 
// When password is generated it either appears on alert or written on the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
// const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerChar = "abcdefghijklmnopqrstuvwxyz";
// const numChar = "0123456789";
// const specialChar = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"; 

// Write generatePassword function 
function generatePassword () {
  console.log("button clicked");
  
  // 1: Promt user for the pass criteria
  var passwordLength = window.prompt("How long would you like your password to be?");
  console.log(passwordLength);
  var lowerCase = window.confirm("Would you like your password to include lowercase letters?");
  console.log(lowerCase);
  var upperCase = window.confirm("Would you like your password to include upper letters?");
  console.log(upperCase);
  var numChar = window.confirm("Would you like your password to include numbers?");
  console.log(numChar);
  var specialChar = window.confirm("Would you like your password to include special characters?");
  console.log(specialChar);
  
  // 2: Validate the input
  //        a. pass length 8 < 128 
  //        b. at least one character type: lowercase, uppercase, numeric, special characters
  //        c. if one of these is a no, prompt user to start again 
  var valid = true;
  function validateInput () {
    if (lowerCase == false && upperCase == false && numChar == false && specialChar == false) {
      valid = false; 
      window.alert("Error! Please select at least one character type for your password.");
    }
    if (passwordLength == " " || passwordLength < 8 || passwordLength > 128) {
      valid = false; 
      window.alert("Error! Please select a password length between 8 and 128 characters.");
    }
    if ((isNaN(passwordLength))) {
      valid = false; 
      window.alert("Error! Password length should be a number.");
    }
    return valid;
  }
  validateInput();
  console.log(valid);

  // 3: Generate a random password based on selected criteria
  // Working only with Upper char for now

  // Need to figure out a way to select which string to use 
  // set one long var for pwd string
  // depensing on which statements come back as true set a range og which chars js can select

for (let i = 0; i < passwordLength; i++) {
      var randomChar = Math.floor(Math.random()*upperChar.length);
      newPassword += upperChar[randomChar];
  }
  console.log(newPassword);

  var generatedPassword = newPassword;
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
