import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getGuides } from "../api/alertGuides";
import UserGuides from "./UserGuides";

const Alerts = () => {
  const navigate = useNavigate();
  const [guides, setGuides] = useState([]);

  async function fetchGuides() {
    const allGuides = await getGuides();
    // console.log(allGuides.data.guides);
    setGuides(allGuides.data.guides);
  }

  useEffect(() => {
    fetchGuides();
  }, []);

  return (
    <div className="flex flex-col justify-center grow ml-[13rem] mr-[8rem]">
      <div className="flex flex-col shadow-md mt-8 grow p-3">
        <h2 className="p-2 border-b-2 border-green-500 font-bold text-xl">
          Alert Walkthroughs
        </h2>
        {guides.length ? (
          guides.map((guide, index) => {
            return (
              <div
                key={index}
                className="p-3 border-l-2 border-r-2 border-white hover:cursor-pointer hover:border-green-500"
                onClick={async () => {
                  navigate(`/guide/${guide._id}`);
                }}
              >
                <h1 className="font-bold text-normal">{guide.title}</h1>
                <div className="flex mt-1">
                  <p className="text-sm">
                    Created by: <a>{guide.username}</a>
                  </p>
                  <p className="text-sm ml-5">{guide.date}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div>No guides found. Please contact dev.</div>
        )}
      </div>
      <div className="mt-4 ml-1">
        <button
          className="border-[1px] border-green-500 p-1.5 rounded-md text-green-500 hover:cursor-pointer"
          onClick={async () => {
            navigate("/createGuide");
          }}
        >
          Create Guide
        </button>
      </div>
      <UserGuides />
    </div>
  );
};

export default Alerts;
