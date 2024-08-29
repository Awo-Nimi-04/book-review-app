import React from "react";

const Button = ({ type, children }) => {
  return (
    <button
      type={type}
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-lg w-40 mx-auto font-sunshine text-white text-2xl"
    >
      {children}
    </button>
  );
};

export default Button;
