import React from "react";
import movieFilm from "./img/movie film cinema poster banner.jpg";
import Search from "./Search";
function HeroHeader() {
  return (
    <div className="w-full mx-auto relative">
      <figure>
        <img className="rounded-b-lg shadow-md" src={movieFilm} alt="" />
      </figure>
      <div className="absolute text-white top-[40%] right-10 md:top-[45%] md:right-20 lg:right-24 ">
        <h2 className="font-bold text-2xl lg:text-3xl">Welcome.</h2>
        <p className="text-sm lg:text-md">
          Millions of movies, TV shows and <br className="xl:hidden" /> people
          to discover. Explore now.
        </p>
      </div>
      <div className="w-8/12 mx-auto hidden lg:block absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
