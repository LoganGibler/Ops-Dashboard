import React, { useState } from "react";
import logo from "../imgs/dixie1.png";
import { Navigate, useNavigate } from "react-router-dom";

const Navigation = ({
  isActive,
  setIsActive,
  activeSession,
  setActiveSession,
  activeUser,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-green-500 py-2 px-10 border-b-0 h-14">
      {!isActive && (
        <img src={logo} className="h-8 w-9 p-0 ml-10 rounded-md mt-1"></img>
      )}
      {isActive && (
        <img src={logo} className="h-10 w-12 p-0 ml-40 rounded-md"></img>
      )}
      {!isActive && (
        <h2 className="p-0 mx-10 my-1.5 text-white text-lg -sm:hidden">
          Ops BulletinBoard
        </h2>
      )}

      <div className="flex grow justify-end">
        {activeSession ? (
          <>
            <p className="text-md text-white text-center align-middle mr-3 mt-2">
              {activeUser}
            </p>
            <button
              className="text-md text-green-500 bg-stone-50 px-3 text-center font-bold rounded-md"
              onClick={async () => {
                localStorage.clear();
                setActiveSession(false);
                navigate("/Login");
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button
              className="text-md text-green-500 bg-stone-50 px-3 text-center font-bold rounded-md"
              onClick={() => {
                navigate("/Login");
              }}
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
