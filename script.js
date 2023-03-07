const isIpAddressValidate = str => {
  if (str.split('.').length !== 4) return false;
  for (const el of str.split('.')) {
    if (isNaN(el)) return false;
    if (+el < 0 || +el > 255) return false;
  }
  return true;
} 

console.log(isIpAddressValidate('255.255.255.255'));
console.log(isIpAddressValidate('0.0.0.0'));
console.log(isIpAddressValidate('192.168.0.1'));
console.log(isIpAddressValidate('192.16.23.1'));

console.log('/////////////////')

console.log(isIpAddressValidate('192.168.0.1.'));
console.log(isIpAddressValidate('192.168.0.q'));
console.log(isIpAddressValidate('192.168.0 1'));
console.log(isIpAddressValidate('12392.168.0.1'));
console.log(isIpAddressValidate('192.16.123'));
console.log(isIpAddressValidate('192.16821.-0123.1'));
console.log(isIpAddressValidate('19216810123.1'));
console.log(isIpAddressValidate(''));
console.log(isIpAddressValidate('1qweqwr23r5tq23qewrf'));
