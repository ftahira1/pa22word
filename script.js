// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z",];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var passwordLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecialChars;

function generatePassword () {
  // 1 Prompt the user the acceptance criteria:
  //  a. Password length 8 to 128.
  var passwordLength = prompt("How many characters would you like your password to contain? (Choose between 8 and 128)");
  if (!(passwordLength >= 8 && passwordLength <= 128)){
    alert("Password must cointain form 8-128 letters!");
  }
  else {
  //  b. lowercase, 
  var confirmLowerCase = confirm("Would you like to include lowercase letters?");
  
  //  c. uppercase, 
  var confirmUpperCase = confirm("Would you like to include uppercase letters?");

  //  e. numbers,
  var confirmNumbers = confirm("Would you like to include numbers?"); 

  //  f. special characters
  var confirmSpecialChars = confirm("Would you like to include sepcial characters?");
  
  var lettersPassword = [];
  // 2 Validate the input.
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialChars){
    alert("At least one character type should be selected!");
  }
  else {
  if (confirmLowerCase) {
    lettersPassword = lettersPassword.concat(lowerCase);
  }
  if (confirmUpperCase) {
    lettersPassword = lettersPassword.concat(upperCase);
  }
  if (confirmNumbers) {
    lettersPassword = lettersPassword.concat(numbers);
  }
  if (confirmSpecialChars) {
    lettersPassword = lettersPassword.concat(specialChars);
  }
  }

  // 3 Generate password based in the acceptance criteria.
  var showPassword = [];
  for (var i = 0; i < passwordLength; i++) {
    var showPassword = showPassword + lettersPassword[Math.floor(Math.random() * lettersPassword.length)];
  }
}
// Display password to the page
  return showPassword;
};



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
