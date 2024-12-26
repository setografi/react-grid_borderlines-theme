import React from "react";

function Button() {
  return (
    <button
      className="group w-fit py-1 px-3 border border-lightGray-700 rounded-lg 
  bg-lightGray-500 hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none active:bg-lightGray-700 transition duration-300"
    >
      <span className="text-sm text-darkGray-500 group-hover:text-darkGray-400 group-active:text-darkGray-300">
        <i className="ri-arrow-right-s-line"></i>
      </span>
    </button>
  );
}

export default Button;
