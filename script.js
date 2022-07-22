// Assignment code here

//These variables represent the options for characters in a string

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

console.log("Our lowercase options are " + lowerCase);

function generatePassword() {

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

//  LOWERCASE
 var lowCase = confirm('Include lowercase letters?');

//  UPPERCASE
 var upCase = confirm('Include uppercase letters?');

//  NUMBERS
 var nums = confirm('Include numbers?');

//  SPECIAL CHARACTERS
 var specials = confirm('Include special characters?');

 console.log(specials);
 console.log(nums);

 //Take the selected values and combine them based on user selects
var chosenPass = [];

if (lowCase) {
  chosenPass = chosenPass.concat(lowerCase);
} 
if (upCase) {
  chosenPass = chosenPass.concat(upperCase);
}
if (nums) {
  chosenPass = chosenPass.concat(numbers);
}
if (specials) {
  chosenPass = chosenPass.concat(special);
}

console.log(chosenPass);

//Randomize the chosenPass based on passLength

var randomized = [];

for (var i = 0; i < passLength; i++) {
  
  randomized.push (chosenPass[Math.floor(Math.random() * chosenPass.length)]);
  
}

console.log(randomized);

password = randomized;

console.log(password);

//Display result on screen
return randomized.join("");
  
}

// VVVV Starter Code VVVVV

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
