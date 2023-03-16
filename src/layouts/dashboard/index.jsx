import { Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";
import React from "react";

function DashboardLayout() {
  return (
    <div className="flex">
      <SideNav />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
