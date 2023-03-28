import React from "react";
import { Avatar, Fade, Menu } from "@mui/material";

import { faker } from "@faker-js/faker";

import { Profile_Menu } from "../../data";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const getMenuPath = (index) => {
    switch (index) {
      case 0:
        return "/profile";
      case 1:
        return "/setting";
      case 2:
        // TODO => Update token & set isAuthenticated to false
        return "/auth/login";
      default:
        break;
    }
  };
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
            {Profile_Menu.map((el,idx) => (
              <div
                className="flex justify-center hover:bg-secondary-lighter hover:rounded-lg p-1"
                onClick={() => {
                  handleClick();
                }}
              >
                <div
                  onClick={() => {
                    navigate(getMenuPath(idx));
                  }}
                  className="w-[100px] flex justify-between items-center px-2 hover:cursor-pointer "
                >
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
