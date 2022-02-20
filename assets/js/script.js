// set password varriable
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*(){}[]<>?|/|";
var userSelection = "";
var finalPassword = "";




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // clear userSelection variable for each new password
    var userSelection = ""

    // set password length
    passwordLength = prompt("Please enter a password length between 8 and 128 characters.");
      if (!passwordLength) {
        alert("You must provide a value!")
        return generatePassword();
      } else if (passwordLength < 8)  {
        alert("Password must be at least 8 characters in length")
        return generatePassword();
      } else if (passwordLength > 128) {
        alert("Password cannot exceed 128 characters in length")
        return generatePassword();
      }

    // choose password character types
    lowerCharConfirm = confirm("Would you like to include lowercase letters in your password?");
      if (lowerCharConfirm) {
        userSelection += lowerChar
      };
      console.log(lowerCharConfirm);
      console.log(userSelection);

    upperCharConfirm = confirm("Would you like to include uppercase letters in your password?");
      if (upperCharConfirm) {
        userSelection += upperChar
      };
      console.log(upperCharConfirm);
      console.log(userSelection);

    numberCharConfirm = confirm("Would you like to include numbers in your password?");
      if (numberCharConfirm) {
        userSelection += numberChar
      };
      console.log(numberCharConfirm);
      console.log(userSelection);

      specialCharConfirm = confirm("Would you like to include special characters in your password?");
        if (specialCharConfirm) {
          userSelection += specialChar
        };
        console.log(specialCharConfirm);
        console.log(userSelection);

      // alert if user makes no character type selection
      if (lowerCharConfirm === false &&  upperCharConfirm === false &&  numberCharConfirm === false &&  specialCharConfirm === false) {
          alert("You must select at least one character type!")
          generatePassword()
      };
      
    // create random password based pn user selections
    finalPassword = ""
    for (var i = 0; i < passwordLength; i++) {
      finalPassword += userSelection.charAt(Math.floor(Math.random() * userSelection.length))
    }
      
    return finalPassword
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
