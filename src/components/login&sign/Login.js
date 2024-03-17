import React from "react";
import Form from "./Form";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function Login({ toggle }) {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassWord: "",
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
      confirmPassWord: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
  });
  return (
    <div className="w-10/12 md:w-6/12 xl:w-4/12 mx-auto my-20  bg-[#032541] rounded-md py-12">
      <h3 className="flex justify-center text-white font-bold mb-5">
        login in
      </h3>
      <form action="" className="flex flex-col space-y-5 relative">
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
        <Link to="">
          <p className="text-white text-xs absolute right-12 bottom-[58px] hover:text-slate-300">
            Forget Password
          </p>
        </Link>
        <button
          type="submit"
          className="w-6/12 mx-auto py-1 rounded-xl bg-white"
        >
          Login
        </button>
      </form>
      <div className="text-white mt-5 flex justify-center">
        <p>
          Don't Have and Account?
          <span
            onClick={toggle}
            className="font-bold border-b-2 ml-1 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
