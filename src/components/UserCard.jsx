import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({ uid, name, books, img }) => {
  return (
    <li className="p-3 user-card">
      <Link
        to={`/${uid}/books`}
        className="flex bg-white p-2 rounded-lg w-60 items-center border-2 border-transparent justify-start space-x-7 shadow-xl transition ease-in-out delay-150 hover:bg-lime-200 hover:border-2 hover:-translate-y-1 hover:scale-110 hover:ring-4 hover:ring-purple-600"
      >
        <img
          className="rounded-full object-fill border-2 border-purple-500 w-20"
          src={
            img ||
            "https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png"
          }
        ></img>
        <div>
          <p className="font-sparky text-lg text-purple-500">{name}</p>
          <p className="font-sak text-[11px] text-purple-700">{books} books</p>
        </div>
      </Link>
    </li>
  );
};

export default UserCard;
