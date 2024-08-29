import React from "react";
import "./NavLinks.css";
import { NavLink, Link } from "react-router-dom";
const NavLinks = ({ onClick }) => {
  return (
    <nav className="nav-links flex flex-col h-60 md:h-0 justify-between md:flex-row items-center w-60 md:justify-between md:justify-center">
      <NavLink
        onClick={onClick}
        className={
          "p-1 rounded-lg hover:bg-blue-500 md:hover:bg-white font-portal text-2xl md:text-[#000000] text-blue-500"
        }
        to={"/auth"}
        exact={"true"}
      >
        Login
      </NavLink>
      <NavLink
        onClick={onClick}
        className={
          "p-1 rounded-lg hover:bg-blue-500 md:hover:bg-white font-portal text-2xl md:text-[#000000] text-blue-500"
        }
        to={"/new-user"}
        exact={"true"}
      >
        Sign Up
      </NavLink>
      <Link
        to="/"
        onClick={() => {
          onClick();
        }}
        className="p-1 rounded-lg hover:text-white hover:bg-blue-500 md:hover:bg-white  font-portal text-2xl md:text-[#000000] md:hover:text-blue-500 text-blue-500"
      >
        Log Out
      </Link>
    </nav>
  );
};

export default NavLinks;
