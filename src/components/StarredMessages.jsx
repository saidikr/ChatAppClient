import { faker } from "@faker-js/faker";
import { IconButton, Tab, Tabs } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React, { useState } from "react";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { UpdateSidebarType } from "../redux/slices/app";
import { dispatch } from "../redux/store";
import Message from "./Conversation/Message";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";

function StarredMessages() {
  return (
    <div className="w-[320px] max-h-[100vh] ">
      <div className="flex flex-col h-full">
        <div className="shadow-md w-full bg-[#F8FAFF]">
          <div className="flex p-4 items-center space-x-2 ">
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <p className="font-semibold">Starred Messages</p>
          </div>
        </div>
        <div className="flex flex-col h-full relative flex-grow overflow-y-scroll px-3 py-5 space-y-6">
          <Message  /> 
        </div>
      </div>
    </div>
  );
}

export default StarredMessages;
