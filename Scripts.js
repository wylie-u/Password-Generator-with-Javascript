// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var num = '0123456789';
var sym = '!@#$%^&*=-_';

function writePassword() {
    var allChars = [];
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

// First password creation prompt    
var pwLength = prompt("Please enter the length of your password in a numerical value. Passwords must be at least eight characters and no bigger than 128 characters.")

//if pwLength is less than 8 or more than 128 characters
//then re-run the function
if (pwLength < 8 || pwLength > 128 || !pwLength || isNaN(pwLength) ){
  alert("The length needs to be a number between 8-128. Please re-enter a new number");
  writePassword();
}
// prompt for lowercase letters
var lower = window.confirm('Password includes lowercase letters?');
if (lowerCase) {
    allChars = allChars.concat(lowerCase);
    //console.log('include lowercase letters');
} else {
    //console.log('dont include lowercase letters.');
}

// prompt for uppercase letters
var upper = window.confirm('Password includes uppercase letters?');
if (upperCase) {
    allChars = allChars.concat(upperCase);
    //console.log('include uppercase letters');
} else {
    //console.log('dont include uppercase letters.');
}
// prompt for numbers 
var number = window.confirm('Password to include a number?')
if (num) {
    allChars = allChars.concat(num);
} else {

}
var sym = window.confirm('Password includes a symbol?')
if (sym) {
    allChars.concat(sym);
}

}

  generateBtn.addEventListener("click", writePassword);