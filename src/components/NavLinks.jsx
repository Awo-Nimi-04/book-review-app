import React from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";
const NavLinks = ({ onClick }) => {
  return (
    <nav className="nav-links flex flex-col h-60 md:h-0 justify-between md:flex-row items-center w-60 md:justify-between md:justify-center">
      <NavLink
        onClick={onClick}
        className={"p-2 rounded-lg hover:bg-blue-500 md:hover:bg-white"}
        to={"/auth"}
        exact={"true"}
      >
        Login
      </NavLink>
      <NavLink
        onClick={onClick}
        className={"p-2 rounded-lg hover:bg-blue-500 md:hover:bg-white"}
        to={"/new-user"}
        exact={"true"}
      >
        Sign Up
      </NavLink>
      <button
        onClick={() => {
          onClick();
        }}
        className="p-2 rounded-lg hover:bg-blue-500 md:hover:bg-white"
      >
        Log Out
      </button>
    </nav>
  );
};

export default NavLinks;
