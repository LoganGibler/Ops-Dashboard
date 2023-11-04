import React, { useState, useEffect } from "react";
import {
  addNote,
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
import { FiUpload } from "react-icons/fi";
import { MdAddCircleOutline } from "react-icons/md";
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based.
const day = currentDate.getDate().toString().padStart(2, "0");
const hours = currentDate.getHours().toString().padStart(2, "0");
const minutes = currentDate.getMinutes().toString().padStart(2, "0");
const formattedDate = `${month}-${day}-${year} ${hours}:${minutes}`;

const Bulletin = () => {
  const [notes, setNotes] = useState([]);
  const [editNoteHtml, setEditNoteHtml] = useState(null);
  const [editNoteActive, setEditNoteActive] = useState(false);
  const [activeStepIndex, setActiveStepindex] = useState("");
  const [activeAddNote, setActiveAddNote] = useState(false);
  const [addNoteHtml, setAddNoteHtml] = useState(null);

  async function getNewData(noteID) {
    const fetchNewData = document.getElementById("edit-note-textarea").value;
    await updateNote(fetchNewData, noteID);
    window.location.reload();
  }

  function renderEditNote(note) {
    try {
      return (
        <div>
          <textarea
            id="edit-note-textarea"
            className="p-3 whitespace-pre-line w-full min-h-[200px] bg-white border-2"
            defaultValue={note}
          ></textarea>
        </div>
      );
    } catch (error) {
      throw error;
    }
  }

  function renderNewNote() {
    let user = localStorage.getItem("username");
    user = JSON.parse(user);

    async function fetchNewNote() {
      const newData = document.getElementById("add-note-textarea").value;
      const newNote = await addNote(newData);
    }

    try {
      return (
        <div className="flex flex-col border-t-2 border-green-500 p-3 shadow-md mt-2">
          <textarea
            id="add-note-textarea"
            className="p-3 whitespace-pre-line w-full min-h-[200px] bg-white border-2"
            placeholder="Enter note here..."
          ></textarea>
          <div className="flex mt-3">
            <div className="flex">
              <p className="font-bold">{formattedDate}</p>
              <p>&nbsp; - &nbsp;{user}</p>
            </div>
            <p className="flex justify-end grow">
              <FiUpload
                className="ml-0 mr-1 mt-1 text-2xl text-black hover:cursor-pointer hover:text-green-500"
                onClick={async () => {
                  await fetchNewNote();
                  window.location.reload();
                }}
              />
            </p>
          </div>
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
      <div className="flex flex-col grow ml-48 mr-24 px-5 my-4">
        {notes.length
          ? notes.map((note, index) => {
              return (
                <div
                  className="bg-white shadow-md my-4 py-3 px-5 border-t-2 border-green-500"
                  key={index}
                >
                  {activeStepIndex === index ? (
                    editNoteHtml
                  ) : (
                    <p className="whitespace-pre-wrap break-words">
                      {note.note}
                    </p>
                  )}
                  <div className="flex mt-3">
                    <p className="font-bold">{note.date}</p>
                    {note.completed ? (
                      <p className="">
                        &nbsp; - &nbsp;{JSON.parse(note.username)} &nbsp;
                        (Completed)
                      </p>
                    ) : (
                      <p className="">
                        {" "}
                        &nbsp; - &nbsp;{JSON.parse(note.username)}
                      </p>
                    )}

                    <div className="flex grow justify-end">
                      {activeStepIndex !== index && (
                        <AiOutlineEdit
                          className="ml-5 mt-1 text-2xl text-black hover:cursor-pointer hover:text-green-500"
                          onClick={async () => {
                            setEditNoteActive(true);
                            setActiveStepindex(index);
                            setEditNoteHtml(
                              renderEditNote(note.note, note._id)
                            );
                          }}
                        />
                      )}

                      {activeStepIndex !== index && (
                        <div>
                          {note.completed ? (
                            <GrReturn
                              className="ml-10 mt-1 text-xl text-black hover:cursor-pointer hover:text-green-500"
                              onClick={async () => {
                                await uncompleteNote(note._id);
                                window.location.reload();
                              }}
                            />
                          ) : (
                            <BsCheck2Circle
                              className="ml-10 mt-1 text-2xl text-black font-bold hover:cursor-pointer hover:text-green-500"
                              onClick={async () => {
                                await completeNote(note._id);
                                window.location.reload();
                              }}
                            />
                          )}
                        </div>
                      )}

                      {activeStepIndex !== index ? (
                        <RiDeleteBinLine
                          className="ml-10 mt-1 text-2xl text-black hover:cursor-pointer hover:text-red"
                          onClick={async () => {
                            await deleteNote(note._id);
                            window.location.reload();
                          }}
                        />
                      ) : null}

                      {/* can u grab elementID value out of textbox here? probably.  */}
                      {activeStepIndex === index ? (
                        <p>
                          <FiUpload
                            className="ml-10 mt-1 text-2xl text-black hover:cursor-pointer hover:text-green-500"
                            onClick={async () => {
                              await getNewData(note._id);
                            }}
                          />
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
        {activeAddNote && addNoteHtml}
        {!activeAddNote && (
          <div>
            <button
              className="flex mt-2 text-green-500 bg-white border-[1px] border-green-500 p-2 rounded-md hover:cursor-pointer"
              onClick={() => {
                setActiveAddNote(true);
                setAddNoteHtml(renderNewNote());
              }}
            >
              Add Note &nbsp;
              <MdAddCircleOutline className="ml-0 mt-0.5 text-xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bulletin;
