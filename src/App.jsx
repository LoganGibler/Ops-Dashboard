import React, { useState, useEffect } from "react";
import "./globals.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navigation, Taskbar, Login, Register, Turnover } from "./components";

import { testingProtectedRoute } from "../src/middleware/auth";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeComp, setActiveComp] = useState("");
  const [activeSession, setActiveSession] = useState(false);

  async function fetchLoginStatus() {
    const tokenStatus = localStorage.getItem("token");
    if (tokenStatus) {
      setActiveSession(true);
    }
  }

  useEffect(() => {
    fetchLoginStatus();
  }, []);

  return (
    <main className="h-screen">
      <BrowserRouter>
        <Navigation
          isActive={isActive}
          setIsActive={setIsActive}
          activeSession={activeSession}
          setActiveSession={setActiveSession}
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
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
