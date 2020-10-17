# tech_monterre_hw_password_generator

https://sanjothebay.github.io/tech_monterre_hw_password_generator/

https://github.com/sanjothebay/tech_monterre_hw_password_generator

This is my third homework assignment given to us by Technology de Monterrey Mexico 
Coding.To Create an application that an employee can use to generate a random password 
based on criteria they’ve selected by modifying starter code.

![image](https://user-images.githubusercontent.com/67298961/96298870-c77a1d00-0fb8-11eb-834e-912aa295f9db.png)

## Requirements

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

**** I pulled the work from the Tech Monterrey Gitlab and I then created my own repository for the project

I started off by creating the prompts and confirmations questions. To 
asked to the end-user. The question were practically given on the instructions.
once that was completed i moved to Creating the variables 
that contained the possible array of elements that can be generated and created.
From there i created my If`s statements in case the end user picks no to al the 
questions asked ,
if the lengths is shorter then 8 or longer then 128 characters.
This was the time i created my place holders to make sure the answers inputted by the 
end-user get stored. 

I created a for loop to go through the array and choose the possible randomly 
with a 

// for(var i = 0; i < options.length; i++) {
    var index = Math.floor(Math.random() * superArray.length);

from here was the part i whet to make sure i had my if statements  that if  a true  input 
given by the user gets stored to generate the password as what the end -user input.
Last making sure that the answers is retuned and joined together.

over all i was able to create a working password generator app.
with all the requirements. this took a lot of think and asking for help on aksabc.
with the help gotten and guidance I was able to over come the challenge. 


![image](https://user-images.githubusercontent.com/67298961/96301104-4fadf180-0fbc-11eb-8d70-0d50ca868523.png)

![image](https://user-images.githubusercontent.com/67298961/96301378-b9c69680-0fbc-11eb-9465-7e0c91a7ef1d.png)

![image](https://user-images.githubusercontent.com/67298961/96301538-f6928d80-0fbc-11eb-9395-8c3303109aac.png)

![image](https://user-images.githubusercontent.com/67298961/96301441-d236b100-0fbc-11eb-8de7-a1546a5ea3e0.png)

![image](https://user-images.githubusercontent.com/67298961/96301595-0ad68a80-0fbd-11eb-9e70-586a6143703e.png)

![image](https://user-images.githubusercontent.com/67298961/96301667-1f1a8780-0fbd-11eb-96c9-dcea25e6bb33.png)
