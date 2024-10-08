import React, { useContext } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import useForm from "../utilities/customHooks/formHook";
import { PageContext } from "../context/Context";

const Login = () => {
  const { changeUserAuthStatus } = useContext(PageContext);
  const [formState, handleInputChange] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  return (
    <div className="flex flex-col justify-center mt-5  min-h-screen">
      <form
        className="bg-white shadow-xl border-2 border-blue-700 md:w-[60%] rounded-lg mx-auto p-7 flex flex-col space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          changeUserAuthStatus(true);
        }}
      >
        <h1 className="text-center text-4xl font-sparky my-3 text-blue-700">
          Login
        </h1>
        <hr className="border-[1px] border-stone-400" />
        <span className="my-3" />
        <Input
          id={"email"}
          type={"email"}
          label={"E-mail"}
          validation={"email"}
          errorText={"Please enter a valid email"}
          onInputChange={handleInputChange}
        />
        <span className="my-3" />
        <Input
          icon={true}
          id={"password"}
          type={"password"}
          label={"Password"}
          validation={"require"}
          errorText={"Please enter a password"}
          onInputChange={handleInputChange}
        />
        <Link className="text-blue-400 underline" to={"/new-user"}>
          New to AppName?
        </Link>
        <Button
          type={"submit"}
          disabled={!formState.formIsValid}
          styles={
            "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-indigo-800 hover:via-purple-800 hover:to-pink-700 w-40 text-white  disabled:bg-gradient-to-r disabled:from-stone-500 disabled:bg-stone-500 md:text-2xl"
          }
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
};
export default Login;
