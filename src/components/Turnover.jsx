import React, { useState, useEffect } from "react";
import { getTurnover } from "../api/content";
import { LiaEdit } from "react-icons/lia";
import { FiUpload } from "react-icons/fi";
import { updateTurnover } from "../api/content";

const Turnover = () => {
  const [turnover, setTurnover] = useState([]);
  const [editTurnoverActive, setEditTurnoverActive] = useState(false);
  const [turnoverEditHtml, setTurnoverEditHtml] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showUpdateTooltip, setShowUpdateTooltip] = useState(false);

  async function fetchTurnover() {
    const turnoverInfo = await getTurnover();
    setTurnover(turnoverInfo.turnover[0]);
  }

  useEffect(() => {
    fetchTurnover();
  }, []);

  function renderEditTurnover() {
    async function getNewTurnoverData() {
      // grab value from textarea, pass to update turnover function
      const newData = document.getElementById("ops-edit-turnover").value;
      const updatedTurnover = await updateTurnover(newData);
      if (updatedTurnover) {
        window.location.reload();
      }
    }

    return (
      <div className="flex flex-col shadow-lg text-bold ml-[13rem] mr-[9rem] px-10 py-5 mt-10 mb-16 border-t-4 border-green-500">
        <h1 className="font-bold my-0 text-lg">Operations Turnover</h1>
        <div className="flex">
          <p className="my-3">
            Last Updated by: {turnover.username} on {turnover.date}
          </p>
          <p
            className="flex grow justify-end"
            onClick={async () => {
              await getNewTurnoverData();
              setEditTurnoverActive(false);
              window.location.reload();
            }}
            onMouseEnter={() => setShowUpdateTooltip(true)}
            onMouseLeave={() => setShowUpdateTooltip(false)}
          >
            <FiUpload className="text-2xl hover:cursor-pointer hover:text-green-500" />
          </p>
        </div>

        <textarea
          className="w-full min-h-[1000px] h-auto resize-none px-5 py-3 my-10 border-2 border-gray"
          id="ops-edit-turnover"
        >
          {turnover.turnover}
        </textarea>
        <p
          className="flex grow justify-end"
          onClick={async () => {
            await getNewTurnoverData();
            setEditTurnoverActive(false);
            window.location.reload();
          }}
          onMouseEnter={() => setShowUpdateTooltip(true)}
          onMouseLeave={() => setShowUpdateTooltip(false)}
        >
          <FiUpload className="text-2xl hover:cursor-pointer hover:text-green-500" />
        </p>
        {showUpdateTooltip && (
          <div
            className="bg-white text-black p-2 absolute top-10 left-10    transform -translate-x-1/2 mt-2"
            style={{ whiteSpace: "nowrap" }}
          >
            Submits update to Turnover.
          </div>
        )}
      </div>
    );
  }

  if (editTurnoverActive) {
    return turnoverEditHtml;
  } else {
    return (
      <div className="flex justify-center grow ml-[8rem] mt-10 mb-10 mr-[4rem]">
        {!editTurnoverActive && (
          <div className="flex flex-col shadow-lg text-bold mx-20 mb-20 px-10 py-5 border-t-4 border-green-500">
            <div>
              <h1 className="font-bold my-0 text-lg">Operations Turnover</h1>
              <div className="flex">
                <p className="my-3">
                  Updated by: {turnover.username} on {turnover.date}
                </p>
                <p
                  className="flex grow justify-end"
                  onClick={() => {
                    setEditTurnoverActive(true);
                    setTurnoverEditHtml(renderEditTurnover());
                  }}
                >
                  <LiaEdit
                    className="text-3xl hover:cursor-pointer hover:text-green-500"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  />
                </p>
              </div>

              <p className="whitespace-pre-line">{turnover.turnover}</p>
              <p
                className="flex grow justify-end my-2"
                onClick={() => {
                  setEditTurnoverActive(true);
                  setTurnoverEditHtml(renderEditTurnover());
                }}
              >
                <LiaEdit
                  className="text-3xl hover:cursor-pointer hover:text-green-500"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                />
              </p>
              {showTooltip && (
                <div
                  className="bg-white text-black p-2 absolute top-0 left-30 transform -translate-x-1/2 mt-2"
                  style={{ whiteSpace: "nowrap" }}
                >
                  This button lets you edit the turnover.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Turnover;
