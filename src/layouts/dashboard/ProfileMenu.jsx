import React from "react";
import { Avatar, Box, Fade, Menu, MenuItem, Stack } from "@mui/material";

import { faker } from "@faker-js/faker";

import { Profile_Menu } from "../../data";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar
        id="profile-positioned-button"
        aria-controls={openMenu ? "profile-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        alt={faker.name.fullName()}
        src={faker.image.avatar()}
        onClick={handleClick}
      />
      <Menu
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        TransitionComponent={Fade}
        id="profile-positioned-menu"
        aria-labelledby="profile-positioned-button"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="m-4">
          <div className="flex flex-col space-y-2">
            {Profile_Menu.map((el) => (
              <div
                className="flex justify-center hover:bg-secondary-lighter hover:rounded-lg p-1"
                onClick={handleClose}
              >
                <div className="w-[100px] flex justify-between items-center px-2">
                  <span>{el.title}</span>
                  {el.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Menu>
    </>
  );
};

export default ProfileMenu;
