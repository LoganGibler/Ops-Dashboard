import React, { useState } from "react";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import { Navigation, Taskbar } from "./components";

// export const context = React.createContext(null);

const App = () => {
  // const [sidebarStatus, setSidebarStatus] = useState("true");

  return (
    <main className="h-screen">
      <Navigation />
      <Taskbar />
      <Routes>
        {/* <Route path="" element={<Navigation />} />
        <Route path="" element={<Taskbar />} /> */}
        {/* publicroutes */}
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* {private routes} */}
        {/* <Route path="/Home" element={<Home />} /> */}
      </Routes>
    </main>
  );
};

export default App;
