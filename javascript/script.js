// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  var passwordLength = Number(
    window.prompt(
      "Enter your desired password length: ",
      "Enter a number between 8 and 128"
    )
  );
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number between 8 and 128.");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password must be between 8 and 128 characters.");
    return;
  }
  var lowerCase = window.confirm(
    "Do you wish to include lowercase characters? Click OK for YES or CANCEL for NO."
  );
  var upperCase = window.confirm(
    "Do you wish to include uppercase characters? Click OK for YES or CANCEL for NO."
  );
  var numeric = window.confirm(
    "Do you wish to include numeric characters? Click OK for YES or CANCEL for NO."
  );
  var special = window.confirm(
    "Do you wish to include special characters? Click OK for YES or CANCEL for NO."
  );
  if (lowerCase == false && upperCase == false && numeric == false && special == false) {
    window.alert("Please choose at least one character type.")
    return;
  }
  var charSet = "";
  if (lowerCase == true) {
    charSet = charSet + "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCase == true) {
    charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numeric == true) {
    charSet = charSet + "0123456789";
  }
  if (special == true) {
    charSet = charSet + "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  }
  console.log(passwordLength);
  console.log(charSet);
  var password = ""
  for (i = 1; i <= passwordLength; i++) {
    password = password + charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log(password);

  document.getElementById("password").innerHTML = password;

}

// on click prompts:
// 1. password length min 8 char
// 2. include options: lowercase, uppercase, numeric, and/or special characters

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters x
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```
