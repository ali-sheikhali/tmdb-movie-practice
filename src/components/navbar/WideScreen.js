import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import FavoriteMovie from "../FavoriteMovie";
import DarkMode from "./DarkMode";

function WideScreen() {
  return (
    <div className="text-white font-bold flex items-center space-x-5">
      <Link to="/movies">
        <p>Movies</p>
      </Link>
      <Link to="/tv-shows">
        <p>TV Shows</p>
      </Link>
      <Link to="/people">
        <p>People</p>
      </Link>
      <Link to="/login-sign">
        <p>Login</p>
      </Link>
      <Link to="">
        <p>Join TMDB</p>
      </Link>
      <div>
        <Link to="/fav-movie">
          <FavoriteMovie />
        </Link>
      </div>
      <div>
        <DarkMode />
      </div>
    </div>
  );
}

export default WideScreen;
