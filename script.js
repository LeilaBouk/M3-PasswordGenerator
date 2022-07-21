// Assignment code here

var lowerCase = "abcdefghijklmnopqrstupwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUPWXYZ";
var numbers = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{}|~";

console.log("Our lowercase options are " + lowerCase);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
