// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
//var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var numberChar = "0123456789";
//var specialChar = "!@#$%^&*()_+=-[]\{}|,./<>?`~;:";


// const key_strings = {
  //lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz',
  //upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  //numberChar = "0123456789",
  //specialChar = "!@#$%^&*()_+=-[]'{''}'|,./<>?`~;:",
//};

var passwordLength;
var lowerCaseChar;
var upperCaseChar;
var numberChar;
var specialChar;
var choices;

character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", ":", ";", ",","<", ">", ".", "?", "/", "`", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var generateBtn = document.querySelector("#password");

generateBtn.addEventListener("click", generatePassword); {
  ps = generatePassword();
  document.getElementById("password").placeholer = ps;
}

// Write password to the #password input
function generatePassword() {
  // var passwordCharSet = "";
  // var password = "";
  // var passwordChar = "";

  // user prompts to determine password length
  passwordLength = parseInt(prompt("Please enter a password length between 8 and 128 characters."));
    if (!passwordLength) {
      alert("You must provide a value!")
    } else if (passwordLength < 8)  {
      alert("Password must be at least 8 characters in length")
    } else if (passwordLength > 128) {
      alert("Password cannot exceed 128 characters in length")
    }

  // user prompts to determine password character types
    else {
      lowerCaseChar = confirm("Would you like to include lowercase letters in your password?");
      upperCaseChar = confirm("Would you like to include uppercase letters in your password?");
      numberChar = confirm("Would you like to include numbers in your password/?");
      specialChar = confirm("Would you like to include special characters in your password?");
    };
    
    if (!lowerCaseChar && !upperCaseChar && !numberChar && !specialChar) {
      alert("You must choose at least one character type!");
    }
  
  else if (specialChar && lowerCaseChar && upperCaseChar && numberChar) {
    choices = character.concat(number, alpha, alpha2);
  }
  
  else if (specialChar && lowerCaseChar && upperCaseChar) {
    choices = character.concat(alpha, alpha2);
  }

  else if (specialChar && lowerCaseChar && numberChar) {
    choices = character.concat(alpha, number);
  }

  else if (specialChar && upperCaseChar && numberChar) {
    choices = character.concat(alpha2, number);
  }

  else if (lowerCaseChar && upperCaseChar && numberChar) {
    choices = number.concat(alpha, alpha2);
  }

  else if (specialChar && numberChar) {
    choices = character.concat(number);
  }

  else if (specialChar && lowerCaseChar) {
    choices = character.concat(alpha);
  }

  else if (specialChar && upperCaseChar) {
    choices = character.concat(alpha2);
  }

  else if (upperCaseChar && lowerCaseChar) {
    choices = alpha2.concat(alpha);
  }

  else if (upperCaseChar && numberChar) {
    choices = alpha2.concat(number);
  }

  else if (lowerCaseChar && numberChar) {
    choices = alpha.concat(number);
  }

  else if (specialChar) {
    choices = character;
  }

  else if (numberChar) {
    choices = number;
  }

  else if (upperCaseChar) {
    choices = alpha2;
  }

  else if (lowerCaseChar) {
    choices = alpha;
  }
  
  
  var password = [];
  
  for (var i = 0; i < passwordLength; i++) {
    var pickedChoices = choices[Math.floor(Math.random() * choices.passwordLength)];
    password.push(pickedChoices);
  }
  console.log(pickedChoices);

  var ps = password.join("");
  UserInput(ps);
  return ps;
};



function UserInput(ps) {
document.getElementById("password").textContent = ps;
}


//function writePassword() {
  //var password = generatePassword();
  
  //passwordText.value = password;
//}

//writePassword(password);

// Add event listener to generate button
