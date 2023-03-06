const loadApp = () => {
  const root = document.getElementById('root');
  
  const fetchUsers = async () => {
    try {
      const users = await fetch('http://localhost:8000/users');
      const fetchedUsers = await users.json();
      return fetchedUsers;
    } catch (error) {
      console.error(error);
    }
  }
  const users = fetchUsers();
  console.log(users);
}

loadApp();