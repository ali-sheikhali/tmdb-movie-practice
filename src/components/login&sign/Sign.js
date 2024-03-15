import React from "react";
import Form from "./Form";
import { FaRegUser } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function Sign({ toggle }) {

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
  const handleSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit(); 
  };
  return (
    <div className="w-10/12 md:w-6/12 xl:w-4/12 mx-auto my-10 py-5 bg-[#032541] rounded-md">
      <h3 className="flex justify-center text-white font-bold mb-5">Sign in</h3>

      <form  className="flex flex-col space-y-5">
        <Form
          name="FullName: "
          placeHolder="Enter Full Name..."
          type="text"
          logo={<FaRegUser />}
          formik={formik}
        />
        {formik.touched.FullName && formik.errors.FullName ? (
          <div className="text-white">{formik.errors.FullName}</div>
        ) : null}
        <Form
          name="PhoneNo: "
          placeHolder="Enter your Phone no..."
          type="text"
          logo={<CiMobile4 />}
          formik={formik}

        />
        <Form
          name="Email: "
          placeHolder="Enter your Email..."
          type="email"
          logo={<MdOutlineEmail />}
          formik={formik}

        />
        <Form
          name="Password: "
          placeHolder="Enter your PassWord..."
          type="password"
          logo={<IoKeyOutline />}
          formik={formik}

        />
        <Form
          name="ConfirmPassWord: "
          placeHolder="Enter your Confirm PassWord..."
          type="password"
          logo={<IoKeyOutline />}
          formik={formik}

        />
        <button
          type="submit"
          className="w-6/12 mx-auto py-1 rounded-xl bg-white"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form >
      <div className="w-10/12 mx-auto mt-8 text-white relative">
        <hr />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          or
        </p>
      </div>
      <div className="flex justify-center items-center mt-5 gap-3 text-white">
        <Link
          className="border rounded-full p-1"
          to="./https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FaFacebookF />
        </Link>
        <Link className="border rounded-full p-1" to="https://www.google.com/">
          <FaGoogle />
        </Link>
      </div>
      <div className="text-white mt-5 flex justify-center">
        <p>
          Have and Account?{" "}
          <span
            onClick={toggle}
            className="font-bold border-b-2 ml-1 cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default Sign;
