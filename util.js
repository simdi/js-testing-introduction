const generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const validateEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
};

const validateInput = (text, notEmpty, isNumber, isEmail) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (isEmail && !validateEmail(text)) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

exports.checkAndGenerate = (name, age) => {
  if (!validateInput(name, true, false, false) || !validateInput(age, false, true, false)) {
    return false;
  }
  return generateText(name, age);
}

exports.validateAndLogin = (email, password) => {
  if (!validateInput(email, true, false, true) || !validateInput(password, false, true, false)) {
    return false;
  }

  return true;
}

exports.generateText = generateText;
exports.validateInput = validateInput;
exports.validateEmail = validateEmail;