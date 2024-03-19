import React from "react";

function Information({ values }) {
  console.log(values);
  return (
    <div>
      <div>{values.fullName}</div>
    </div>
  );
}

export default Information;
