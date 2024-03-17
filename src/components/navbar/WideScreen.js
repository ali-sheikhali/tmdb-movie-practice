import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import FavoriteMovie from "../FavoriteMovie";
function WideScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };
  return (
    <div className="text-white font-bold flex items-center space-x-5">
      <Link to="/movies">
        <p>Movies</p>
      </Link>
      <Link to="/tv-shows">
        <p >TV Shows</p>
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
      <button
        onClick={handleDarkMode}
        className="border p-1 rounded-lg text-lg"
      >
        {darkMode ? <IoIosMoon /> : <IoIosSunny />}
      </button>
    </div>
  );
}

export default WideScreen;
