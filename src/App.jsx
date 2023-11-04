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
} from "./components";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeComp, setActiveComp] = useState("");
  const [activeSession, setActiveSession] = useState(false);
  const [activeUser, setActiveUser] = useState("");

  async function fetchLoginStatus() {
    const tokenStatus = localStorage.getItem("token");
    if (tokenStatus) {
      setActiveSession(true);
    }
  }

  async function fetchUser() {
    const activeUser = localStorage.getItem("username");
    if (activeUser) {
      setActiveUser(activeUser);
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
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
