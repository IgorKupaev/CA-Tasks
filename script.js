const isValidPhoneNumber = str => {
  if (str.length !== 15 || str[0] !== '+' || str[2] !== '(' || str[6] !== ')' || str[10] !== '-') return false;
  str = str.replaceAll('+', '');
  str = str.replaceAll('(', '');
  str = str.replaceAll(')', '');
  str = str.replaceAll('-', '');
  if (str.length !== 11) return false;
  for (const letter of str.split('')) {
    if (isNaN(letter)) return false;
  };
  return true;
}

console.log(isValidPhoneNumber('+7(123)221-2276'));

console.log(isValidPhoneNumber('+(123)221-2276'));
console.log(isValidPhoneNumber('7(123)221-2276'));
console.log(isValidPhoneNumber('+7123)221-0376'));
console.log(isValidPhoneNumber('+7(123221-1876'));
console.log(isValidPhoneNumber('+-7(123)2213276'));
console.log(isValidPhoneNumber('+7(123)2cx-4876'));
console.log(isValidPhoneNumber('+7(123)22)-1276'));
console.log(isValidPhoneNumber('+7(123)22--4876'));
console.log(isValidPhoneNumber('+7(123)221-287.'));
console.log(isValidPhoneNumber('+7(123)infinity'));
console.log(isValidPhoneNumber('111111111111111'));
console.log(isValidPhoneNumber(''));
console.log(isValidPhoneNumber('               '));
