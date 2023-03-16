import { faker } from "@faker-js/faker";
import { Avatar, Divider, IconButton } from "@mui/material";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import React from "react";
import { ToggleSidebar } from "../../redux/slices/app";
import { dispatch } from "../../redux/store";

const Header = () => {
  return (
    <div className="w-full bg-[#F8FAFF] shadow p-2">
      <div className="flex items-center justify-between w-full h-full">
        <div
          className="flex"
          onClick={() => {
            dispatch(ToggleSidebar());
          }}
        >
          <IconButton>
            <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
            <div className="text-[#44b700] bg-[#44b700] shadow-lg absolute bottom-2 right-2 w-[10px] h-[10px] rounded-full transition-all ease-in-out border"></div>
          </IconButton>
          <div className="ml-2 flex flex-col justify-center">
            <h3 className="font-semibold">{faker.name.fullName()}</h3>
            <p className="text-gray-600">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
