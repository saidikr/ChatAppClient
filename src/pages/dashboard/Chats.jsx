import { Avatar, Button, Divider, IconButton, Badge } from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { faker } from "@faker-js/faker";
import React from "react";
import { ChatList } from "../../data";

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  return (
    <div className="hover:bg-gray-100 w-[100%] h-fit p-2 rounded-md bg-white flex">
      <div className="relative">
        {online ? (
          <IconButton>
            <Avatar src={faker.image.avatar()} />
            <div className="text-[#44b700] bg-[#44b700] shadow-lg absolute bottom-2 right-2 w-[10px] h-[10px] rounded-full transition-all ease-in-out border"></div>
          </IconButton>
        ) : (
          <IconButton>
            <Avatar src={faker.image.avatar()} />
          </IconButton>
        )}
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600">{msg}</p>
      </div>
      <div className="flex flex-col space-y-4 items-center ml-auto mr-2">
        <p className="font-semibold">{time}</p>
        <Badge color="primary" badgeContent={unread}></Badge>
      </div>
    </div>
  );
};
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
