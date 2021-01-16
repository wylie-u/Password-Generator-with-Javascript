// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var num = '0123456789'.split("");
var sym = '!@#$%^&*=-_'.split("");

function writePassword() {
    //combined array (not sure if this is correct)
    var allChars = [];

// First password creation prompt    
var pwLength = prompt("Please enter the length of your password in a numerical value. Passwords must be at least eight characters and no bigger than 128 characters.")

//if pwLength is less than 8 or more than 128 characters
//then re-run the function
if (pwLength < 8 || pwLength > 128 || !pwLength || isNaN(pwLength) ){
  alert("The length needs to be a number between 8-128. Please re-enter a new number");
  writePassword();
}
// lowercase letters
var lower = window.confirm('Password includes lowercase letters?');
if (lowerCase) {
    allChars = allChars.concat(lowerCase);
    console.log('include lowercase letters');
} else {
    console.log('dont include lowercase letters.');
}

// uppercase letters
var upper = window.confirm('Password includes uppercase letters?');
if (upperCase) {
    allChars = allChars.concat(upperCase);
    console.log(allchars);
    console.log('include uppercase letters');
} else {
    console.log('dont include uppercase letters.');
}
// numbers 
var number = window.confirm('Password to include a number?')
if (num) {
    allChars = allChars.concat(num);
    console.log(allchars);
} else {

}
// Symbols
var symbol = window.confirm('Password includes a symbol?')
if (sym) {
    allChars= allChars.concat(sym);
} else {

}



// Generate Password Function with For Loop 
    var generatePassword = function() {
    // global array with no value 
    var finalpw = [];
    //create for loop for values to pass through
    for (var i = 0; i < pwLength; i++) {
      var pw = (Math.floor(Math.random()*allChars.length));
      finalpw.push(allChars[pw]);
      
    }
    return finalpw.join("");
} 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    

}



  generateBtn.addEventListener("click", writePassword);


  // try and put a math.random in if statement 

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