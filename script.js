//Array of characters used for password
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declares object variables containing the necessary criteria. The 4 arrays are defined as Boolean
var profile = {
  length: 0,
  upperCase: false,
  lowerCase: false,
  numeric: false,
  specChar: false,
  rawPassword: "",

  //Function to prompt user for password length
  passwordLength: function () {
    // prompts user for password length and assigns it to the object's length property
    this.length = parseInt(prompt("Please choose a password length between 8 and 128 characters."));
    
    //Validates password length to meet criteria requirements
    while (this.length < 8 || this.length > 128 || isNaN(this.length)) {
      this.length = parseInt(prompt("Your password must be between 8 and 128 Characters! Please choose a password length again."));
    }
    
    //Returns the pasword length
    return (this.length);
  },

  //Function to determine whether uppercase letters will be used in the generator
  passwordUpperCase: function () {
    
    //Prompts user for a selection
    this.upperCase = confirm("Would you like to include any upper case letters in your password?");
    
    //If true, generates a random upper case letters into the password generator
    if (this.upperCase === true) {
      for (var u = 0; u < this.length; u++) {
        var upperRandom = Math.floor(Math.random() * uppercaseArray.length);
        this.rawPassword += uppercaseArray[upperRandom];
      }
    }
    
    //returns random password
    return this.rawPassword;
  },
  
  //function to determine whether lowercase letters will be used in the generator
  passwordLowerCase: function () {
    
    // prompt user for selection
    this.lowerCase = confirm("Would you like to include any lower case letters in your password?");
    
    //If true adds lowercase letter rawPassword
    if (this.lowerCase === true) {
      for (var l = 0; l < this.length; l++) {
        var lowerRandom = Math.floor(Math.random() * lowercaseArray.length);
        this.rawPassword += lowercaseArray[lowerRandom];
      }
    }

    //returns a random password
    return this.rawPassword;
  },

  //Function to determine whether numbers will be used in the password generator
  passwordNumeric: function () {
    
    //prompts the user for selection
    this.numeric = confirm("Do you want to include any numbers in your password?");

    //If true adds numbers to the rawPassword
    if (this.numeric === true) {
      for (var n = 0; n < this.length; n++) {
        var numbersRandom = Math.floor(Math.random() * numbArray.length);
        this.rawPassword += numbArray[numbersRandom];
      }
    }

    //returns a random password
    return this.rawPassword;
  },

  //function to determine whether symbols will be included in the password generator
  passwordSpecChar: function () {   
    this.specChar = confirm("Would you like to include any special characters in your password?");
    
    //If true add special characters to the rawPassword
    if (this.specChar === true) {
      for (var s = 0; s < profile.length; s++) {
        var specCharRandom = Math.floor(Math.random() * characterArray.length);
        this.rawPassword += characterArray[specCharRandom];  
      }
    }
    //validates selections to ensure at least one of the Boolean objects is selected. If none is met the function is repeated
    else if (this.upperCase === false && this.lowerCase === false && this.numeric === false && this.specChar === false) {
      alert("At least one of the criteria must be selected to generate a password! Please generate a new password.");
      return;
    }
    return(this.rawPassword);  
  }
};

//Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generates the password
function generatePassword() {
  
  // ask the user for various alert messages written previously
  while (profile.length !== null) {
    profile.passwordLength();
    profile.passwordUpperCase();
    profile.passwordLowerCase();
    profile.passwordNumeric();
    profile.passwordSpecChar();

    //declares password length and result variables that were chosen
    var rawPasswordLength = profile.rawPassword.length;
    var result = "";

    //generates a password based on the criteria selected the user selected
    for (var i = 0; i < profile.length; i++) {
      result += profile.rawPassword.charAt(Math.floor(Math.random() * rawPasswordLength));
    }
    
    //return a generated password
    return result;
  }
}