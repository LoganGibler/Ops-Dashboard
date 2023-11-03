import React, { useState, useEffect } from "react";
import {
  completeNote,
  deleteNote,
  getBulletin,
  uncompleteNote,
  updateNote,
} from "../api/content";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrReturn } from "react-icons/gr";

const Bulletin = () => {
  const [notes, setNotes] = useState([]);
  const [editNoteHtml, setEditNoteHtml] = useState(null);
  const [editNoteActive, setEditNoteActive] = useState(false);
  const [activeStepIndex, setActiveStepindex] = useState("");

  function renderEditNote(note, noteID, index) {
    try {
      // put this down, if activeStepindex === index, render the step. Shouldnt even need editNoteActive.
      async function getNewData() {
        const fetchNewData = document.getElementById("edit-note-textarea")
          .value;
        await updateNote(fetchNewData, noteID);
        window.location.reload();
      }

      return (
        <div>
          <textarea
            id="edit-note-textarea"
            className="p-3 whitespace-pre-line"
            defaultValue={note}
          ></textarea>
        </div>
      );
    } catch (error) {
      throw error;
    }
  }

  async function fetchBulletin() {
    const notes = await getBulletin();
    setNotes(notes.data.bulletinBoard);
  }

  useEffect(() => {
    fetchBulletin();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col grow ml-48 mr-24 p-5 my-10">
        {notes.length
          ? notes.map((note, index) => {
              console.log(note);

              return (
                <div
                  className="bg-white shadow-md my-4 py-3 px-5 border-t-2 border-green-500"
                  key={index}
                >
                  {editNoteActive && activeStepIndex === index ? (
                    editNoteHtml
                  ) : (
                    <p className="whitespace-pre-line">{note.note}</p>
                  )}

                  <div className="flex mt-3">
                    <p className="font-bold">{note.date}</p>
                    {note.completed ? (
                      <p className="">
                        &nbsp; - &nbsp;{note.username} &nbsp; (Completed)
                      </p>
                    ) : (
                      <p className=""> &nbsp; - &nbsp;{note.username}</p>
                    )}

                    <div className="flex grow justify-end">
                      <AiOutlineEdit
                        className="ml-5 mt-1 text-xl text-black hover:cursor-pointer hover:text-green-500"
                        onClick={async () => {
                          setEditNoteActive(true);
                          setActiveStepindex(index);
                          setEditNoteHtml(renderEditNote(note.note, note._id));
                        }}
                      />

                      {note.completed ? (
                        <GrReturn
                          className="ml-10 mt-1 text-lg text-black hover:cursor-pointer hover:text-green-500"
                          onClick={async () => {
                            await uncompleteNote(note._id);
                            window.location.reload();
                          }}
                        />
                      ) : (
                        <BsCheck2Circle
                          className="ml-10 mt-1 text-lg text-black font-bold hover:cursor-pointer hover:text-green-500"
                          onClick={async () => {
                            await completeNote(note._id);
                            window.location.reload();
                          }}
                        />
                      )}

                      <RiDeleteBinLine
                        className="ml-10 mt-1 text-lg text-black hover:cursor-pointer hover:text-red"
                        onClick={async () => {
                          await deleteNote(note._id);
                          // window.location.reload();
                        }}
                      />
                      {/* can u grab elementID value out of textbox here? probably.  */}
                      {activeStepIndex === index ? <p>Update</p> : null}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Bulletin;
