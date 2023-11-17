import React, { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import {
  getContacts,
  getWorkflows,
  updateContacts,
  updateWorkflows,
} from "../api/content";
import { FiUpload } from "react-icons/fi";

const Workflows = () => {
  const [workflowNotes, setWorkflowNotes] = useState("");
  const [editWorkflowsActive, setEditWorkflowsActive] = useState(false);
  const [workflowHtml, setWorkflowHtml] = useState(null);

  async function fetchWorkflowNotes() {
    const workflowData = await getWorkflows();
    setWorkflowNotes(workflowData.workflows);
  }

  useEffect(() => {
    fetchWorkflowNotes();
  }, []);

  async function updateWorkflowData() {
    const update = document.getElementById("workflow-data").value;
    const updatedWorkflow = await updateWorkflows(update);
    if (updatedWorkflow) {
      window.location.reload();
    }
  }

  function renderEditWorkflow() {
    return (
      <textarea
        id="workflow-data"
        className="border-2 border-gray-500 p-2 mt-4 min-h-[40rem]"
        defaultValue={workflowNotes.workflows}
      ></textarea>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col grow shadow-md ml-[13rem] mr-[12rem] mt-10 p-5">
        <div className="flex grow border-b-2 border-green-500 pb-2 pl-1">
          <h1 className="font-bold text-xl">Scheduling & Workflows</h1>
          <div className="flex justify-end grow">
            {editWorkflowsActive ? (
              <FiUpload
                className="text-2xl hover:text-green-500 hover:cursor-pointer"
                onClick={async () => {
                  setEditWorkflowsActive(false);
                  await updateWorkflowData();
                }}
              />
            ) : (
              <AiOutlineEdit
                className="text-3xl hover:text-green-500 hover:cursor-pointer"
                onClick={async () => {
                  setEditWorkflowsActive(true);
                  setWorkflowHtml(renderEditWorkflow());
                }}
              />
            )}
          </div>
        </div>
        {!editWorkflowsActive && (
          <p className="whitespace-pre-line mt-3 p-1">
            {workflowNotes.workflows}
          </p>
        )}
        {workflowHtml}
        <p className="mt-3 p-1">
          Last updated by <a className="font-bold">{workflowNotes.username}</a>{" "}
          on <a className="font-bold">{workflowNotes.date}</a>
        </p>
      </div>
    </div>
  );
};

export default Workflows;
