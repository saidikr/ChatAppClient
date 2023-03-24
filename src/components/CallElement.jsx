import { faker } from "@faker-js/faker";
import { Avatar, IconButton } from "@mui/material";
import { ArrowDownLeft, ArrowDownRight, ArrowUpRight, Phone, VideoCamera } from "phosphor-react";
import React from "react";

const CallLogElement = ({ id,online, incoming, missed,img,name }) => {
  return (
    <div className="hover:bg-gray-100 w-[100%] h-fit p-2 rounded-md bg-white flex">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-1">
          {online ? (
            <IconButton>
              <Avatar src={img} alt={name} />
              <div className="text-[#44b700] bg-[#44b700] shadow-lg absolute bottom-2 right-2 w-[10px] h-[10px] rounded-full transition-all ease-in-out border"></div>
            </IconButton>
          ) : (
            <IconButton>
              <Avatar src={img} alt={name} />
            </IconButton>
          )}
          <div className="flex flex-col">
            <p className="font-semibold">{name}</p>
            {/* <p className="text-gray-600">{msg}</p> */}
            <div className="flex items-center space-x-2">
              {incoming ? (
                <ArrowDownLeft color={missed ? "red" : "green"} />
              ) : (
                <ArrowUpRight color={missed ? "red" : "green"} />
              )}
              <p className="text-gray-600">Yesterday 21:24</p>
            </div>
          </div>
        </div>
        <IconButton>
          <Phone color="green" />
        </IconButton>
      </div>
    </div>
  );
};

const CallElement = ({online,img,name}) => {
    return (
      <div className="hover:bg-gray-100 w-[100%] h-fit p-2 rounded-md bg-white flex">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-1">
            {online ? (
              <IconButton>
                <Avatar src={img} alt={name} />
                <div className="text-[#44b700] bg-[#44b700] shadow-lg absolute bottom-2 right-2 w-[10px] h-[10px] rounded-full transition-all ease-in-out border"></div>
              </IconButton>
            ) : (
              <IconButton>
                <Avatar src={img} alt={name} />
              </IconButton>
            )}
            <div className="flex flex-col">
              <p className="font-semibold">{name}</p>
              {/* <p className="text-gray-600">{msg}</p> */}
            </div>
          </div>
          <div className="flex items-center" >
            <IconButton>
              <Phone color="green" />
            </IconButton>
            <IconButton>
              <VideoCamera color="green" />
            </IconButton>
          </div>
        </div>
      </div>
    );
};

export { CallLogElement, CallElement };
