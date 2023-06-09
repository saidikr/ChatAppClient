import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";




const isAuthenticated = false;

const AuthLayout = () => {
  if (isAuthenticated) {
    return <Navigate to="/app" />;
  }
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-1/3">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col items-center w-full ">
            <img style={{ height: 120, width: 120 }} src={Logo} alt="Logo" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
