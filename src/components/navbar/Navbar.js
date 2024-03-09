import React from "react";
import tmdbLogo from "../img/tmdb-logo.png";
import { Link } from "react-router-dom";
import Mobile from "./Mobile";
import WideScreen from "./WideScreen";
function Navbar() {
  return (
    <div className="bg-[#032541] w-full">
      <div className="md:w-10/12 mx-auto flex justify-between px-5 items-center ">
        <figure>
          <Link to="/">
            <img className="w-[200px] h-20" src={tmdbLogo} alt="tmdb-logo" />
          </Link>
        </figure>
        <div className="lg:hidden">
          <Mobile />
        </div>
        <div className="hidden lg:block">
          <WideScreen />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
