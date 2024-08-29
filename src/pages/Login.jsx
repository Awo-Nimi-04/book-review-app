import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <form
        className="bg-white shadow-xl border-2 border-blue-700 w-[60%] rounded-lg mx-auto p-7 flex flex-col space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h1 className="text-center text-4xl font-sak my-3 text-blue-700">
          Login
        </h1>
        <hr className="border-[1px] border-stone-400" />
        <Input id={"email"} type={"email"} label={"E-mail"} />
        <Input id={"password"} type={"password"} label={"Password"} />
        <Link className="text-blue-400 underline" to={"/new-user"}>
          Don't have an account?
        </Link>
        <Button type={"submit"}>Login</Button>
      </form>
    </div>
  );
};
export default Login;
