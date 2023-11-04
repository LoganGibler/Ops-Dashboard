import React, { useState, useEffect } from "react";

const Alerts = () => {
  const [ir360guides, setIr360Guides] = useState([]);
  const [miscGuides, setMiscGuides] = useState([]);

 
  async function fetchGuides(){

  }

  useEffect(() => {
    fetchGuides();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col shadow-md mt-2 grow ml-[13rem] mr-[8rem] p-3">
        <h2 className="p-2 border-b-2 border-green-500 font-bold text-xl">
          Alert Walkthroughs
        </h2>
        {

        }
      </div>
    </div>
  );
};

export default Alerts;
