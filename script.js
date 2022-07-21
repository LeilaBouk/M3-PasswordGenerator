// Assignment code here

//These variables represent the options for characters in a string

var lowerCase = "abcdefghijklmnopqrstupwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUPWXYZ";
var numbers = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{}|~";

console.log("Our lowercase options are " + lowerCase);

function promptUser() {

  var passLength = window.prompt('How many characters would you like in your password? Please choose a number between 8 and 128 🤔');

  //Stop user from entering pasword above 128
  if (passLength > 128) {
    window.alert ('Please choose a smaller number. 128 is the maximum length. 😵‍💫');
    return;
  }

  //stop user from entering password below 8
  if (passLength < 8) {
    window.alert ('Please choose a bigger number. 8 is the minimum length. 😵‍💫');
    return;
  }

  //Stop user from entering a value that isn't a number
  if (isNaN(passLength)) {
    window.alert ('Please enter a number 🤓');
    return;
  }

 else {
  passLength = passLength;
  window.alert ('Your selected length is ' + passLength);
 }

 console.log(passLength);

 //Password Length Determined
//////////////////////////////
 //User parameter questions

 var lowCase = window.confirm('Include lowercase letters?');
 if (lowCase) {
  lowCase = true;
 }
 else {
  lowCase = false;
 }

 var upCase = window.confirm('Include uppercase letters?');
 if (upCase) {
  upCase = true;
 }
 else {
  upCase = false;
 }

 var nums = window.confirm('Include numbers?');
 if (nums) {
  nums = true;
 }
 else {
  nums = false;
 }

 var specials = window.confirm('Include special characters?');
 if (specials) {
  specials = true;
 }
 else {
  specials = false;
 }

 console.log(specials);
 console.log(nums);

 //TO DO, take results to determine what strings to combine.
 //Set the combination to be the number the user chose using concat
 //Display result on screen
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  promptUser();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
