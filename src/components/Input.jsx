import React from "react";
import { useRef, useState } from "react";

const Input = ({ id, label, type }) => {
  const inputRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const handleInputChange = (event) => {
    if (event.target.value.length > 0) setIsValid(true);
  };
  const handleInputTouch = () => {
    setIsTouched(true);
  };
  return (
    <>
      <label id={id} className="font-bold font-portal tracking-[0.08rem]">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        onChange={handleInputChange}
        onBlur={handleInputTouch}
        className={`transition ease-in-out delay-150 border-2 ${
          !isValid && isTouched ? "border-red-400" : "border-stone-400"
        } rounded-md focus:outline-none focus:ring-blue-700 focus:ring-1 focus:border-blue-700 p-1`}
      ></input>
    </>
  );
};

export default Input;
