// Declaring Variables
var generateBtn = document.querySelector("#generate");
var passLength;
var passLower;
var passUpper;
var passNumeric;
var passSpecial;
var availCharacterSet = "";


//Password Criteria and Prompts
function criteriaPrompts() {
  
  //Get user input for password criteria
  passLength = prompt("Please select the length of the password between 8 and 128 characters: ");
  
  //Alerts user if password length is not valid and ends the function
  if (passLength < 8 || passLength > 128) {
    alert("Invalid Password Length");
    return;
  }

  passLower = confirm("Would you like to include lowercase characters?");
  passUpper = confirm("Would you like to include uppercase characters?");
  passNumeric = confirm("Would you like to include numeric characters?");
  passSpecial = confirm("Would you like to include special characters?");

  //Create Available Character Set based on the Password criteria
  if (passLower) {
    availCharacterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passUpper) {
    availCharacterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passNumeric) {
    availCharacterSet += "0123456789";
  } 
  if (passSpecial) {
    availCharacterSet += "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  } 

  
  //Calls the writePassword function once this is complete
  writePassword();
}

// Generate the Password
function generatePassword() {
  var password = "";

  for (var i = 0; i < passLength; i++) {
    password += availCharacterSet.charAt(Math.floor(Math.random() * availCharacterSet.length));
  }

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", criteriaPrompts);


