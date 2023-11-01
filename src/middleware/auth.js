import axios from "axios";

const URL = "http://localhost:8000";

// user auth middleware
export async function testingProtectedRoute() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  // console.log("this is token from localstorage: ", token);
  const response = await axios.post(
    `${URL}/protected`,
    {
      username: username,
    },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );

  // console.log("This is response from /protected?: ", response);
  return response;
}
//////////////////////////////
