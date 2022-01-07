// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Generating the password

function generatePassword() {
  // Prompt length
  var passwordLength = Number(
    window.prompt(
      "Your desired password length - Enter a number between 8 and 128: "
    )
  );
  // Validate input
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please enter a number between 8 and 128.");
    return;
  }
  // Confirm desired character types
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
  // Character type validation - at least one type must be selected
  if (
    lowerCase == false &&
    upperCase == false &&
    numeric == false &&
    special == false
  ) {
    window.alert("Please choose at least one character type.");
    return;
  }
  //  Defining which character types will be available based on users choice
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
  // Choosing a random selection of characters according to user parameters of length and character type

  var password = "";
  for (i = 1; i <= passwordLength; i++) {
    password =
      password + charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  console.log(passwordLength);
  console.log(charSet);
  console.log(password);

  // Insert generated password into the webpage

  document.getElementById("password").innerHTML = password;
}
