import React, { useState } from "react";
import { HiDocumentText } from "react-icons/hi";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { BiGitPullRequest } from "react-icons/bi";
import { RiContactsBookFill } from "react-icons/ri";
import { MdFastfood, MdEditDocument } from "react-icons/md";

const Taskbar = ({ isActive, activeComp, setActiveComp }) => {
  // if localstorage taskbar value = true, show full
  // if false, show small bar with icons

  if (isActive) {
    return (
      <aside className="flex flex-col bg-green-500 py-2 w-48 text-white absolute bottom-0 top-12 transition-all mt-2">
        {activeComp === "Ops Turnover" ? (
          <p className=" bg-stone-50 mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center hover:cursor-pointer text-green-500">
            Ops Turnover <HiDocumentText className="ml-2 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Ops Turnover");
            }}
          >
            Ops Turnover <HiDocumentText className="ml-2 text-2xl" />
          </p>
        )}

        {activeComp === "Common Alerts" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            Common Alerts <TbAlertTriangleFilled className="ml-2.5 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Common Alerts");
            }}
          >
            Common Alerts <TbAlertTriangleFilled className="ml-2.5 text-2xl" />
          </p>
        )}

        {activeComp === "Polling Request" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            Polling Requests <MdFastfood className="ml-2 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Polling Request");
            }}
          >
            Polling Requests <MdFastfood className="ml-2 text-2xl" />
          </p>
        )}

        {activeComp === "Documentation" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            Documentation <MdEditDocument className="ml-2 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Documentation");
            }}
          >
            Documentation <MdEditDocument className="ml-2 text-2xl" />
          </p>
        )}
        {activeComp === "Contacts" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            Contacts <RiContactsBookFill className="ml-2 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Contacts");
            }}
          >
            Contacts <RiContactsBookFill className="ml-2 text-2xl" />
          </p>
        )}
        {activeComp === "Workflows" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex border-b-2 justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            Workflows <BiGitPullRequest className="ml-2 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex border-b-2 justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Workflows");
            }}
          >
            Workflows <BiGitPullRequest className="ml-2 text-2xl" />
          </p>
        )}
      </aside>
    );
  } else {
    return (
      <aside className="flex flex-col bg-green-500 py-2 w-12 text-white absolute bottom-0 top-12 transition-all mt-2">
        {activeComp === "Ops Turnover" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center bg-stone-50 hover:cursor-pointer text-green-500">
            <HiDocumentText className="ml-0.5 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Ops Turnover");
            }}
          >
            <HiDocumentText className="ml-0.5 text-2xl" />
          </p>
        )}

        {activeComp === "Common Alerts" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            <TbAlertTriangleFilled className="ml-0.5 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Common Alerts");
            }}
          >
            <TbAlertTriangleFilled className="ml-0.5 text-2xl" />
          </p>
        )}

        {activeComp === "Polling Requests" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            <MdFastfood className="ml-0.5 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Polling Requests");
            }}
          >
            <MdFastfood className="ml-0.5 text-2xl" />
          </p>
        )}

        {activeComp === "Documentation" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            <MdEditDocument className="ml-0.5 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Documentation");
            }}
          >
            <MdEditDocument className="ml-0.5 text-2xl" />
          </p>
        )}

        {activeComp === "Contacts" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            <RiContactsBookFill className="ml-0.5 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Contacts");
            }}
          >
            <RiContactsBookFill className="ml-0.5 text-2xl" />
          </p>
        )}

        {activeComp === "Workflows" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex border-b-2 justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            <BiGitPullRequest className="ml-0.5 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex border-b-2 justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Workflows");
            }}
          >
            <BiGitPullRequest className="ml-0.5 text-2xl" />
          </p>
        )}
      </aside>
    );
  }
};

export default Taskbar;
