const loadApp = () => {
  const root = document.getElementById('root');
  const userContainer = document.getElementById('user');
  let fetchedUsers = [];

  const showUser = user => {
    userContainer.innerHTML = `<div><strong>Name:</strong> ${user.fullName}</div>
                               <div><strong>ID:</strong> ${user._id}</div>
                               <div><strong>Email:</strong> ${user.email}</div>
                               <div><strong>Password:</strong> ${user.password}</div>`;
  }

  const fetchUser = async id => {
    if (!localStorage.getItem(`${id}`)) {
      const user = await fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({id})
      });
      const fetchedUser = await user.json();
      localStorage.setItem(`${id}`, JSON.stringify(fetchedUser));
    }

    showUser(JSON.parse(localStorage.getItem(`${id}`)));
  }

  const render = () => {
    fetchedUsers.forEach(el => {
      const listItem = document.createElement('div');
      listItem.className = 'listItem';
      listItem.id = el._id;
      listItem.innerHTML = `<div id='${el._id}'><strong id='${el._id}'>User ID:</strong> ${el._id}</div>
                            <div id='${el._id}'><strong id='${el._id}'>Email:</strong> ${el.email}</div>`;
      root.appendChild(listItem);
    });
    [...document.getElementsByClassName('listItem')].forEach(el => {
      el.addEventListener('click', e => fetchUser(e.target.id));
    });
  }

  const fetchUsers = async () => {
    try {
      const users = await fetch('http://localhost:8000/users');
      fetchedUsers = await users.json();
    } catch (error) {
      console.warn(error);
    }
  }
  fetchUsers().then(() => render());
}

loadApp();
