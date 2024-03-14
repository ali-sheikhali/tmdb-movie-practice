import React from "react";
import Form from "./Form";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Login({toggle}) {
  return (
    <div className="w-10/12 md:w-6/12 xl:w-4/12 mx-auto my-20  bg-[#032541] rounded-md py-12">
      <h3 className="flex justify-center text-white font-bold mb-5">
        login in
      </h3>
      <form action="" className="flex flex-col space-y-5 relative">
        <Form
          name="Email: "
          placeHolder="Enter your Email..."
          type="email"
          logo={<MdOutlineEmail />}
        />
        <Form
          name="Password: "
          placeHolder="Enter your PassWord..."
          type="password"
          logo={<IoKeyOutline />}
        />
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
          <span onClick={toggle} className="font-bold border-b-2 ml-1 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
