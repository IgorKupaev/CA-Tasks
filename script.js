const loginInput = document.getElementById('loginInput');
const passwordInput = document.getElementById('passwordInput');
const authButton = document.getElementById('authButton');
const root = document.getElementsByTagName('body')[0];
const error = document.getElementById('error');

let user = null;

const changePage = () => {
  console.log(root);
  if (user) {
    root.innerHTML = `<div style='text-align: center'>User ID: ${user._id}</div>
    <div style='text-align: center'>FullName: ${user.fullName}</div>
    <div style='text-align: center'>Email: ${user.email}</div>`
  }
}

const showError = message => {
  error.innerHTML = message;
  error.style = 'transform: translateX(-10px)';
  setTimeout(() => {
    error.innerHTML = '';
    error.style = 'transform: translateX(1000px)';
  }, 4000);
}

const auth = async () => {
  try {
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ login: loginInput.value, password: passwordInput.value})
    });
    console.log(response);
    if (!response.ok) throw Error(response.statusText)
    const fetchedData = await response.json();
    user = fetchedData;
    changePage();
  } catch (error) {
    console.log(error);
    showError(error);
  }
}

authButton.addEventListener('click', auth);