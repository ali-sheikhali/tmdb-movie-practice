import React from "react";

function Search() {
  return (
    <form className="relative">
      <input
        type="text"
        className="w-[400px] lg:w-[600px] mx-auto placeholder:text-sm placeholder:font-thin text-black focus:outline-none rounded-3xl py-2 lg:py-3 px-5"
        placeholder="search Movie, Tv Shows"
      ></input>
      <button type="submit" className="absolute bg-green-500 py-2 px-3 rounded-2xl right-3 text-sm font-normal mt-[3px] lg:mt-[6px]">Search</button>
    </form>
  );
}

export default Search;
