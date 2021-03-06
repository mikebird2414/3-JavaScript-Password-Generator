// Function to generate Required Values
var symbol = "~[]{}:;<>!@#$%^&*()_+?"
var number = "1234567890"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Required Charators 

function generatePassword(){
  var finalPassword = "";
  var approveCharaters = "";

// Password lenght Criteria 
  var passLength = prompt("Your character length shuold be between 8 and 128 ? ");
    if(passLength < 8){
      return alert("Password must be 8 characters or more.");
    }else if (passLength > 128){
      return alert("password must be 128 characters or less");
    }


  //Prompt box to allow user to enter length of password 
  var passLength = prompt("How many characters would you like your password to be?");

  //Confirms to user uppercase charaters will be used
  var passUpper = confirm("Please click to confirm uppercase");

  if (passUpper === true){
    approveCharaters += upperCase;
  }
  //Confirms to user lowercase charaters will be used
  var passLower = confirm("Please click to confirm lowercase");

  if (passLower === true){
    approveCharaters += lowerCase;
  }
  //Confirms to user symbol charaters will be used
  var passSymbol = confirm("Please click to confirm symbol");

  if (passSymbol === true){
    approveCharaters += symbol;
  }
  //Confirms to user numbers  will be used
  var passNumber = confirm("Please click to confirm number");

  if (passNumber === true){
    approveCharaters += number;
  }

  //For loop allowed approvedCharaters symbols, numbers, & upper/lowercase letters to generate
  for(let i=0; i < passLength; i++){
    var randomInit = Math.floor(Math.random() * approveCharaters.length);
    
    var randomInput = approveCharaters[randomInit];
    finalPassword += randomInput
  }
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
