const AUTH_API = `${BASE_API_URL}/auth`; // http://localhost:5000/api/auth
const USER_API = `${BASE_API_URL}/user`; // http://localhost:5000/api/user
const RESERVATION_API = `${BASE_API_URL}/reservation`;

const register = (formData) => _post(`${AUTH_API}/register`, formData);

const login = (formData) => _post(`${AUTH_API}/login`, formData);
const reservation = (formData) => _post_with_auth(`${RESERVATION_API}`, formData);

const logout = () => {
  clearStorage('isAuth');
  clearStorage('access_token');
  clearStorage('refresh_token');
};