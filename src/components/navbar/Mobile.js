import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import Search from "../Search";

function Mobile() {
  return (
    
      <div className="text-white sm:font-bold flex space-x-5 z-10 ">
        <Link to="/movies">
          <p>Movies</p>
        </Link>
        <Link>
          <p to="/tv-shows">TV Shows</p>
        </Link>
        <Link to="/people">
          <p>People</p>
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
                  {({ active }) => <Link to="/login">Login</Link>}
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
      </div>
    
  );
}

export default Mobile;
