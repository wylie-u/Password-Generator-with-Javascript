// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var num = '0123456789';
var sym = '!@#$%^&*=-_';


// Write password to the #password input
// for loop in this function 
function writePassword() {
    var allChars = [];
    var password = writePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
// password must be a minimum of eight (8) characters in length and a maximum of 128 characters in length.
//parseInt
var pwLength = prompt("Please enter the length of your password in a numerical value. Passwords must be at least eight characters and no bigger than 128 characters.")

//if pwLength is less than 8 or more than 128 characters
//then re-run the function
if (pwLength < 8 || pwLength > 128 || !pwLength || isNaN(pwLength) ){
  alert("The length needs to be a number between 8-128. Please re-enter a new number");
  generatePassword();
}
else if (
     upperCase= alert("Would you like to add an upper case letter? click OK for yes, cancel for no.")
    
);
}
  

