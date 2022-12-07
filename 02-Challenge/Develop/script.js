

// When user clicks buttom, a series of prompts for password criteria appear 
// Prompts include selectable criteria which user has an option to include when generating pwd
// Length of password must be selected 
// Lengths mush be at least 8 characters and no more than 128 characters
// Character types must present options for: lowercase, uppercase, numeric and/or special characters
// When each prompt is answered, the answer should be validated and at least one character type shuld be selected 
// When all prompts are answered, the password is generated based on selected criteria 
// When password is generated it either appears on alert or written on the page

/*
1. Declare variables for input that will be selected by the user: lowerCase, upperCase, numericChar, specialChar
2. Declare variables for selected length by the user: passwordLength
3. Create user promt that prompts the user to select;
  3.1. Length of user password 
  3.2. Character types: 4 options
4. Write function that validates 
  4.1. That password length between 8 and 128 characters is selected by user
    4.1.1. If the user enters anything other than number it should show an error and repeat again 
  4.2. That at least one character type was selected, if not - it prompts the user again to select at lest one type, if yes - proceeds to generate password based on the criteria 
5. Write code to generate a random password based on criteria selected 
6. Have password displayed on page 
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  var generatedPassword = "this is your new password";
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
