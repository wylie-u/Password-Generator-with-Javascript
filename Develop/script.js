// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var num = '0123456789';
var sym = '!@#$%^&*=-_';


// use allChars in main function





// Write password to the #password input
// for loop in this function 
function writePassword() {
  var allChars = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

// global array
var allChars = [];
var i= 0; i < pwLength; i++
// math random math floor function
// var randomNumber = math.floor(mathrandom)
//results.push 
// results.join
// THEN I am presented with a series of prompts for password criteria
// i need to create prompts to show password criteria 


// password must be a minimum of eight (8) characters in length and a maximum of 128 characters in length.

var pwLength = parseIntprompt("Please enter the length of your password in a numerical value. Passwords must be at least eight characters and no bigger than 128 characters.")

//if pwLength is less than 8 or more than 128 characters
//then re-run the function
if (pwLength < 8 || pwLength > 128 || !pwLength || isNaN(pwLength) ){
  alert("The length needs to be a number between 8-128. Please re-enter a new number");
  generatePassword();
}
else {
  //allChars += char;
  //allChars += num;
  //if user wants to include char in their pw
  //push the char array to allChars array;

//Contain at least one (1) character from three (3) of the following categories:
// Uppercase letter (A-Z)
// Lowercase letter (a-z)
// Digit (0-9)
// Special character (~`!@#$%^&*()+=_-{}[]\|:;”’?/<>,.)

}

// for loop
  // concat 

// if (lower)

// if (upper)

// if (numbers)

// if (special)
// if password doesnt contain this, window prompt showing error 

  // a password is going to get returned after we have answered all prompts
  //return "Hello";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page