
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
for (var i = 0; i < 10; i++)
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
UsersAnswers = UsersAnswers.toLowerCase();
UsersAnswers = UsersAnswers.toLowerCase();
*/


// Assignment Code
var generateBtn = document.querySelector("#generate");

var UsersAnswers = 0;
var charactersChoice = 0;
var lowercaseLettersChoice = 0;
var uppercaseLettersChoice = 0;
var numberChoice = 0;
var specialCharactersChoice = 0;

var questionsAsked = [
  { question: "How many characters would you like your password to be? (8-128)", answers: "" },
  { question: "Would you like to include lowercase letters? ", answers: "t" || "f" },
  { question: "Would you like to include uppercase letters?", answers: "t" || "f" },
  { question: "Would you like to include numbers?", answers: "t" || "f" },
  { question: "Would you like to include special characters?", answers: "t" || "f" }
];

function generatePassword() {
  
for (var i = 0; i < questionsAsked.length; i++) {
  var answers = confirm(questionsAsked[i].question);
}
}


// var charactersChoice = numberChoice[Math.floor(Math.random() * numberChoice.length)];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// if (charactersChoice < 8 ) {
//   alert("Please pick a number higher than 8")
  
// } 
// else confirm(lowercaseLettersChoice) {
  
// }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);