import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addStep,
  deleteGuide,
  getGuide,
  publishGuide,
  removeStep,
  updateStep,
} from "../api/alertGuides";
import { BiSolidEdit } from "react-icons/bi";
import { PiUploadBold } from "react-icons/pi";
import { CiSquareInfo } from "react-icons/ci";
import { MdVisibility } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";
import { updateTitle } from "../api/alertGuides";
import { BsTrash3 } from "react-icons/bs";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import { storage } from "../firebase.js";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const Editguide = () => {
  const navigate = useNavigate();
  const [guide, setGuide] = useState([]);
  const [editTitleActive, setEditTitleActive] = useState(false);
  const [editedStepIndex, setEditedStepIndex] = useState(null);
  const [newStepHtml, setNewStepHtml] = useState(null);
  const [addStepActive, setAddStepActive] = useState(false);
  const [stepImages, setStepImages] = useState([]);
  let guide_id = useParams();
  let _id = guide_id.id;
  let stepCount = 0;
  let globalIndex = 0;
  let validStepIndex = 0;
  let inputed_img;

  // uploading/pulling images
  const stepImagesRef = ref(storage, "/images/" + _id);

  const metadata = {
    contentType: "image/jpg",
  };

  const handleImageChange = (e, value) => {
    // console.log(e.target.files[0].name);
    if (e.target.files[0] === null) {
    } else {
      inputed_img = e.target.files[0];
      uploadImage(_id, value);
    }
  };

  function uploadImage(_id, index) {
    const imageRef = ref(
      storage,
      `${"images/" + _id + "/" + "!" + index + "!"}`
    );
    uploadBytes(imageRef, inputed_img, metadata).then((snapshot) => {});
  }
  // image handling end

  async function updatetitle(_id) {
    const newData = await document.getElementById("title-input").value;
    const update = await updateTitle(_id, newData);
    window.location.reload();
  }

  async function updatestep(_id, index) {
    const newData = await document.getElementById("editedStep").value;
    console.log(newData);
    const updatedStep = await updateStep(_id, index, newData);
    window.location.reload();
  }

  async function addNewStep(_id) {
    const newData = await document.getElementById("newStep-textarea").value;
    const addedStep = await addStep(_id, newData);
    window.location.reload();
  }

  function newstep(_id, index) {
    return (
      <div>
        <div className="flex mt-5">
          <p className="whitespace-nowrap font-bold">Step {index}:</p>
          <textarea
            id="newStep-textarea"
            className="grow p-2 border-2 border-gray-400 ml-2 min-h-[10rem]"
            maxLength={800}
          ></textarea>
        </div>
        <div className="flex grow justify-end mt-2">
          <button
            className="border-2 border-green-500 p-1.5 rounded-md flex text-green-500 hover:cursor-pointer"
            onClick={async () => {
              await addNewStep(_id);
            }}
          >
            Upload Step <PiUploadBold className="text-2xl ml-1" />
          </button>
          <input
            className="file:h-full file:rounded-md hover:cursor-pointer file:hover:cursor-pointer border-2 border-green-500 rounded-md file:mr-3 file:bg-white file:border-white text-green-500 file:text-green-500"
            id="file_input"
            type="file"
            onChange={(e) => {
              handleImageChange(e, globalIndex + 1);
            }}
          ></input>
        </div>
      </div>
    );
  }

  async function fetchGuide() {
    const fetchedGuide = await getGuide(_id);
    // console.log(fetchedGuide.guide);
    setGuide(fetchedGuide.guide);
  }

  useEffect(() => {
    fetchGuide(_id);
    listAll(stepImagesRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setStepImages((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  let steps = guide.steps;
  // console.log(steps);
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
                  className="text-2xl mt-2 hover:text-green-500 hover:cursor-pointer"
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
                  className="text-2xl mt-2 hover:text-green-500 hover:cursor-pointer"
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
          globalIndex = index;
          {
            /* console.log(step); */
          }
          if (!step.step) {
            return;
          }
          stepCount += 1;
          return (
            <div key={index} className="flex my-4">
              <p className="whitespace-nowrap font-bold">Step {stepCount}:</p>
              {editedStepIndex === index ? (
                <div className="flex flex-col grow">
                  <textarea
                    defaultValue={step.step}
                    id="editedStep"
                    className="min-h-[12rem] w-full grow border-2 border-gray-500 p-2 ml-2 whitespace-pre-line"
                  ></textarea>
                  <div className="flex grow justify-end mt-2">
                    <button
                      className="border-2 flex border-green-500 text-green-500 p-1.5 rounded-md hover:cursor-pointer"
                      onClick={async () => {
                        await updatestep(guide._id, index);
                      }}
                    >
                      Update Step <PiUploadBold className="text-2xl ml-1" />
                    </button>
                    <input
                      className="file:h-full w-[15rem] file:rounded-md hover:cursor-pointer file:hover:cursor-pointer border-2 border-green-500 rounded-md file:mr-2 file:bg-white file:border-white text-green-500 file:text-green-500"
                      id="file_input"
                      type="file"
                      onChange={(e) => {
                        handleImageChange(e, index);
                      }}
                    ></input>
                    <button
                      className="border-2 border-red text-red p-1.5 rounded-md flex hover:cursor-pointer"
                      onClick={async () => {
                        await removeStep(guide._id, index);
                        window.location.reload();
                      }}
                    >
                      Delete Step <BsTrash3 className="text-2xl ml-1" />
                    </button>
                  </div>
                </div>
              ) : (
                <p
                  className="ml-5 whitespace-pre-line grow hover:cursor-pointer"
                  onClick={async () => {
                    setEditedStepIndex(index);
                  }}
                >
                  {step.step}
                  {stepImages
                    ? stepImages.map((image, index1) => {
                        let imageIndex = image.split("!")[1];
                        if (imageIndex === index.toString()) {
                          return (
                            <a
                              className="mt-5 flex justify-center"
                              key={index1}
                            >
                              <img src={image} alt="Step Img" />
                            </a>
                          );
                        }
                      })
                    : null}
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
      <>{newStepHtml}</>
      <div className="flex pb-[1rem]">
        <p className="flex grow p-2 justify-end mt-2">
          <CiSquareInfo className="text-3xl mr-2 text-green-500" />
          <a className="mt-0.5">Click on step to edit text.</a>
        </p>
        <div className="flex grow justify-end mt-2">
          {!addStepActive && (
            <button
              className="border-2 border-green-500 p-1.5 flex text-green-500 mt-1 rounded-md hover:cursor-pointer"
              onClick={async () => {
                setNewStepHtml(newstep(guide._id, stepCount + 1));
                setAddStepActive(true);
              }}
            >
              Add Step <RiAddCircleFill className="mt-0.5 text-xl ml-1" />
            </button>
          )}

          <button
            className="flex border-2 border-green-500 p-1.5 text-green-500 rounded-md mt-1 hover:cursor-pointer"
            onClick={async () => {
              await publishGuide(_id);
              navigate("/Alerts");
              window.location.reload();
            }}
          >
            Publish <MdVisibility className="ml-1 text-2xl" />
          </button>
        </div>
      </div>
      <div className="flex grow justify-end pb-[10rem]">
        <button
          className="border-2 border-red text-red p-1.5 rounded-md flex hover:cursor-pointer"
          onClick={async () => {
            await deleteGuide(_id);
            alert("Guide deleted successfully.");
            navigate("/Alerts");
          }}
        >
          Delete Guide <TbAlertTriangleFilled className="text-2xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Editguide;
