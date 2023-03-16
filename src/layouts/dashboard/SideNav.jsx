import { Divider, IconButton } from "@mui/material";
import React from "react";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Nav_Setting } from "../../data";
import ProfileMenu from "./ProfileMenu";

export const SideNav = ({ darkMode, setDarkMode }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="h-[100vh] w-[100px] bg-[#F0F4FA] shadow-lg dark:bg-secondary-darker">
      <div className="py-5 flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center space-y-5">
          <div className="h-[64px] w-[64px] rounded-xl bg-primary-main p-1">
            <img src={Logo} alt="Tawk" />
          </div>
          <div className="flex flex-col w-full items-center space-y-3">
            {Nav_Buttons.map((el) => {
              return el.index === selectedTab ? (
                <div className="bg-primary-main rounded-lg p-1">
                  <IconButton sx={{ width: "max-content", color: "#ffffff" }}>
                    {el.icon}
                  </IconButton>
                </div>
              ) : (
                <IconButton
                  onClick={() => {
                    handleChangeTab(el.index);
                  }}
                  sx={{
                    width: "max-content",
                    color: "#080707",
                  }}
                >
                  {el.icon}
                </IconButton>
              );
            })}
            <Divider sx={{ width: 48 }} />
            {Nav_Setting.map((el) => {
              return el.index === selectedTab ? (
                <div className="bg-primary-main rounded-lg p-1">
                  <IconButton sx={{ width: "max-content", color: "#ffffff" }}>
                    {el.icon}
                  </IconButton>
                </div>
              ) : (
                <IconButton
                  onClick={() => {
                    handleChangeTab(el.index);
                  }}
                  sx={{
                    width: "max-content",
                    color: "#080707",
                  }}
                >
                  {el.icon}
                </IconButton>
              );
            })}
          </div>
        </div>
        <div className="space-y-4">
          {/* <button onClick={()=>setDarkMode(!darkMode)}>dark</button> */}
          <input
            className="mt-[0.3rem] mr-2 ml-1 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-secondary-lighter dark:bg-neutral-600 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-400 dark:after:bg-neutral-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] checked:bg-info-main dark:checked:bg-info-main checked:after:absolute checked:after:z-[2]  checked:after:ml-[0.9rem]  hover:cursor-pointer focus:before:scale-100 focus:after:absolute focus:after:z-[1] "
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};
