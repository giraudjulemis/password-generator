const generateBtn = document.querySelector("#generate");

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const getRandomItem = (list) => {
  return list[randomInt(0, list.length - 1)];
}

const generatePassword = () => {
  let userInput = window.prompt("How long do you want your password to be?");
  let passwordLength = parseInt(userInput);
  if (isNaN(passwordLength)) {
    window.alert("That's not a number!");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
  }
  let userWantsNumbers = window.confirm("Would you like to include numbers in your password?");
  let userWantsSymbols = window.confirm("Would you like to include symbols in your password?");
  let userWantsLowercase = window.confirm("Would you like to include lowercase in your password?");
  let userWantsUppercase = window.confirm("Would you like to include uppercase in your password?");

  let numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"];
  let lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let uppercaseList = lowercaseList.map(letter => letter.toUpperCase());

  let optionsCart = [];

  if (userWantsNumbers === true) {
    optionsCart.push(numberList);
  }
  if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
  }
  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }
  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
  }
  let generatedPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomList = getRandomItem(optionsCart);
    let randomChar = getRandomItem(randomList);
    console.log(randomChar);
  }
}


const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);