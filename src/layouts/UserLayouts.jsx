import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function UserLayouts() {
  const userNav = [
    {
      path: "/logout",
      name: "Logout",
    },
  ];

  return (
    <div>
      <Nav links={userNav} />
      <Outlet />
    </div>
  );
}

export default UserLayouts;
