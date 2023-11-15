import axios from "axios";

// const URL = "http://localhost:8000";
const URL = "https://ops-dashboard-node-js-api.onrender.com";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based.
const day = currentDate.getDate().toString().padStart(2, "0");
const hours = currentDate.getHours().toString().padStart(2, "0");
const minutes = currentDate.getMinutes().toString().padStart(2, "0");
// const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
const formattedDate = `${month}-${day}-${year} ${hours}:${minutes}`;

// export async function getTurnover() {
//   const token = localStorage.getItem("token");
//   const username = localStorage.getItem("username");
//   try {
//     const turnover = await axios.post(
//       `${URL}/turnover`,
//       {
//         username: username,
//       },
//       {
//         headers: {
//           Authorization: `${token}`,
//         },
//       }
//     );
//     return turnover.data;
//   } catch (error) {
//     throw error;
//   }
// }
export async function getGuides() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const guides = await axios.post(
      `${URL}/getGuides`,
      {
        username: username,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return guides;
  } catch (error) {
    throw error;
  }
}

export async function createGuide(title) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const createdGuide = await axios.post(
      `${URL}/createGuide`,
      {
        username: username,
        date: formattedDate,
        title: title,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return createdGuide;
  } catch (error) {
    throw error;
  }
}
