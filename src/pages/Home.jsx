import React, { useContext } from "react";
import UserCard from "../components/UserCard";

import { PageContext } from "../context/Context";

const Home = () => {
  const { allUsers } = useContext(PageContext);

  return (
    <div className="">
      <div className="min-h-screen flex justify-center md:justify-center">
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 my-auto">
          {allUsers.map((user, index) => {
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
