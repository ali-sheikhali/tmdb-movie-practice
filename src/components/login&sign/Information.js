import React from "react";
import Edit from "./Edit";

function Information({ values }) {
  console.log(values);
  return (
    <div className="w-8/12 md:w-6/12 lg:w-4/12 mx-auto my-10 bg-[#032541eb] text-white py-5 px-8 rounded-md">
      <div className="flex flex-col space-y-5">
        <div className="border-b border-gray-600 p-4">
          <Edit name="User Name: " value={values.fullName} />
        </div>
        <div className="border-b border-gray-600 p-4">
          <Edit name="Email: " value={values.email} />
        </div>
        <div className="border-b border-gray-600 p-4">
          <Edit name="phone: " value={values.phone} />
        </div>
        <div className="border-b border-gray-600 p-4">
          <Edit name="password: " value={values.password} />
        </div>
      </div>
    </div>
  );
}

export default Information;
