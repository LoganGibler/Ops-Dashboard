import axios from "axios";

// const URL = "http://localhost:8000";
const URL = "https://ops-dashboard-node-js-api.onrender.com";
const headersTemp = document.cookie.split(";");
const finalHeaders = {};
// console.log(headersTemp[0])
if (headersTemp[0] !== "") {
  headersTemp.forEach((header) => {
    const headerTemp = header.split("=");
    finalHeaders[headerTemp[0].trim()] = headerTemp[1].trim(); // save on object to access using keys.
  });
}

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based.
const day = currentDate.getDate().toString().padStart(2, "0");
const hours = currentDate.getHours().toString().padStart(2, "0");
const minutes = currentDate.getMinutes().toString().padStart(2, "0");
// const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
const formattedDate = `${month}-${day}-${year} ${hours}:${minutes}`;
const dayDate = `${month}-${day}-${year}`;

export async function getGuides() {
  try {
    const guides = await axios.get(`${URL}/getGuides`, {
      headers: {
        authorization: finalHeaders["AUTH_API"],
      },
    });
    return guides;
  } catch (error) {
    throw error;
  }
}

export async function createGuide(title, origin, description) {
  const username = JSON.parse(localStorage.getItem("username"));
  try {
    const createdGuide = await axios.post(
      `${URL}/createGuide`,
      {
        username: username,
        origin: origin,
        date: dayDate,
        title: title,
        description: description,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return createdGuide;
  } catch (error) {
    throw error;
  }
}

export async function deleteGuide(_id) {
  try {
    const deletedGuide = await axios.post(
      `${URL}/deleteGuide`,
      {
        _id: _id,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return deletedGuide;
  } catch (error) {
    throw error;
  }
}

export async function publishGuide(_id) {
  try {
    const response = await axios.post(
      `${URL}/publishGuide`,
      {
        _id: _id,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function unpublishGuide(_id) {
  try {
    const response = await axios.post(
      `${URL}/unpublishGuide`,
      {
        _id: _id,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addStep(_id, newData) {
  try {
    const response = await axios.post(
      `${URL}/addstep`,
      {
        _id: _id,
        step: newData,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function removeStep(_id, index) {
  try {
    const response = await axios.post(
      `${URL}/removeStep`,
      {
        _id: _id,
        index: index,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateStep(_id, index, newData) {
  try {
    const response = await axios.post(
      `${URL}/updateStep`,
      {
        _id: _id,
        index: index,
        newStepData: newData,
      },
      {
        headers: {
          authorization: finalHeaders["AUTH_API"],
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getUnpublishedUserGuides() {
  const username = JSON.parse(localStorage.getItem("username"));
  try {
    const response = await axios.post(
      `${URL}/getUserGuides`,
      {
        username: username,
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

export async function getGuide(_id) {
  try {
    const response = await axios.post(
      `${URL}/getGuide`,
      {
        _id: _id,
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

export async function updateTitle(_id, newData) {
  try {
    const response = await axios.post(
      `${URL}/updateTitle`,
      {
        _id: _id,
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
