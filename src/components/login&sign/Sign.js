import React from "react";
import Form from "./Form";
import { FaRegUser } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sign() {
  return (
    <div className="w-10/12 md:w-6/12 xl:w-4/12 mx-auto my-10 py-5 bg-[#032541] rounded-md">
      <h3 className="flex justify-center text-white font-bold mb-5">Sign in</h3>
      <form className="flex flex-col space-y-5">
        <Form
          name="Full Name: "
          placeHolder="Enter Full Name..."
          type="text"
          logo={<FaRegUser />}
        />
        <Form
          name="Phone No: "
          placeHolder="Enter your Phone no..."
          type="text"
          logo={<CiMobile4 />}
        />
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
        <Form
          name="Confirm PassWord: "
          placeHolder="Enter your Confirm PassWord..."
          type="password"
          logo={<IoKeyOutline />}
        />
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
            Have and Account? <span className="font-bold">Sign in</span>
        </p>
      </div>
    </div>
  );
}

export default Sign;
