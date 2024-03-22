import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import Search from "../Search";
import FavoriteMovie from "../FavoriteMovie";
import { GoChevronDown,GoChevronUp } from "react-icons/go";
import "./navbar.css";
import DarkMode from "./DarkMode";

function Mobile() {

  return (
    <div className="text-white text-[15px] flex space-x-5 z-10 ">
      <Link to="/movies">
        <p>Movies</p>
      </Link>
      <Link>
        <p to="/tv-shows">TV Shows</p>
      </Link>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="flex">
              <span className="">More</span>
              <span className="mt-1 font-bold text-lg">
                {open ? <GoChevronUp /> : <GoChevronDown />}
              </span>
            </Menu.Button>
            <Menu.Items className="absolute z-10 top-20 bg-[#032541] flex flex-col justify-center items-center mx-auto space-y-3 w-full right-0 py-3">
              <Menu.Item className="hover:bg-[#133754] w-full text-center py-1">
                {({ active }) => <Link to="/login-sign">Login</Link>}
              </Menu.Item>
              <Menu.Item className="hover:bg-[#133754] w-full text-center py-1">
                {({ active }) => <Link to="/people">People</Link>}
              </Menu.Item>
              <Menu.Item className="hover:bg-[#133754] w-full text-center py-1">
                {({ active }) => <Link to="">Join TMDB</Link>}
              </Menu.Item>
              <Menu.Item className="hover:bg-[#133754] w-full text-center py-1">
                {({ active }) => <Link to="">Discussions</Link>}
              </Menu.Item>
              <Menu.Item className="hover:bg-[#133754] w-full text-center py-1">
                {({ active }) => <Link to="">Support</Link>}
              </Menu.Item>
              <Menu.Item className="hover:bg-[#133754] w-full text-center py-1">
                {({ active }) => <Link to="">API</Link>}
              </Menu.Item>
              <Search />
            </Menu.Items>
          </>
        )}
      </Menu>
      <div >
        <Link to="/fav-movie"><FavoriteMovie /></Link>
        
      </div>
        <div>
          <DarkMode />
        </div>
    </div>
  );
}

export default Mobile;
