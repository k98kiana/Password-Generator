// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword funtion will lead us to asking the questions of what values are included
function generatePassword() {
 var lowercase = "abcdefghijklmnopqrstuvwxyz";
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numbers = "0123456789";
 var special = "!@#$%&";


//Asking how long the password will be
var passlength = prompt("How many characters do you want your password to have? Please choose a length of 8 to 128 characters.");
  //We should be confirming that the length is a valid number
  if(passlength <8 || passlength >128) {
    alert("Answer not valid. Please choose a value from 8 to 128 characters.");
    return "";
  }

//Asking if user wants lowercase letters  
var asklower = confirm("Do you want Lowercase letters?");

 //Asking if user wants uppercase letters
var askupper = confirm("Do you want Uppercase letters?");

//Asking if user wants special characters
var askspecial = confirm("Do you want special characters?");

//Asking if user wants numbers
var asknum = confirm("Do you want numbers?");

// This is to inform the user that no password can be generated because they essentially cancelled out of all possible options
if (!asklower && !askupper && !askspecial && !asknum) {
  alert("Error! No password has been created due to no options being chosen. Please generate a password again to confirm any options.");
  return "";
}

//This is placing the password with the desired options into a new variable
var finalpass = "";

if (asklower) {
  finalpass += lowercase;
}
if(askupper) {
  finalpass += uppercase;
}
if(askspecial) {
  finalpass += special;
}
if(asknum) {
  finalpass += numbers;
}

//This will apply the desired characters into the length of characters that was chosen in the first prompt
var password = "";
  for (var i=0; i < passlength; i++) {
    password = 
    password + finalpass[Math.floor(Math.random() * finalpass.length)];
  }

  return password;
}