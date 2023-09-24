const AUTH_API = `${BASE_API_URL}/auth`; // http://localhost:5000/api/auth


const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};


const login = (formData) => _post(`${BASE_API_URL}/auth/login`, formData);
const _post = async (url, data, options = DEFAULT_OPTIONS) => {



  const res = await fetch(url, {
    method: 'POST',
    ...options,
    body: JSON.stringify(data),
  });

  return res.json();
};
const doLogin = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username+password+"auth.service.js");
    
    
    const res = await login({ username, password }).catch((err) => {
     
      alert('Failed to login. Please try again later.');
    });
  
    const { auth, access_token, refresh_token } = res;
  
    setStorage('isAuth', auth);
    setStorage('access_token', access_token);
    setStorage('refresh_token', refresh_token);
  
    window.location.href = 'home.html';
  };
  
  const doRegister = async(e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('trying to register');
    const res = await register({
      username,
      email,
      password,
    });
  
    if (res) {
      window.location.href = 'home.html';
    }
  };
  const doLogout = (e) => {
    e.preventDefault();
    logout();
    window.location.href = 'index.html';
  };
  
 
