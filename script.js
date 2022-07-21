// Assignment code here

//These variables represent the options for characters

var lowerCase = "abcdefghijklmnopqrstupwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUPWXYZ";
var numbers = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{}|~";

console.log("Our lowercase options are " + lowerCase);

//


function promptUser() {

  var passLength = window.prompt('How many characters would you like in your password? Please choose a number between 8 and 128 🤔');

  //Stop user from entering pasword above 128
  if (passLength > 128) {
    window.alert ('Please choose a smaller number. 128 is the maximum length. 😵‍💫');
    promptUser();
  }

  //stop user from entering password below 8
  if (passLength < 8) {
    window.alert ('Please choose a bigger number. 8 is the minimum length. 😵‍💫');
    promptUser();
  }

  //Stop user from entering a value that isn't a number
  if (isNaN(passLength)) {
    window.alert ('Please enter a number 🤓');
    promptUser();
  }

  //
 else {
  window.alert ('Your selected length is ' + passLength);
 }
  
}

promptUser();

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
