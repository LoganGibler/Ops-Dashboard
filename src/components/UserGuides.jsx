import React, { useState, useEffect } from "react";
import { getUnpublishedUserGuides } from "../api/alertGuides";
import { useNavigate } from "react-router-dom";

const UserGuides = () => {
  const [userGuides, setUserGuides] = useState([]);
  const navigate = useNavigate();

  async function fetchUserGuides() {
    const userGuides1 = await getUnpublishedUserGuides();
    // console.log(userGuides1.userGuides);
    setUserGuides(userGuides1.userGuides);
  }

  useEffect(() => {
    fetchUserGuides();
  }, []);

  return (
    <div className="shadow-md p-3 mt-10">
      <h1 className="border-b-2 border-green-500 pb-2 font-bold text-xl p-2">
        Your Private Guides
      </h1>
      {userGuides.length
        ? userGuides.map((guide, index) => {
            return (
              <div
                key={index}
                className="flex flex-col p-3 border-l-2 border-r-2 border-white hover:cursor-pointer hover:border-green-500"
                onClick={async () => {
                  navigate(`/editguide/${guide._id}`);
                }}
              >
                <h1 className="font-bold text-normal">{guide.title}</h1>
                <div className="flex mt-1">
                  <p className="text-sm">Created by: {guide.username}</p>
                  <p className="text-sm ml-3">{guide.date}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default UserGuides;
