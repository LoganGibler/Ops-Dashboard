import React, { useState, useEffect } from "react";
import { getTurnover } from "../api/content";
import { LiaEdit } from "react-icons/lia";

const Turnover = () => {
  const [turnover, setTurnover] = useState([]);
  const [editTurnoverActive, setEditTurnoverActive] = useState(false);
  const [turnoverEditHtml, setTurnoverEditHtml] = useState(null);

  async function fetchTurnover() {
    const turnoverInfo = await getTurnover();
    setTurnover(turnoverInfo.turnover[0]);
  }

  useEffect(() => {
    fetchTurnover();
  }, []);

  async function renderEditTurnover() {
    async function getNewTurnoverData() {
      // grab value from textarea, pass to update turnover function
      const newData = document.getElementById("ops-edit-turnover").value;
    }

    return (
      <div className="flex flex-col shadow-lg">
        <textarea className="" id="ops-edit-turnover">
          {turnover.turnover}
        </textarea>
        <p>ReactIconHere</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center grow ml-20 mt-10">
      <div className="flex flex-col shadow-lg text-bold mx-20 px-10 py-5 border-t-4 border-green-500">
        <h1 className="font-bold my-0 text-lg">Operations Turnover</h1>
        <p className="my-3">
          Updated by: {turnover.username} on {turnover.date}
        </p>
        <p className="whitespace-pre-line">{turnover.turnover}</p>
        <p className="flex grow justify-end my-2">
          <LiaEdit className="text-3xl hover:cursor-pointer hover:text-green-500" />
        </p>
      </div>
    </div>
  );
};

export default Turnover;
