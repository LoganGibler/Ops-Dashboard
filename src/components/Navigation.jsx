import React, { useState } from "react";
import logo from "../imgs/dixie1.png";

const Navigation = ({
  isActive,
  setIsActive,
  activeSession,
  setActiveSession,
  activeUser
}) => {
  return (
    <div className="flex bg-green-500 py-3 px-10 border-b-0 h-16">
      {!isActive && (
        <img src={logo} className="h-10 w-15 p-0 ml-10 rounded-md"></img>
      )}
      {isActive && (
        <img src={logo} className="h-10 w-15 p-0 ml-40 rounded-md"></img>
      )}
      {!isActive && (
        <h2 className="p-0 mx-10 my-1.5 text-white font-bold text-xl -sm:hidden">
          Ops BulletinBoard
        </h2>
      )}
        {

        }
      <div className="flex grow justify-end">
        <p className="text-lg text-white text-center align-middle mr-3 mt-1">
          Username
        </p>
        <button className="text-lg text-green-500 bg-stone-50 px-3 text-center rounded-md">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navigation;
