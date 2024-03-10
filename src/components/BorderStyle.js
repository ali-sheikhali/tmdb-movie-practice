import React from "react";

const getBorderStyle = (voteAverage) => {
  let borderColor;
  if (voteAverage < 5) {
    borderColor = "red";
  } else if (voteAverage < 7) {
    borderColor = "orange";
  } else if (voteAverage < 9) {
    borderColor = "green";
  } else {
    borderColor = "rgb(255,215,0)";
  }
  return { borderColor, borderWidth: "4px", borderStyle: "solid" };
};

function BorderStyle({ movie }) {
  return (
    <div>
      <div
        className=" left-1 rounded-full p-1 bg-black text-white"
        style={getBorderStyle(movie)}
      >
        {parseFloat(movie).toFixed(1)}
      </div>
    </div>
  );
}

export default BorderStyle;
