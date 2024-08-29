import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <form
        className="bg-white border-2 border-blue-700 w-[60%] rounded-lg mx-auto p-6 flex flex-col space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h1 className="text-center text-4xl font-sak my-3 text-blue-700">
          Welcome to AppName!
        </h1>
        <hr className="border-[1px] border-stone-400" />
        <p className="text-center font-bold text-2xl italic font-portal text-indigo-300">
          Get started with an account
        </p>
        <Input id={"email"} type={"email"} label={"E-mail"} />
        <Input id={"password"} type={"password"} label={"Password"} />
        <Button type={"submit"}>Sign Up</Button>
      </form>
    </div>
  );
};
export default Signup;
