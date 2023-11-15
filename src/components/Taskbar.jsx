import React, { useState } from "react";
import { HiDocumentText } from "react-icons/hi";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { BiGitPullRequest } from "react-icons/bi";
import { RiContactsBookFill } from "react-icons/ri";
import { MdFastfood, MdEditDocument } from "react-icons/md";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { testingProtectedRoute } from "../middleware/auth";
import { useNavigate } from "react-router-dom";

const Taskbar = ({ isActive, setIsActive, activeComp, setActiveComp }) => {
  const navigate = useNavigate();
  // if localstorage taskbar value = true, show full
  // if false, show small bar with icons

  if (isActive) {
    return (
      <aside className="flex flex-col bg-green-500 py-2 w-48 text-white fixed bottom-0 top-0 transition-all mt-0 min-h-screen h-full z-1">
        {isActive ? (
          <div className="flex">
            <RiCloseLine
              className="hover: cursor-pointer mt-4 ml-2"
              color="#fff"
              size={28}
              onClick={() => setIsActive(false)}
            />
            <p className="text-center ml-3 my-4">BulletinBoard</p>
          </div>
        ) : (
          <RiMenu3Line
            className="hover: cursor-pointer mt-2"
            color="#fff"
            size={24}
            onClick={() => setIsActive(true)}
          />
        )}

        {activeComp === "Ops Turnover" ? (
          <p
            className=" bg-stone-50 mx-0 mt-0 py-4 font-medium text-md border-white border-t-2 flex justify-center hover:cursor-pointer text-green-500"
            onClick={() => {
              navigate("/Turnover");
            }}
          >
            Ops Turnover <HiDocumentText className="ml-2 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 mt-0 py-4 font-medium text-md border-white border-t-2 flex justify-center hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Ops Turnover");
              navigate("/Turnover");
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
              navigate("/Alerts");
            }}
          >
            Common Alerts <TbAlertTriangleFilled className="ml-2.5 text-2xl" />
          </p>
        )}

        {/* {activeComp === "Polling Request" ? (
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
        )} */}

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
              navigate("/Contacts");
            }}
          >
            Contacts <RiContactsBookFill className="ml-2 text-2xl" />
          </p>
        )}
        {activeComp === "Workflows" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            Workflows <BiGitPullRequest className="ml-2 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Workflows");
            }}
          >
            Workflows <BiGitPullRequest className="ml-2 text-2xl" />
          </p>
        )}
        {activeComp === "DailyBulletin" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex border-b-2 justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            DailyBulletin <GoChecklist className="ml-2 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex border-b-2 justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("DailyBulletin");
              navigate("/Bulletin");
            }}
          >
            DailyBulletin <GoChecklist className="ml-2 text-2xl" />
          </p>
        )}
      </aside>
    );
  } else {
    return (
      <aside className="flex flex-col bg-green-500 py-0 w-12 text-white fixed transition-all mt-0 h-full top-0">
        <p className="text-white mb-3 mt-3 text-2xl">
          {isActive ? (
            <RiCloseLine
              className="hover: cursor-pointer mt-1 ml-3"
              color="#fff"
              size={28}
              onClick={() => setIsActive(false)}
            />
          ) : (
            <RiMenu3Line
              className="hover: cursor-pointer mt-2 ml-3"
              color="#fff"
              size={28}
              onClick={() => setIsActive(true)}
            />
          )}
        </p>
        {activeComp === "Ops Turnover" ? (
          <p
            className="mx-0 mt-1 py-4 font-medium text-md border-white border-t-2 flex justify-center bg-stone-50 hover:cursor-pointer text-green-500"
            onClick={() => {
              navigate("/Turnover");
            }}
          >
            <HiDocumentText className="ml-0.5 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 mt-1 py-4 font-medium text-md border-white border-t-2 flex justify-center hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Ops Turnover");
              navigate("/Turnover");
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
              navigate("/Alerts");
            }}
          >
            <TbAlertTriangleFilled className="ml-0.5 text-2xl" />
          </p>
        )}

        {/* {activeComp === "Polling Requests" ? (
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
        )} */}

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
              navigate("/Contacts");
            }}
          >
            <RiContactsBookFill className="ml-0.5 text-2xl" />
          </p>
        )}

        {activeComp === "Workflows" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            <BiGitPullRequest className="ml-0.5 text-2xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("Workflows");
            }}
          >
            <BiGitPullRequest className="ml-0.5 text-2xl" />
          </p>
        )}
        {activeComp === "DailyBulletin" ? (
          <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex border-b-2 justify-center  bg-stone-50 hover:cursor-pointer text-green-500 active:bg-white">
            <GoChecklist className="ml-0.5 text-3xl" />
          </p>
        ) : (
          <p
            className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex border-b-2 justify-center  hover:bg-stone-50 cursor-pointer hover:text-green-500 active:bg-white"
            onClick={() => {
              setActiveComp("DailyBulletin");
              navigate("/Bulletin");
            }}
          >
            <GoChecklist className="ml-0.5 text-3xl" />
          </p>
        )}
      </aside>
    );
  }
};

export default Taskbar;
