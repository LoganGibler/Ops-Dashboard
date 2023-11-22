import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGuide, unpublishGuide } from "../api/alertGuides";

const Guide = () => {
  const user = JSON.parse(localStorage.getItem("username"));
  let stepCount = 0;
  const navigate = useNavigate();
  // display guide title,createdby, publishdate, steps, screenshots.
  let _id = useParams();
  _id = _id.id;
  // console.log(_id);
  const [guide, setGuide] = useState([]);

  async function fetchGuide(_id) {
    const fetchedGuide = await getGuide(_id);
    console.log("fetchedGuide:", fetchedGuide.guide);
    setGuide(fetchedGuide.guide);
  }

  useEffect(() => {
    fetchGuide(_id);
  }, []);

  const steps = guide.steps;

  return (
    <div className="flex flex-col justify-center ml-[13rem] mr-[8rem] ">
      <div className="flex flex-col grow border-b-2 border-green-500 p-2 mt-[4rem]">
        <h1 className="font-bold text-xl">{guide.title}</h1>
        <div className="flex mt-2">
          <p>
            Origin: <a className="font-bold">{guide.origin}</a>
          </p>
          <p className="ml-3">
            Created: <a className="font-bold">{guide.date} </a>by{" "}
            {guide.username}
          </p>
        </div>
        <p>{Guide.description}</p>
      </div>
      <div className="">
        {steps
          ? steps.map((stepObj, index) => {
              let step = stepObj.step;
              if (!step) {
                return;
              }
              stepCount += 1;
              {
                /* console.log(step, index); */
              }

              return (
                <div className="flex p-1 my-5" key={index}>
                  <p className="p-2 font-bold whitespace-nowrap">
                    Step: {stepCount}
                  </p>
                  <p className="ml-5 whitespace-pre-line p-2 grow">{step}</p>
                </div>
              );
            })
          : null}
      </div>

      {guide.username === user && (
        <div className="grow flex justify-end">
          <button
            className="border-2 border-green-500 rounded-md p-1.5 text-white bg-green-500 font-semibold hover:cursor-pointer"
            onClick={async () => {
              await unpublishGuide(guide._id);
              navigate("/Alerts");
            }}
          >
            Unpublish
          </button>
        </div>
      )}
    </div>
  );
};

export default Guide;
