import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center h-80">
      <form
        className="bg-white shadow-xl border-2 border-blue-700 w-80 rounded-lg mx-auto p-6 flex flex-col space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label id="email" className="font-bold">E-mail</label>
        <input id="email" type="email" className="transition ease-in-out delay-150 border-2 border-stone-400 rounded-md focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 p-1"></input>
        <label id="password" className="font-bold">Password</label>
        <input id="password" type="password" className="transition ease-in-out delay-150 border-2 border-stone-400 rounded-md focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 p-1"></input>
        <button type="submit" className="bg-blue-600 p-2 rounded-lg w-40 mx-auto">Login</button>
      </form>
    </div>
  );
};
export default Login;
