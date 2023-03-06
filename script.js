const loadApp = () => {
  const root = document.getElementById('root');
  
  const fetchUsers = async () => {
    try {
      const users = await fetch('http://localhost:8000/users');
      return users;
    } catch (error) {
      console.error(error);
    }
  }
  console.log(fetchUsers());
}

loadApp();