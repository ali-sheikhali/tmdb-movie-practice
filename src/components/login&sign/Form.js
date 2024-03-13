import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function Form({ name, placeHolder, type, logo }) {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandle = () => {
    setShowPassword(!showPassword);
  };

  if (type === "password") {
  }
  return (
    <div className="flex flex-col space-y-1 mx-12 relative">
      <label htmlFor="fullName" className="text-white text-xs">
        {name}
      </label>
      <input
        type={showPassword ? "text" : type}
        name=""
        id="fullName"
        placeholder={placeHolder}
        className="border focus:outline-none rounded-md py-1 px-12 placeholder:text-sm"
      />
      <span className="absolute top-6 left-3">{logo}</span>
      {type === "password" && (
        <span className="absolute top-6 right-5" onClick={showPasswordHandle}>
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </span>
      )}
    </div>
  );
}

export default Form;
