import { Button, Divider, IconButton } from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";


const Chats = () => {
  return (
    <div className="w-[320px] bg-[#F8FAFF] shadow-sm">
      <div className="flex flex-col relative p-5 space-y-5 h-[100vh]">
        <div className="flex justify-between">
          <p className="ml-3 text-xl font-semibold">Chats</p>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </div>
        <div className="w-full ml-1 my-3">
          <div className="relative  rounded-xl overflow-hidden h-fit mr-2 w-[100%]">
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
        <div className="space-y-1">
          <div className="flex items-center justify-start space-x-1">
            <ArchiveBox size={25} />
            <Button>Archived</Button>
          </div>
          <Divider />
        </div>
        <div className="flex-grow overflow-y-scroll no-scrollbar h-full">
          <div className="flex flex-col relative justify-between space-y-2">
            <p className="m-2 text-[#676767]">Pinned</p>
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
  );
};

export default Chats;
