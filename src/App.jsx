import React, { useState, useEffect } from "react";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import { Navigation, Taskbar, Login, Register } from "./components";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeComp, setActiveComp] = useState("");
  const [activeSession, setActiveSession] = useState(false);

  async function fetchTokenStatus() {
    const tokenStatus = localStorage.getItem("token");
    if (tokenStatus){
      setActiveSession(true);
    }
  }

  useEffect(() => {
    fetchTokenStatus();
  }, []);

  return (
    <main className="h-screen">
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
        {/* <Route path="/Home" element={<Home />} /> */}
      </Routes>
    </main>
  );
};

export default App;
