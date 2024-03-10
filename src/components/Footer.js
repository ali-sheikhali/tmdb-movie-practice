import React from "react";
import tmdbLogo from "./img/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="bg-[#032541] w-full text-white">
      <div className="w-10/12 mx-auto py-5 flex flex-col xl:flex-row xl:justify-between space-y-3">
        <div className="flex justify-around items-center border-b pb-5 xl:border-none xl:space-x-5">
          <figure className="w-[130px] h-[90px]">
            <img src={tmdbLogo} alt="tmdb-logo" />
          </figure>
          <div>
            <form action="" className="flex space-x-3">
              <input
                type="text"
                name=""
                id="enterEmail"
                placeholder="Enter your Email"
                className="bg-white text-black focus:outline-none rounded-lg px-2 py-1"
              />
              <button
                type="submit"
                id="enterEmail"
                className="bg-[#01b4e4] text-sm p-1 rounded-lg"
              >
                Subscribe
              </button>
            </form>
            <div className="flex justify-center items-center mt-5 gap-3">
              <span className="border rounded-full p-1">
                <FaFacebookF />
              </span>
              <span className="border rounded-full p-1">
                <FaXTwitter />
              </span>
              <span className="border rounded-full p-1">
                <FaLinkedinIn />
              </span>
              <span className="border rounded-full p-1">
                <SiGmail />
              </span>
            </div>
          </div>
        </div>
        <div className="p-5 grid grid-cols-2 lg:grid-cols-4 justify-around">
          <div>
            <h3 className="font-bold text-xl">THE BASICS</h3>
            <div className="p-2">
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                About TMDB
              </p>
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                Contact Us
              </p>
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                Support Forums
              </p>
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                API
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl">GET INVOLVED</h3>
            <div className="p-2">
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                Contribution Bible
              </p>
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                Add New Movie
              </p>
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                Add New TV Show
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl">COMMUNITY</h3>
            <div className="p-2">
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                Guidelines
              </p>
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                Discussions
              </p>
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                Leaderboard
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl">LEGAL</h3>
            <div className="p-2">
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                Terms of Use
              </p>
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                API Terms of Use
              </p>
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                Privacy Policy
              </p>
              <p className="hover:ml-2 transition-all ease-linear delay-300 ">
                DMCA Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
