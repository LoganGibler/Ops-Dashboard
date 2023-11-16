import React, { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { getContacts, updateContacts } from "../api/content";
import { FiUpload } from "react-icons/fi";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [editContactsHtml, setEditContactHtml] = useState(null);
  const [editActive, setEditActive] = useState(false);

  async function fetchContacts() {
    const contacts = await getContacts();
    setContacts(contacts.data.contactsData[0]);
  }

  async function updatedContacts() {
    const newData = await document.getElementById("contacts").value;
    const updatedData = await updateContacts(newData);
    window.location.reload();
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  function renderEditContacts() {
    try {
      return (
        <textarea
          className="border-2 border-gray-200 min-h-[40rem] p-1 mt-3"
          id="contacts"
          defaultValue={contacts.contacts}
        ></textarea>
      );
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col grow shadow-md ml-[13rem] mr-[10rem] mt-[2rem] p-8">
        <div className="flex border-b-2 border-green-500 grow pb-2">
          <h1 className="font-bold text-xl flex">SEG/Vendor Contacts</h1>
          <div className="flex grow justify-end">
            {editActive ? (
              <FiUpload
                className="text-2xl mt-1 text-black hover:cursor-pointer hover:text-green-500"
                onClick={async () => {
                  await updatedContacts();
                }}
              />
            ) : (
              <AiOutlineEdit
                className="text-3xl mt-1 text-black hover:cursor-pointer hover:text-green-500"
                onClick={() => {
                  setEditActive(true);
                  setEditContactHtml(renderEditContacts);
                }}
              />
            )}
          </div>
        </div>
        {editContactsHtml}
        {editActive ? (
          <></>
        ) : (
          <p className="grow mt-2 whitespace-pre-line">{contacts.contacts}</p>
        )}
        <p className="mt-5 flex">
          Last updated by
          <a className="font-bold ml-1">{contacts.username}</a> &nbsp;on
          <a className="font-bold ml-1">{contacts.date}</a>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
