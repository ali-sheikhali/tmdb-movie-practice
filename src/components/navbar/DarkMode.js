import React, { useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";

function DarkMode() {
    
  const [darkMode, setDarkMode] = useState(true);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div>
      <button
        onClick={handleDarkMode}
        className="border p-1 rounded-lg text-lg"
      >
        {darkMode ? <IoIosMoon /> : <IoIosSunny />}
      </button>
    </div>
  );
}

export default DarkMode;
