const getPromise = (f) => {
  return () => {
    return new Promise((resolve, reject) => {
      if (f() === 'success') {
        resolve(f());
      } else {
        reject(f());
      }
    })
  }
}

const func = () => {
  throw '123';
  return 'success';
};

const test = getPromise(func);
test().then(res => {
  console.log('promise resolve: ', res);
}).catch(err => {
  console.log('promise error: ', err);
});