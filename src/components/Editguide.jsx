import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGuide } from "../api/alertGuides";
import { BiSolidEdit } from "react-icons/bi";
import { PiUploadBold } from "react-icons/pi";
import { updateTitle } from "../api/alertGuides";

const Editguide = () => {
  const [guide, setGuide] = useState([]);
  const [editTitleActive, setEditTitleActive] = useState(false);
  const [editedStepIndex, setEditedStepIndex] = useState(null);
  let guide_id = useParams();
  let _id = guide_id.id;
  let stepCount = 0;

  async function updatetitle(_id) {
    const newData = await document.getElementById("title-input").value;
    const update = await updateTitle(_id, newData);
    window.location.reload();
  }

  async function fetchGuide() {
    const fetchedGuide = await getGuide(_id);
    console.log(fetchedGuide.guide);
    setGuide(fetchedGuide.guide);
  }

  useEffect(() => {
    fetchGuide(_id);
  }, []);

  let steps = guide.steps;
  console.log(steps);
  return (
    <div className="flex flex-col justify-center ml-[13rem] mr-[8rem] mt-[3rem]">
      <div className="flex flex-col grow border-b-2 border-green-500 p-2">
        <div className="flex">
          {editTitleActive ? (
            <>
              <input
                id="title-input"
                maxLength={100}
                defaultValue={guide.title}
                className="p-1 border-2 w-[35rem] text-lg"
              ></input>
              <div className="grow flex justify-end">
                <PiUploadBold
                  className="text-3xl mt-2 hover:text-green-500 hover:cursor-pointer"
                  onClick={async () => {
                    updatetitle(guide._id);
                    setEditTitleActive(false);
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <h1 className="font-bold text-xl">{guide.title}</h1>
              <div className="grow flex justify-end">
                <BiSolidEdit
                  className="text-3xl mt-2 hover:text-green-500 hover:cursor-pointer"
                  onClick={async () => {
                    setEditTitleActive(true);
                  }}
                />
              </div>
            </>
          )}
        </div>

        <div className="flex mt-1.5">
          <p>
            Origin: <a className="font-bold">{guide.origin}</a>
          </p>
          <p className="ml-3">
            Created: <a className="font-bold">{guide.date}</a>
          </p>
        </div>
      </div>

      {steps ? (
        steps.map((step, index) => {
          console.log(step);
          if (!step.step) {
            return;
          }
          stepCount += 1;
          return (
            <div key={index} className="flex my-4">
              <p className="whitespace-nowrap font-bold">Step: {stepCount}</p>
              {editedStepIndex === index ? (
                <div className="flex flex-col grow">
                  <textarea
                    defaultValue={step.step}
                    className="min-h-[15rem] w-full grow border-2 border-gray-500 p-2 ml-2"
                  ></textarea>
                  <button></button>
                </div>
              ) : (
                <p
                  className="ml-5 grow hover:cursor-pointer"
                  onClick={async () => {
                    setEditedStepIndex(index);
                  }}
                >
                  {step.step}
                </p>
              )}

              {/* <div className="flex grow justify-end">
                <BiSolidEdit
                  className="text-2xl mt-2 hover:text-green-500 hover:cursor-pointer"
                  onClick={async () => {}}
                />
              </div> */}
            </div>
          );
        })
      ) : (
        <div>
          Add your first step here: <button>AddStep</button>
        </div>
      )}
      <div className="flex grow justify-end mt-2">
        <button className="border-2 border-green-500 p-1.5 text-green-500 rounded-md hover:cursor-pointer">
          Publish
        </button>
      </div>
    </div>
  );
};

export default Editguide;
