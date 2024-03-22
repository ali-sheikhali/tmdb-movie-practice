import React from "react";
import { FaChevronUp } from "react-icons/fa";

function GoToUp() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    });
  };
  return (
    <div
      className="bottom-5 right-3 fixed z-10 cursor-pointer"
      onClick={handleScrollToTop}
    >
      <div className="flex justify-center items-center bg-[#01b4e4] w-10 h-10 rounded-full text-[#032541]">
        <FaChevronUp />
      </div>
    </div>
  );
}

export default GoToUp;
