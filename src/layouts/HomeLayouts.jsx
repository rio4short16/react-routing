import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function HomeLayouts() {
  const homeNav = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
  ];
  return (
    <div>
      <Nav links={homeNav} />
      <Outlet />
    </div>
  );
}

export default HomeLayouts;
