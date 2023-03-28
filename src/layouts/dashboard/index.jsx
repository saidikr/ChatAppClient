import { Navigate, Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";
import React from "react";

const isAuthenticated = true;

const DashboardLayout=() =>{
  if (!isAuthenticated) {
  console.log(isAuthenticated)
    return <Navigate to="/auth/login" />;
  }
      return (
      <div className="flex">
        <SideNav />
        <Outlet />
      </div>
    );}


export default DashboardLayout;
