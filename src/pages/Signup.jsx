import React, { useContext } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import useForm from "../utilities/customHooks/formHook";
import { PageContext } from "../context/Context";

const Signup = () => {
  const { changeUserAuthStatus } = useContext(PageContext);
  const [formState, handleInputChange] = useForm(
    {
      firstName: {
        value: "",
        isValid: false,
      },
      lastName: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <div className="flex flex-col justify-center mt-5 min-h-screen p-4">
      <form
        className="bg-white border-2 border-blue-700 md:w-[60%] rounded-lg mx-auto p-6 flex flex-col space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          changeUserAuthStatus(true);
        }}
      >
        <h1 className="text-center text-4xl font-sparky my-3 text-blue-700">
          Welcome to AppName!
        </h1>
        <hr className="border-[1px] border-stone-400" />
        <p className="text-center font-bold text-2xl italic font-portal text-indigo-300">
          Get started with an account
        </p>
        <span className="my-3" />
        <Input
          id={"firstName"}
          type={"text"}
          label={"First Name"}
          validation={"require"}
          errorText={"This field is required"}
          onInputChange={handleInputChange}
        />
        <span className="my-3" />
        <Input
          id={"lastName"}
          type={"text"}
          label={"Last Name"}
          validation={"require"}
          errorText={"This field is required"}
          onInputChange={handleInputChange}
        />
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
          validation={"min_length"}
          errorText={"Please enter a password (At least 6 characters)"}
          minLength={6}
          onInputChange={handleInputChange}
        />
        <Button
          type={"submit"}
          disabled={!formState.formIsValid}
          styles={
            "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-indigo-800 hover:via-purple-800 hover:to-pink-700 disabled:bg-gradient-to-r w-40 text-white  disabled:from-stone-500 disabled:bg-stone-500 md:text-2xl"
          }
        >
          SIGN UP
        </Button>
      </form>
    </div>
  );
};
export default Signup;
