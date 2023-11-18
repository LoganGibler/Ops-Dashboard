import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { createGuide } from "../api/alertGuides";
import { useNavigate } from "react-router-dom";

const CreateGuide = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [origin, setOrigin] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex justify-center">
      <form
        type="submit"
        className="flex flex-col p-4 shadow-md mt-20 grow ml-[20rem] mr-[20rem] max-w-[55rem] border-t-2 border-green-500"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const createdGuide = await createGuide(title, origin, description);
            if (createdGuide) {
              navigate("/Alerts");
              window.location.reload();
            }
          } catch (error) {
            throw error;
          }
        }}
      >
        <label className="font-bold text-lg tracking-wide ml-1">
          Guide Title
        </label>
        <input
          placeholder="Title here...."
          maxLength={300}
          className="border-2 border-gray-300 p-1 rounded-md mt-1 indent-1"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <label className="font-bold text-lg tracking-wide ml-1 mt-2">
          Alert Origin
        </label>
        <input
          placeholder="Azure, IR360, Dynatrace, Stonebranch..."
          className="border-2 border-gray-300 p-1 rounded-md indent-1 mt-1"
          maxLength={100}
          onChange={(e) => {
            setOrigin(e.target.value);
          }}
        ></input>
        <label className="font-bold text-lg tracking-wide ml-1 mt-2">
          Description
        </label>
        <textarea
          placeholder="Optional. When does this alert occur? What situation would cause you to do this task? etc."
          maxLength={1000}
          className="border-2 border-gray-300 p-2 rounded-md min-h-[10rem] mt-1"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <div className="mt-2.5 flex grow justify-end">
          <button className="border-[1px] border-green-500 text-green-500 p-1 rounded-md flex text-base justify-end">
            Submit <MdCloudUpload className="ml-1.5 mt-0 text-2xl" />
          </button>
        </div>
        <p className="text-center text-sm mt-5">
          Guides created here will be hidden until published by the author.
        </p>
      </form>
    </div>
  );
};

export default CreateGuide;
