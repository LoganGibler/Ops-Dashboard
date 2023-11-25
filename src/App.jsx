import React, { useState, useEffect } from "react";
import "./globals.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Navigation,
  Taskbar,
  Login,
  Register,
  Turnover,
  Bulletin,
  Alerts,
  Contacts,
  Workflows,
  Guide,
  CreateGuide,
  UserGuides,
  Editguide,
} from "./components";
import ProtectedRoute from "./routes/ProtectedRoute";
import { testingProtectedRoute } from "./middleware/auth";

// grabs cookie for auth
const headersTemp = document.cookie.split(";");
const finalHeaders = {};
// console.log(headersTemp[0])
if (headersTemp[0] !== "") {
  headersTemp.forEach((header) => {
    const headerTemp = header.split("=");
    finalHeaders[headerTemp[0].trim()] = headerTemp[1].trim(); // save on object to access using keys.
  });
}

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeComp, setActiveComp] = useState("");
  const [activeSession, setActiveSession] = useState(false);
  const [activeUser, setActiveUser] = useState("");

  async function fetchLoginStatus() {
    const sessionStatus = await testingProtectedRoute();
    // console.log(sessionStatus);
    setActiveSession(sessionStatus);
  }

  async function fetchUser() {
    const activeUser = JSON.parse(localStorage.getItem("username"));
    if (activeUser) {
      setActiveUser(activeUser);
      // setActiveSession(true);
    }
  }

  useEffect(() => {
    fetchLoginStatus();
    fetchUser();
  }, []);

  return (
    <main>
      <BrowserRouter>
        <Navigation
          isActive={isActive}
          setIsActive={setIsActive}
          activeSession={activeSession}
          setActiveSession={setActiveSession}
          activeUser={activeUser}
        />
        {activeSession && (
          <Taskbar
            isActive={isActive}
            setIsActive={setIsActive}
            activeComp={activeComp}
            setActiveComp={setActiveComp}
          />
        )}

        <Routes>
          {/* publicroutes */}
          {!activeUser && <Route path="/" element={<Login />} />}
          <Route
            path="/Login"
            element={
              <Login
                activeSession={activeSession}
                setActiveSession={setActiveSession}
              />
            }
          />
          <Route
            path="/Register"
            element={
              <Register
                activeSession={activeSession}
                setActiveSession={setActiveSession}
              />
            }
          />
          {/* {private routes} */}

          <Route
            path="/Turnover"
            element={<ProtectedRoute element={Turnover} />}
          />
          <Route
            path="/Bulletin"
            element={<ProtectedRoute element={Bulletin} />}
          />
          <Route path="/Alerts" element={<ProtectedRoute element={Alerts} />} />
          <Route
            path="/Contacts"
            element={<ProtectedRoute element={Contacts} />}
          />
          <Route
            path="/Workflows"
            element={<ProtectedRoute element={Workflows} />}
          />
          <Route
            path="/guide/:id"
            element={<ProtectedRoute element={Guide} />}
          />
          <Route
            path="/createGuide"
            element={<ProtectedRoute element={CreateGuide} />}
          />
          <Route
            path="/editguide/:id"
            element={<ProtectedRoute element={Editguide} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
