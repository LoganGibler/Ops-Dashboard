import axios from "axios";

const URL = "http://localhost:8000";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based.
const day = currentDate.getDate().toString().padStart(2, "0");
const hours = currentDate.getHours().toString().padStart(2, "0");
const minutes = currentDate.getMinutes().toString().padStart(2, "0");
const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;

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
          Authorization: `${token}`,
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
          Authorization: `${token}`,
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
          Authorization: `${token}`,
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
    const note = await axios.post(
      `${URL}/addNote`,
      {
        note: note,
        username: username,
        date: formattedDate,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return note;
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
          Authorization: `${token}`,
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
          Authorization: `${token}`,
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
          Authorization: `${token}`,
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
          Authorization: `${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
}
