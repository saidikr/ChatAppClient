import { IconButton } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import ProfileForm from "../../sections/settings/ProfileFrom";

const Profile = () => {
  return (
    <div className="flex w-full">
      <div className="h-[100vh] bg-[#F8FAFF] w-[320px] shadow">
        <div className="flex flex-col space-y-10 p-5 ">
          {/* Header */}
          <div className="flex items-center space-x-6 ">
            <IconButton>
              <CaretLeft size={24} color="#4b4b4b" />
              <h3 className="font-semibold text-black ">Profile</h3>
            </IconButton>
          </div>
          {/* Profile Form */}
          <ProfileForm/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
