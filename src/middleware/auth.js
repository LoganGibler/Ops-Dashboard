import axios from "axios";

const URL = "http://localhost:8000";
// const URL = "https://ops-dashboard-node-js-api.onrender.com";

// user auth middleware
export async function testingProtectedRoute() {
  const username = localStorage.getItem("username");
  const response = await axios.post(
    `${URL}/protected`,
    {
      username: username,
    },
    { withCredentials: true }
  );

  // console.log("This is response from /protected?: ", response);
  return response;
}
//////////////////////////////
