import { Fab, IconButton, Tooltip } from "@mui/material";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import React, { useState } from "react";

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 82,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 152,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 222,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 292,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 362,
    title: "Contact",
  },
];

const Footer = () => {
  const [openPicker, setOpenPicker] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  return (
    <div className="py-2 pr-5 w-full bg-[#F8FAFF] shadow flex">
      <div className="relative flex items-center flex-grow">
        <div className="flex flex-col w-max">
          <div className={openAction ? "flex flex-col relative" : "hidden"}>
            {Actions.map((el) => (
              <Tooltip title={el.title} placement="right">
                <Fab
                  sx={{
                    position: "absolute",
                    top: -el.y,
                    left: 30,
                    backgroundColor: el.color,
                  }}
                >
                  {el.icon}
                </Fab>
              </Tooltip>
            ))}
          </div>
          <IconButton
            onClick={() => {
              setOpenAction((prev) => !prev);
            }}
            className="absolute left-10"
          >
            <LinkSimple />
          </IconButton>
        </div>
        <input
          type="text"
          className="pl-11 rounded-xl py-[12px] w-full bg-gray-200 focus:outline-none"
          placeholder="write a message..."
        />
        <div className="flex flex-col">
          <div
            className={
              openPicker ? "z-10 fixed bottom-[75px] right-[100px]" : "hidden"
            }
          >
            <Picker data={data} theme="light" />
          </div>
          <IconButton
            onClick={() => {
              setOpenPicker((prev) => !prev);
            }}
            className="absolute right-10"
          >
            <Smiley />
          </IconButton>
        </div>
      </div>
      <div className="h-[48px] w-[48px] -ml-6 rounded-xl flex items-center justify-center bg-primary-main">
        <IconButton>
          <PaperPlaneTilt color="#fff" />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
