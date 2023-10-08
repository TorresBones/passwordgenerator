var characterLength = 8;
var specialCharAr = ["!","@","$","#","%","^","&","*","(",")"];
var numberAr = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCaseAr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseAr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var choiceAr = []

// Assigment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
  var newpassword = generatePassword();
  passwordText.value = newpassword;
} else {
  passwordText.value = "";
}
}

function generatePassword(){
var password = "";

for(var i = 0; i < characterLength; i++){
  var randomIndex = Math.floor(Math.random() * choiceAr.length);
  password = password + choiceAr[randomIndex];
}
return password;
}
function getPrompts(){
choiceAr = [];

  characterLength = parseInt(prompt("How many characters would you like your password to contain?"));

  if(isNaN(characterLength) || characterLength < 8 ||characterLength > 128) {
  alert("Character length has to be a number, 8-128 digits.Please try again.");
  return false;
}
if(confirm("Click OK to confirm including lowercase characters.")){
choiceAr = choiceAr.concat(lowerCaseAr);
}

if(confirm("Click OK to confirm including uppercase characters.")){
choiceAr = choiceAr.concat(upperCaseAr);
}

if(confirm("Click OK to confirm including special characters.")){
choiceAr = choiceAr.concat(specialCharAr);
}

if(confirm("Click OK to confirm including numeric characters.")){
choiceAr = choiceAr.concat(numberAr);
}
return true;
}

