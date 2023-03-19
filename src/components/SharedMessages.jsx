import { faker } from "@faker-js/faker";
import { IconButton, Tab, Tabs } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React, { useState } from "react";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { UpdateSidebarType } from "../redux/slices/app";
import { dispatch } from "../redux/store";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";

function SharedMessages() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            <p className="font-semibold">Shared Messages</p>
          </div>
        </div>
        <Tabs
          sx={{ px: 2, mt: 1 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        <div className="flex flex-col h-full relative flex-grow overflow-y-scroll px-3 py-5 space-y-6">
          {(() => {
            switch (value) {
              case 0:
                return (
                  <div className={`grid grid-cols-3 gap-4`}>
                    {[0, 1, 2, 3, 4, 5, 6].map((el) => (
                      <div>
                        <img
                          className="rounded-xl"
                          src={faker.image.avatar()}
                          alt={faker.name.fullName()}
                        />
                      </div>
                    ))}
                  </div>
                );
              case 1:
                return SHARED_LINKS.map((el) => <LinkMsg el={el} />);
              case 2:
                return SHARED_DOCS.map((el) => <DocMsg el={el} />);
              default:
                break;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default SharedMessages;
