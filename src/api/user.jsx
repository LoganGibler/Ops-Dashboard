import axios from "axios";

// const URL = "http://localhost:8000";
const URL = "https://ops-dashboard-node-js-api.onrender.com";

export async function createUser(username, password) {
  const response = await axios.post(`${URL}/register`, {
    username: username,
    password: password,
  });
  return response.data;
}

export async function loginUser(username, password) {
  const response = await axios.post(`${URL}/login`, {
    username: username,
    password: password,
  });
  document.cookie = `AUTH_API=${response.data.token}`;
  return response.data;
}

export async function logout() {
  const logoutUser = await axios.post("/logout");
  return;
}
