import axios from "axios";

const URL = "http://localhost:8000";
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based.
const day = currentDate.getDate().toString().padStart(2, "0");
const hours = currentDate.getHours().toString().padStart(2, "0");
const minutes = currentDate.getMinutes().toString().padStart(2, "0");

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

export async function getTurnover() {
  try {
    const turnover = await axios.get(
      `${URL}/turnover`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    return turnover.data;
  } catch (error) {
    throw error;
  }
}

export async function updateTurnover(newTurnover, username) {
  try {
    const turnover = await axios.post(
      `${URL}/updateTurnover`,
      {
        newTurnover: newTurnover,
        username: username,
        date: formattedDate,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );

    return turnover.data;
  } catch (error) {
    throw error;
  }
}
