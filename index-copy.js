// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code
// this var targets the button, on line 14 adds event listener to it 
var generateBtn = document.querySelector("#generate");

// Write generatePassword function 
function generatePassword () {
    console.log("button clicked");



    var generatedPassword = "this is your new password";
    return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //value from this function is stored in this var
  var passwordText = document.querySelector("#password"); // targets where the generated pass displayed on screen 

  passwordText.value = password;
}

// Add event listener to generate button
// When user clicks the button, this code call function writePasword
generateBtn.addEventListener("click", writePassword);