import { faker } from "@faker-js/faker";
import { Avatar, Box, Button, Divider, IconButton } from "@mui/material";
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from "phosphor-react";
import React from "react";
import { ToggleSidebar } from "../redux/slices/app";
import { dispatch } from "../redux/store";

const Contact = () => {
  return (
    <div className="w-[320px] max-h-[100vh] ">
      <div className="flex flex-col h-full">
        {/* header */}
        <div className="shadow-md w-full bg-[#F8FAFF]">
          <div className="flex p-4 items-center justify-between space-x-2 ">
            <p className="font-semibold">Contact Info</p>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </div>
        </div>
        {/* body */}
        <div className="flex flex-col h-full relative flex-grow overflow-y-scroll px-3 py-5 space-y-6">
          <div className="flex items-center space-x-2">
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">{faker.name.fullName()}</p>
              <p className="font-normal">{"+91 729 2829 2992"}</p>
            </div>
          </div>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col space-y-1 items-center">
              <IconButton>
                <Phone />
              </IconButton>
              <p>Voice</p>
            </div>
            <div className="flex flex-col space-y-1 items-center">
              <IconButton>
                <VideoCamera />
              </IconButton>
              <p>Video</p>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col space-y-1">
            <p className="font-semibold">About</p>
            <p>Imagination is the limit</p>
          </div>
          <Divider />
          <div className="flex items-center justify-between">
            <p>Media, Links & Docs</p>
            <Button endIcon={<CaretRight />}>401</Button>
          </div>
          <div className="flex space-x-3 items-center">
            {[1, 2, 3].map((el) => (
              <div>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </div>
            ))}
          </div>
          <Divider />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Star size={25} />
              <p>Starred Messages</p>
            </div>
            <IconButton>
              <CaretRight />
            </IconButton>
          </div>
          <Divider />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell size={25} />
              <p>Mute Notifications</p>
            </div>
            <input
              className="mt-[0.3rem] mr-2 ml-1 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-secondary-lighter dark:bg-neutral-600 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-400 dark:after:bg-neutral-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] checked:bg-info-main dark:checked:bg-info-main checked:after:absolute checked:after:z-[2]  checked:after:ml-[0.9rem]  hover:cursor-pointer focus:before:scale-100 focus:after:absolute focus:after:z-[1] "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <Divider />
          <p>1 group in common</p>
          <div className="flex items-center space-x-2">
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <div className="flex flex-col space-y-1">
              <p>Coding Monk</p>
              <p>Owl, Parrot, Rabbit, You</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button startIcon={<Prohibit />} fullWidth variant="outlined">
              Block
            </Button>
            <Button startIcon={<Trash />} fullWidth variant="outlined">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
