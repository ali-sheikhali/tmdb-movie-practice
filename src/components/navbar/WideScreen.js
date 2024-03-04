import React from 'react'
import { Link } from 'react-router-dom'
function WideScreen() {
  return (
    <div className="text-white font-bold flex items-center space-x-5">
        
         <Link to="/movies">
          <p>Movies</p>
        </Link>
        <Link>
          <p to="/tv-shows">TV Shows</p>
        </Link>
        <Link to="/people">
          <p>People</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="">
          <p>Join TMDB</p>
        </Link>
    </div>
  )
}

export default WideScreen