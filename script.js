// VARIABLES
// Declare variable to hold element for event listener
var generateBtn = document.querySelector("#generate");
// Declare arrays holding possible password characters
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChars = ['!', '#', '&', '*', '+', '-', '@', '_'];
// Declare array containing available criteria for password characters
var criteria = ["numbers", "lcl", "ucl", "specChar"];
// Declare array containing questions asking users to select password character criteria
var userQuestions = ["Do you want to include numbers?", "Do you want to include lower case letters?", "Do you want to include UPPER CASE letters?", "Do you want to include special characters (!, #, &, *, +, -, @, _)?"];
// Declare array to contain the criteria selected by the user
var userCriteria = [];
// Additional variables for the length of the password
var initLength;
var length;

// FUNCTIONS
// Get the password length and criteria from the user
function getUserCriteria() {
  // get length of password from user
  initLength = prompt("Enter the number of characters in your new password from 8 to 128");
  length = checkLength(initLength);
  var userChoice;
  var j = 0;
  for(var i = 0; i < criteria.length; i++) {
    userChoice = confirm(userQuestions[i]);
    if(userChoice === true) {
      userCriteria[j] = criteria[i];
      j++;
    }
    // check if at least 1 criterion was chosen.  If not, restart loop.
    if(i === 3 && j == 0) {
      alert("You must choose at least 1 criterion.");
      i = -1;
    }
  }
}

// function to check if the password length is between 8 and 128, inclusive.
function checkLength(length) {
  while(length < 8 || length > 128) {
    length = prompt("Password must have 8 to 128 characters.  Please re-enter.");
  }
    return length;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // create dummy new password and pad it with 'x's to length = 'length'
  var newPassword = "x";
  newPassword = newPassword.padEnd(length, "x");
  // loop to iterate through length of newPassword
  for(var i = 0; i < length; i++){
    // generate random number to determine index for user criteria
    var random = Math.random();
    // determine a random index to pick which user criteria to assign
    var index = Math.round(random * (userCriteria.length - 1));
    // generate a second random number to determine which character to create
    random = Math.random();
    // replace the next 'x' with a new character based on the criterion determined by 'index'
    if(userCriteria[index] === "numbers") {
      newPassword = newPassword.replace("x", nums[Math.floor(random * 10)]);
    } else {
      if(userCriteria[index] === 'lcl') {
        newPassword = newPassword.replace('x', letters[Math.floor(random * 26)]);
      } else {
        if(userCriteria[index] === 'ucl') {
          newPassword = newPassword.replace('x', letters[Math.floor(random * 26)].toUpperCase());
        } else {
          if(userCriteria[index] === 'specChar') {
            newPassword = newPassword.replace('x', specialChars[Math.floor(random * 8)]);
          }
        }
      }
    }
  }
  return newPassword;
}
// CODE


// EVENT LISTENERS
// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  // change the color of the button when the new password is generated
  generateBtn.style.backgroundColor = "green";
  //  Change the text in the button when the new password is generated
  generateBtn.textContent = "Password Generated";
  getUserCriteria();
  writePassword();
});