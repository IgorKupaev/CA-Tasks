async function processArray(array) {
  const f = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  let result = []

  for (const item of array) {
    let status = await f(item);
    result.push([item, status]);
  }
  return result;
}

const urls = ['https://www.vk.com', 'https://www.google.com', 'https://www.zxcoqwkpsdg.net', 'https://learn.javascript.ru'];

processArray(urls).then(res => console.log(res));
