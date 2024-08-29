import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({ uid }) => {
  return (
    <li className="p-3 user-card">
      <Link to={`/${uid}/places`} className="flex bg-white p-2 rounded-lg w-60 items-center border-2 border-transparent justify-between shadow-xl transition ease-in-out delay-150 hover:border-2 hover:border-purple-300 hover:-translate-y-1 hover:scale-110 hover:ring-4 hover:ring-blue-500">
        <img
          className="rounded-full border-2 border-blue-500 w-20"
          src="https://cdn-icons-png.flaticon.com/512/3273/3273898.png"
        ></img>
        <div>
          <p>Name</p>
          <p>Number of books</p>
        </div>
      </Link>
    </li>
  );
};

export default UserCard;
