import React from "react";
import { FaHeart } from "react-icons/fa";

function FavoriteMovie() {
  return (
    <div className="border p-[6px] rounded-full w-fit hover:text-red-600 z-10">
      <FaHeart />
    </div>
  );
}

export default FavoriteMovie;
