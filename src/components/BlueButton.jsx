import React from "react";

const BlueButton = ({ props }) => {
  return (
    <>
      <div>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 ">
          {props}
        </button>
      </div>
    </>
  );
};

export default BlueButton;
