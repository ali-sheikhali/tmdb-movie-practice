import React from "react";
import tmdbLogo from "../img/tmdb-logo.png";
import { Link } from "react-router-dom";
import Mobile from "./Mobile";
import WideScreen from "./WideScreen";
function Navbar() {
  return (
    <div className="bg-[#032541] w-full">
      <div className="w-11/12 md:w-10/12 mx-auto flex justify-between items-center ">
        <figure>
          <Link to="/">
            <img className="w-[200px] h-20" src={tmdbLogo} alt="tmdb-logo" />
          </Link>
        </figure>
        <div className="md:hidden">
          <Mobile />
        </div>
        <div className="hidden md:block">
          <WideScreen />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
