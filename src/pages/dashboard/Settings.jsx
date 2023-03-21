import { Avatar, Divider, IconButton } from "@mui/material";
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from "phosphor-react";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { Shortcuts } from "../../sections/settings/Shortcuts";

const Settings = () => {
  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <div className="flex w-full">
      {/* left panel */}
      <div className="overflow-y-scroll h-[100vh] w-[320px] bg-[#F8FAFF] no-scrollbar shadow-lg">
        <div className="flex flex-col p-4 space-y-8">
          {/* header*/}
          <div className="flex items-center space-x-6">
            <IconButton>
              <CaretLeft size={24} color={"#4B4B4B"} />
            </IconButton>
            <h1 className="text-2xl font-semibold">Setting</h1>
          </div>
          {/* profile*/}
          <div className="flex space-x-6 pl-3 ">
            <Avatar
              sx={{ width: 56, height: 56 }}
              src={faker.image.avatar()}
              alt={faker.name.fullName()}
            />
            <div className="flex flex-col space-y-2">
              <p className="font-medium">{faker.name.firstName()}</p>
              <p>{faker.random.word()}</p>
            </div>
          </div>
          {/* list of options*/}
          <div className="flex flex-col space-y-7">
            {list.map(({ key, icon, title, onclick }) => (
              <div
                key={key}
                onClick={onclick}
                className="flex flex-col space-y-4 cursor-pointer"
              >
                <div className="flex items-center pl-3 space-x-4">
                  {icon}
                  <p>{title}</p>
                </div>
                {key !== 7 && <Divider />}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* right panel */}
      {openShortcuts && (
        <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />
      )}
    </div>
  );
};

export default Settings;
