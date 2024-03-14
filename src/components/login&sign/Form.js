import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";

function Form({ name, placeHolder, type, logo }) {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandle = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      PhoneNo: "",
      Email: "",
      Password: "",
      ConfirmPassWord: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: yup.object({
      fullName: yup.string().required("Full name is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
  });

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
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-white">{formik.errors[name]}</div>
      ) : null}

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
