import React, { useContext } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import useForm from "../utilities/customHooks/formHook";
import spidermanImg from "../assets/images/spiderman.png";
import tigerImg from "../assets/images/tiger.png";
import sphereImg from "../assets/images/sphere.png";
import burgerImg from "../assets/images/burger.png";
import unitedImg from "../assets/images/united.png";
import { PageContext } from "../context/Context";

const Signup = () => {
  const { changeUserAuthStatus, setAllUsers, currIdx, setCurrIdx, allUsers } =
    useContext(PageContext);
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
  const handleSubmitSignup = (event) => {
    event.preventDefault();
    changeUserAuthStatus(true);
    const user = {
      id: currIdx,
      name: `${formState.inputs.firstName.value} ${formState.inputs.lastName.value}`,
      books: 0,
    };
    setAllUsers((prevState) => {
      return [...prevState, user];
    });
    setCurrIdx((prevState) => prevState + 1);
  };

  return (
    // <div className="flex flex-col justify-center ">
    <div className="flex justify-center mt-5 p-4 ">
      <div className="p-4 bg-white flex flex-col lg:flex-row items-center rounded-lg shadow-2xl justify-start lg:justify-around lg:w- border-2 border-blue-700">
        <div className="flex flex-col justify-center  items-center lg:h-[100%]">
          <div className="mt-5">
            <h1 className="text-center text-4xl font-sparky text-blue-700 p-2">
              Welcome to AppName!
            </h1>
            <p className="text-center font-bold text-2xl italic font-portal text-indigo-300">
              Get started with an account
            </p>
          </div>
          <div className="block w-[80%] lg:hidden h-1 bg-gradient-to-r from-cyan-300 to-blue-500 mt-3 mb-6"></div>
          <h3 className="">Choose a Profile Image</h3>
          <form className="flex flex-col items-center space-y-1">
            <div className="grid grid-cols-2 overflow-x-auto h-40 block gap-2 p-1 shadow-md rounded-lg border-2 border-blue-800">
              <div className="flex space-x-1 items-center">
                <input type="radio" id="option1" name="group1" value="1" />
                <label for="option1">
                  <img
                    className="rounded-full object-fill border-2 border-purple-500 w-20"
                    src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"
                    alt=""
                  />
                </label>
              </div>

              <div className="flex space-x-1 items-center">
                <input type="radio" id="option2" name="group1" value="2" />
                <label for="option2">
                  <img
                    className="rounded-full object-fill border-2 border-purple-500 w-20"
                    src="https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png"
                    alt=""
                  />
                </label>
              </div>
              <div className="flex space-x-1 items-center">
                <input type="radio" id="option3" name="group1" value="3" />
                <label for="option3">
                  <img
                    className="rounded-full object-fill border-2 border-purple-500 w-20"
                    src={spidermanImg}
                    alt=""
                  />
                </label>
              </div>
              <div className="flex space-x-1 items-center">
                <input type="radio" id="option4" name="group1" value="4" />
                <label for="option4">
                  <img
                    className="rounded-full object-contain border-2 border-purple-500 w-20 h-20"
                    src={burgerImg}
                    alt=""
                  />
                </label>
              </div>
              <div className="flex space-x-1 items-center">
                <input type="radio" id="option5" name="group1" value="5" />
                <label for="option5">
                  <img
                    className="rounded-full object-cover border-2 border-purple-500 w-20 h-20"
                    src={sphereImg}
                    alt=""
                  />
                </label>
              </div>
              <div className="flex space-x-1 items-center">
                <input type="radio" id="option6" name="group1" value="6" />
                <label for="option6">
                  <img
                    className="rounded-full object-cover border-2 border-purple-500 w-20 h-20"
                    src={unitedImg}
                    alt=""
                  />
                </label>
              </div>
            </div>
            <button type="submit" className="p-2 bg-blue-400 text-white font-[700] w-20 rounded-full shadow-sm">Select</button>
          </form>
        </div>
        <div className="hidden lg:block w-1 h-[80%] bg-gradient-to-b from-cyan-300 to-blue-500"></div>
   
        <form
          className="bg-white rounded-lg lg:p-6 flex flex-col justify-center space-y-3"
          onSubmit={handleSubmitSignup}
        >
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
    </div>
  );
};
export default Signup;
