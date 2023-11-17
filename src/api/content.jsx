import axios from "axios";

const URL = "http://localhost:8000";
// const URL = "https://ops-dashboard-node-js-api.onrender.com";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based.
const day = currentDate.getDate().toString().padStart(2, "0");
const hours = currentDate.getHours().toString().padStart(2, "0");
const minutes = currentDate.getMinutes().toString().padStart(2, "0");
// const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
const formattedDate = `${month}-${day}-${year} ${hours}:${minutes}`;

const headersTemp = document.cookie.split(";"); // <-- this get all cookies saves and splits them in the array.

const finalHeaders = {};

headersTemp.forEach((header) => {
  // <-- looping on all cookies
  const headerTemp = header.split("="); // <-- split each cookie to get key and value
  finalHeaders[headerTemp[0].trim()] = headerTemp[1].trim(); // <-- save on object to access using keys.
});

export async function getTurnover() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const turnover = await axios.post(
      `${URL}/turnover`,
      {
        username: username,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return turnover.data;
  } catch (error) {
    throw error;
  }
}

export async function updateTurnover(newTurnover) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
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
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );

    return turnover.data;
  } catch (error) {
    throw error;
  }
}

//  `${URL}/bulletin`,
// {
//   username: username,
// },
// {
//   headers: {
//     Authorization: `${token}`,
//   },
// }

// Bulletin calls
export async function getBulletin() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const bulletin = await axios.post(
      `${URL}/bulletin`,
      {
        username: username,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return bulletin;
  } catch (error) {
    throw error;
  }
}

export async function addNote(note) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const note1 = await axios.post(
      `${URL}/addNote`,
      {
        note: note,
        username: username,
        date: formattedDate,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return note1;
  } catch (error) {
    throw error;
  }
}

export async function updateNote(newNote, noteID) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const updatedNote = await axios.post(
      `${URL}/updateNote`,
      {
        username: username,
        newData: newNote,
        date: formattedDate,
        noteID: noteID,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return updatedNote;
  } catch (error) {
    throw error;
  }
}

export async function completeNote(noteID) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const completedNote = await axios.post(
      `${URL}/completeNote`,
      {
        noteID: noteID,
        username: username,
        date: formattedDate,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );

    return completedNote;
  } catch (error) {
    throw error;
  }
}

export async function uncompleteNote(noteID) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const uncompletedNote = await axios.post(
      `${URL}/uncompleteNote`,
      {
        noteID: noteID,
        username: username,
        date: formattedDate,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );

    return uncompletedNote;
  } catch (error) {
    throw error;
  }
}

export async function deleteNote(noteID) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const deletedNote = await axios.post(
      `${URL}/closeNote`,
      {
        noteID: noteID,
        username: username,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
  } catch (error) {
    throw error;
  }
}

export async function getContacts() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const contacts = await axios.post(
      `${URL}/getContacts`,
      {
        username: username,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return contacts;
  } catch (error) {
    throw error;
  }
}

export async function updateContacts(newData) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  try {
    const updatedData = await axios.post(
      `${URL}/updateContacts`,
      { username: username, newData: newData, date: formattedDate },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return updatedData;
  } catch (error) {
    throw error;
  }
}

// workflow api calls
export async function getWorkflows() {
  try {
    const response = await axios.get(`${URL}/getWorkflows`, {
      headers: {
        authorization: finalHeaders["AUTH_API"],
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateWorkflows(newData) {
  const username = JSON.parse(localStorage.getItem("username"));
  try {
    const response = await axios.post(
      `${URL}/updateWorkflows`,
      {
        username: username,
        date: formattedDate,
        newData: newData,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
