import React, { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  async function fetchContacts() {
    // const contacts = await getContacts()
  }

  useEffect(() => {
    // fetchContacts
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex grow shadow-md ml-[13rem] mr-[10rem] mt-[2rem] p-8">
        <div className="flex border-b-2 border-green-500 grow pb-2">
          <h1 className="font-bold text-lg flex">SEG/Vendor Contacts</h1>
          <div className="flex grow justify-end">
            <AiOutlineEdit className="text-2xl mt-1 text-black hover:cursor-pointer hover:text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
