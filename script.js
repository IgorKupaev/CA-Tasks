const isValidIpAddress = str => {
  if (str.split('.').length !== 4) return false;
  for (const el of str.split('.')) {
    if (isNaN(el)) return false;
    if (+el < 0 || +el > 255) return false;
  }
  return true;
} 

console.log(isValidIpAddress('255.255.255.255'));
console.log(isValidIpAddress('0.0.0.0'));
console.log(isValidIpAddress('192.168.0.1'));
console.log(isValidIpAddress('192.16.23.1'));

console.log('/////////////////')

console.log(isValidIpAddress('192.168.0.1.'));
console.log(isValidIpAddress('192.168.0.q'));
console.log(isValidIpAddress('192.168.0 1'));
console.log(isValidIpAddress('12392.168.0.1'));
console.log(isValidIpAddress('192.16.123'));
console.log(isValidIpAddress('192.16821.-0123.1'));
console.log(isValidIpAddress('19216810123.1'));
console.log(isValidIpAddress(''));
console.log(isValidIpAddress('1qweqwr23r5tq23qewrf'));
