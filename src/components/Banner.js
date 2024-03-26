import React from "react";
import { Link } from "react-router-dom";
function Banner({ image }) {
  return (
    <div>
      <figure className="w-10/12 md:h-8/12 mx-auto relative">
        <img className="w-full h-[200px] rounded-md" src={image} alt="" />

        <Link
          to="https://www.themoviedb.org/award/1-academy-awards/ceremony/96"
          target="blank"
        >
          <button
            className="absolute bottom-2 left-5 text-white
         border hover:bg-white hover:text-black rounded-lg px-2 py-1 "
          >
            View the Winners Nominees and News
          </button>
        </Link>
      </figure>
    </div>
  );
}

export default Banner;
