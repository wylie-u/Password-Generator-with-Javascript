// Password variables
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var num = '0123456789'.split("");
var sym = '!@#$%^&*=-_'.split("");

function writePassword() {
    //combined array 
    var allChars = [];

// Password creation prompt   
var pwLength = prompt("Please enter the length of your password in a numerical value. Passwords must be at least eight characters and no bigger than 128 characters.")

//if pwLength is less than 8 or more than 128 characters
//then re-run the function
if (pwLength < 8 || pwLength > 128 || !pwLength || isNaN(pwLength) ){
  alert("The length needs to be a number between 8-128. Please re-enter a new number");
  writePassword();
}
// lowercase letters prompt
var lower = confirm('Password to include lowercase letters? Okay for yes, Cancel for no.');
if (lowerCase) {
    allChars = allChars.concat(lowerCase);
    console.log(allChars);
} else {
    console.log('dont include lowercase letters');
}

// uppercase letters prompt
var upper = confirm('Password to include uppercase letters? Okay for yes, Cancel for no.');
if (upperCase) {
    allChars = allChars.concat(upperCase);
    console.log(allChars);
} else {
    console.log('dont include uppercase letters.');
}
// numbers prompt
var number = confirm('Password to include a Number? Okay for yes, Cancel for no.')
if (num) {
    allChars = allChars.concat(num);
    console.log(allChars);
} else {

}
// Symbols prompt
var symbol = confirm('Password includes a Symbol? Okay for yes, Cancel for no.')
if (sym) {
    allChars= allChars.concat(sym);
    console.log(allChars);
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

