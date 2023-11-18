import React, { useState, useEffect } from "react";
import { getUnpublishedUserGuides } from "../api/alertGuides";

const UserGuides = () => {
  const [userGuides, setUserGuides] = useState([]);

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
      <h1 className="border-b-2 border-green-500 pb-2 font-bold text-lg">
        Your Unpublished Guides
      </h1>
      {userGuides.length
        ? userGuides.map((guide, index) => {
            return (
              <div key={index} className="flex flex-col p-2">
                <h1 className="font-bold text-normal">{guide.title}</h1>
                <div className="flex">
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
