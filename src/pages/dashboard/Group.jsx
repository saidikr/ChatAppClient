import { Divider, IconButton } from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import React, { useState } from "react";
import ChatElement from "../../components/ChatElement";
import { ChatList } from "../../data";
import CreateGroup from "../../sections/main/CreateGroup";

const Group = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <div className="flex w-full">
        {/* Left */}
        <div className="h-[100vh] bg-[#F8FAFF] w-[320px] shadow">
          <div className="flex flex-col space-y-4 p-3 max-h-[100vh]">
            <div className="flex flex-col">
              <h1 className="font-semibold text-3xl">Groups</h1>
            </div>
            <div className="w-full ml-1 my-3">
              <div className="relative  rounded-xl overflow-hidden my-2 h-fit py-1 mr-2 w-[100%]">
                <div className="absolute left-2 right-2 flex my-2 items-center justify-start">
                  <MagnifyingGlass color="#709CE6" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-8 py-1 w-fit focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-blue-700 underline hover:cursor-pointer">
                Create New Group
              </p>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Plus color="#1D4ED8" />
              </IconButton>
            </div>
            <Divider />
            <div className="flex-grow overflow-y-scroll no-scrollbar h-full">
              <div className="flex flex-col relative justify-between space-y-2">
                <p className="m-2 text-[#676667]">Pinned</p>
                {ChatList.filter((el) => el.pinned).map((el) => (
                  <ChatElement {...el} />
                ))}
              </div>
              <div className="flex flex-col relative justify-between space-y-2">
                <p className="m-2 text-[#676767]">All Chats</p>
                {ChatList.filter((el) => !el.pinned).map((el) => (
                  <ChatElement {...el} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        {/* // TODO => Reuse Conversation Components */}
      </div>
      {openDialog && (
        <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Group;
