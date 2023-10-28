import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Taskbar } from ".";

const Navigation = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex bg-indigo-500 py-5 px-10 border-b-0">
      {menu ? (
        <RiCloseLine
          className="hover: cursor-pointer"
          color="#fff"
          size={28}
          onClick={() => setMenu(false)}
        />
      ) : (
        <RiMenu3Line
          className="hover: cursor-pointer"
          color="#fff"
          size={28}
          onClick={() => setMenu(true)}
        />
      )}
    </div>
  );
};

export default Navigation;
