import React, { useState } from "react";
import { MdModeEdit, MdCheck } from "react-icons/md";

function Edit({ value, name }) {
    
  const [editMode, setEditMode] = useState(false);
  const [editInputValue, setEditInputValue] = useState(value);

  const handleChange = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };
  const handleInputChange = (e) => {
    setEditInputValue(e.target.value);
  };
  return (
    <div className="flex justify-between items-center space-x-4 ">
      <div className="relative">
        <span className="mr-3">{name}</span>
        {editMode ? (
          <input
            type="text"
            className={`text-white bg-transparent border-b px-2 transition-all duration-500 absolute ${
              editMode ? "opacity-100" : "opacity-0"
            }`}
            onChange={handleInputChange}
            value={editInputValue}
          />
        ) : (
          editInputValue
        )}
      </div>
      <span onClick={handleChange}>
        {editMode ? <MdCheck /> : <MdModeEdit />}
      </span>
    </div>
  );
}

export default Edit;
