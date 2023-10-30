import axios from "axios";

const URL = "http://localhost:8000";

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
  return response.data;
}
