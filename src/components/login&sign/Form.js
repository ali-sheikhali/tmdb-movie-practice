import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function Form({ name, placeHolder, type, logo, formik }) {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col space-y-1 mx-12 relative">
      <label htmlFor={name} className="text-white text-xs">
        {name}
      </label>
      <input
        name={name}
        id={name}
        type={showPassword ? "text" : type}
        placeholder={placeHolder}
        className="border focus:outline-none rounded-md py-1 px-12 placeholder:text-sm"
        value={formik && formik.values[name]}
        onChange={formik && formik.handleChange}
        onBlur={formik && formik.handleBlur}
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
