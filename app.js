const { createElement, checkAndGenerate, validateAndLogin } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  const loginButton = document.querySelector('#btnLogin');
  newUserButton.addEventListener('click', addUser);
  loginButton.addEventListener('click', signInUser);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  const outputText = checkAndGenerate(newUserNameInput.value,newUserNameInput.value);

  if (!outputText) {
    return;
  }

  const userList = document.querySelector('.user-list');

  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

const signInUser = () => {
  const emailInput = document.querySelector('input#email');
  const passwordInput = document.querySelector('input#password');

  const loginDetails = validateAndLogin(emailInput.value, passwordInput.value);

  if (loginDetails) {
    window.location.replace('/dashboard.html');
  } else {
    return false;
  }
};

// Start the app!
initApp();
