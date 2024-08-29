import React from "react";
import UserCard from "../components/UserCard";

const Home = () => {
  return (
    <div className="">
      <p className="hidden md:block left-10 top-80 fixed">Placeholder Text</p>
      <div className="min-h-screen flex justify-center md:justify-center">
        <ul className="p-4">
          <UserCard uid={1} />
          <UserCard uid={2} />
          <UserCard uid={3} />
          <UserCard uid={4} />
        </ul>
      </div>
      <p className="fixed hidden md:block right-10 top-80">
        Placeholder Nightmare
      </p>
    </div>
  );
};

export default Home;
