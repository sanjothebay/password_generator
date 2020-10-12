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

var specialCharacters = ["!#$%&'()*+,-./:;?@][^_`{|}~'<=>"];
var numbers = ["1234567890"];
var passwordLength  = 0;
var isLowerCases = 0;
var isUpperCases = 0;


function generatePassword(params) {
  
var passwordLength = parseInt(prompt("Please enter the number of characters. It must be more than 8 and less than 128.") );
console.log(passwordLength)
if (isNaN(passwordLength === true) ) {
  alert("Please Choose a number!!!!");
  return;
}
if (passwordLength < 8 ||passwordLength > 128) {
  alert("Please Choose another numebr !!!! (8-128) ")
  return;
}

var isLowerCases = confirm("Do you want lowercases letters in your password?");
var isUpperCases = confirm("Do you want uppercases letters in your password?");
if (isUpperCases === false && isLowerCases === false ) {
  alert ("Plase Choose a character type!!!!"); 
  return;
}

var numbers = confirm("Do you want numbers in your password?");
console.log(numbers);
if (numbers) {
  
}

var specialCharacters = confirm("Do you want special characters in your password?");
console.log(specialCharacters);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);