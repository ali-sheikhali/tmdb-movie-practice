import React from "react";
import { MdModeEdit } from "react-icons/md";

function Information({ values }) {
  console.log(values);
  const handleChange = ()=>{
    //---
  }
  return (
    <div className="w-8/12 md:w-6/12 lg:w-4/12 mx-auto my-10 bg-[#032541eb] text-white py-5 px-8 rounded-md">
      <div>
        <div className="flex justify-between items-center border-b">
          <span>User Name: {values.fullName} </span>
          <span onChange={handleChange}>
            <MdModeEdit />
          </span>
        </div>
        <div>
          <span>Email: {values.email} </span>
        </div>
        <div>
          <span>Phone :{values.phone} </span>
        </div>
      </div>
    </div>
  );
}

export default Information;
