const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
const email = document.getElementById('email');
const number = document.getElementById('number');
const button = document.getElementById('button');

const firstNameError = document.getElementById('firstNameError');
const secondNameError = document.getElementById('secondNameError');
const emailError = document.getElementById('emailError');
const numberError = document.getElementById('numberError');

const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const isEmpty = str => !str.length;
const isEmail = str => regexEmail.test(str.toLowerCase());
const isPhoneNumber = str => regexPhoneNumber.test(str);

const changeStyleToRed = action => {
  switch (action) {
    case 'FIRST_NAME':
      firstName.style = 'background: #ffbbbb';
      break;
    case 'SECOND_NAME':
      secondName.style = 'background: #ffbbbb';
      break;
    case 'EMAIL':
      email.style = 'background: #ffbbbb';
      break;
    case 'NUMBER':
      number.style = 'background: #ffbbbb';
      break;
  }
}

const clearAllStyles = () => {
  number.style = '';
  email.style = '';
  secondName.style = '';
  firstName.style = '';
}

let firstActivateFlag = true;

const observeInputs = () => {
  clearAllStyles();
  firstNameError.innerHTML = '';
  if (isEmpty(firstName.value)) {
    changeStyleToRed('FIRST_NAME');
    firstNameError.innerHTML = 'Empty field';
  }

  secondNameError.innerHTML = '';
  if (isEmpty(secondName.value)) {
    changeStyleToRed('SECOND_NAME');
    secondNameError.innerHTML = 'Empty field';
  }

  emailError.innerHTML = '';
  if (isEmpty(email.value)) {
    changeStyleToRed('EMAIL');
    emailError.innerHTML = 'Empty field';
  } else if (!isEmail(email.value)) {
    changeStyleToRed('EMAIL');
    emailError.innerHTML = 'Not valid email';
  }

  numberError.innerHTML = '';
  if (isEmpty(number.value)) {
    changeStyleToRed('NUMBER');
    numberError.innerHTML = 'Empty field';
  } else if (!isPhoneNumber(number.value)) {
    changeStyleToRed('NUMBER');
    numberError.innerHTML = 'Not valid phone number';
  }

  if (firstActivateFlag) {
    firstActivateFlag = false;
    [firstName, secondName, email, number].forEach(el => el.addEventListener('input', observeInputs));
  }
}

button.addEventListener('click', observeInputs);
