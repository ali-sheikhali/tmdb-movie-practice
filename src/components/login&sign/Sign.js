import React, { useState } from "react";
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
import Information from "./Information";

function Sign({ toggle }) {

  const [submitData, setSubmitData] = useState(null);
  
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassWord: "",
    },
    onSubmit: (values) => {
      // <Information values={JSON.stringify(values)} />
      // alert(JSON.stringify(values));
      setSubmitData(values);
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
      confirmPassWord: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
  });
  if (submitData) {
    return <Information values={submitData} />
  }

  return (
    <div className="w-10/12 md:w-6/12 xl:w-4/12 mx-auto my-10 py-5 bg-[#032541] rounded-md">
      <h3 className="flex justify-center text-white font-bold mb-5">Sign in</h3>

      <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-5">
        <div>
          <Form
            name="fullName"
            label="FullName:"
            placeHolder="Enter Full Name..."
            type="text"
            logo={<FaRegUser />}
            formik={formik}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-500 text-xs ml-12 mt-1">
              {formik.errors.fullName}
            </div>
          ) : null}
        </div>
        <div>
          <Form
            label="PhoneNo: "
            name="phone"
            placeHolder="Enter your Phone no..."
            type="text"
            logo={<CiMobile4 />}
            formik={formik}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-xs ml-12 mt-1">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>
        <div>
          <Form
            label="Email: "
            name="email"
            placeHolder="Enter your Email..."
            type="email"
            logo={<MdOutlineEmail />}
            formik={formik}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs ml-12 mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div>
          <Form
            label="Password: "
            name="password"
            placeHolder="Enter your PassWord..."
            type="password"
            logo={<IoKeyOutline />}
            formik={formik}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs ml-12 mt-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div>
          <Form
            label="ConfirmPassWord: "
            name="confirmPassWord"
            placeHolder="Enter your Confirm PassWord..."
            type="password"
            logo={<IoKeyOutline />}
            formik={formik}
          />
          {formik.touched.confirmPassWord && formik.errors.confirmPassWord ? (
            <div className="text-red-500 text-xs ml-12 mt-1">
              {formik.errors.confirmPassWord}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-6/12 mx-auto py-1 rounded-xl bg-white"
        >
          Register
        </button>
      </form>
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
