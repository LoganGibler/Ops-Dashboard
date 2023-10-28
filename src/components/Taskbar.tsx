import { HiDocumentText } from "react-icons/hi";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { BiGitPullRequest } from "react-icons/bi";
import { RiContactsBookFill } from "react-icons/ri";
import { MdFastfood, MdEditDocument } from "react-icons/md";

const Taskbar = () => {
  // if localstorage taskbar value = true, show full
  // if false, show small bar with icons
  let taskbarStatus = true;
  if (taskbarStatus) {
    return (
      <aside className="flex flex-col bg-indigo-500 py-1 w-48 text-white absolute bottom-0 top-16">
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          Ops Turnover <HiDocumentText className="ml-2 text-2xl" />
        </p>
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          Common Alerts <TbAlertTriangleFilled className="ml-2.5 text-2xl" />
        </p>
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          Polling Requests <MdFastfood className="ml-2 text-2xl" />
        </p>
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          Documentation <MdEditDocument className="ml-2 text-2xl" />
        </p>
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          Contacts <RiContactsBookFill className="ml-2 text-2xl" />
        </p>
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex border-b-2 justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          Workflows <BiGitPullRequest className="ml-2 text-2xl" />
        </p>
      </aside>
    );
  } else {
    return (
      <aside className="flex flex-col bg-indigo-500 py-3 w-12 text-white absolute bottom-0 top-14">
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          <HiDocumentText className="ml-0.5 text-2xl" />
        </p>
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          <TbAlertTriangleFilled className="ml-0.5 text-2xl" />
        </p>
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          <MdFastfood className="ml-0.5 text-2xl" />
        </p>
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          <MdEditDocument className="ml-0.5 text-2xl text-white" />
        </p>
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          <RiContactsBookFill className="ml-0.5 text-2xl" />
        </p>
        <p className="mx-0 my-0 py-4 font-medium text-md border-white border-t-2 flex border-b-2 justify-center  hover:bg-stone-50 cursor-pointer hover:text-indigo-500 active:bg-white">
          <BiGitPullRequest className="ml-0.5 text-2xl" />
        </p>
      </aside>
    );
  }
};

export default Taskbar;
