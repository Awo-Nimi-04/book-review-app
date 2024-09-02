import React from "react";
import UserCard from "../components/UserCard";
import { USER_INFO } from "../utilities/Data";

const Home = () => {


  return (
    <div className="">
      <div className="min-h-screen flex justify-center md:justify-center">
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 my-auto">
          {USER_INFO.map((user, index) => {
            return (
              <UserCard
                key={index}
                uid={user.id}
                name={user.name}
                books={user.books}
                img={user.img}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
