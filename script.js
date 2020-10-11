
/*
when clicked on generate a password Enduser is asked:
1: length of the password 
(length of at least 8 characters and no more than 128 characters)

2: character types to include in the password
(lowercase, uppercase, numeric, and/or special characters)

3:After given answers the input should be validated 
and give at least one character type

4:After Validtaion then a password is given with 
the correct selections included

5:Displayed for the end user to see 
*/


// Assignment Code
var generateBtn = document.querySelector("#generate");



prompt("How many characters would you like your password to be? (8-128)")
confirm("Would you like to include lowercase letters? ")
confirm("Would you like to include uppercase letters?")
confirm("Would you like to include numbers?")
confirm("Would you like to include special characters?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
