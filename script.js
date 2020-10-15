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

var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z",]
var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var specialCharacterArray = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","?","@","]","[","^","_","`","{","|","}","~","'","<","=",">"];
var numberArray = ["0","1","2","3","4","5","6","7","8","9",];


//3 Functions



//First Function = Ask What we Want (length, etc)... need to validate our answers

function askOptions() {
  var length = parseInt(prompt("Please enter the number of characters, It must be between 8-128.?"))

  if(isNaN(length) === true) {
    alert(" please choose another number!");
    
  }
  if(length < 8 || length > 128) {
    alert(" please choose another number!");

  }
  var isLower = confirm("Would you like lower case letters");
  
  var isUpper = confirm("Would you like upper case letters");
  
  var isNumbers = confirm("Would you like numbers?");
  
  var isSpecialCharacters = confirm("Would you like special characters?");
  
  
    if (isUpper === false && isLower === false && isNumbers === false && isSpecialCharacters === false ) {
      alert("Please choose a Character type and restart again!");
      askOptions()
      
    }

  // if (isNumbers === false && isSpecialCharacters === false) {
  //   alert(" please choose a Character type and restart!");
  //   return;
  // }

  var passOptions = {
    length: length,
    isUpper: isUpper,
    isLower: isLower,
    isNumbers: isNumbers,
    isSpecialCharacters: isSpecialCharacters,
  }
  return passOptions;

}

//2 Function =  receive answers from function 1 and , 
// build an array for every char type where we said yes Math.random


function generatePassword() {
  var options = askOptions();
  

  var superArray = [];
  var results = [];

  if(options.isLower === true) {
    superArray = superArray.concat(lowerArray)
  }
  if (options.isUpper === true) {
    superArray = superArray.concat(upperArray)
  }

  if(options.isNumbers === true) {
    superArray = superArray.concat(numberArray)
  }

  if (options.isSpecialCharacters === true) {
    superArray = superArray.concat(specialCharacterArray)
  }

  for(var i = 0; i < options.length; i++) {
    var index = Math.floor(Math.random() * superArray.length);
    var digit = superArray[index]
    results.push(digit);
    console.log(results);
    
  }

  return results.join("")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
