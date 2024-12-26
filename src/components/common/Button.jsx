import React from "react";
import PropTypes from "prop-types";

const Button = ({
  isWhite = false,
  isBlack = false,
  children,
  className = "",
  ...props
}) => {
  // Button White
  const whiteButtonClasses = `
    bg-lightGray-500 py-2 px-3 border border-lightGray-700 rounded-lg 
    hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none 
    active:bg-lightGray-700 transition duration-300 text-sm 
    text-darkGray-500 hover:text-darkGray-400 active:text-darkGray-300
  `;

  // Button Black
  const blackButtonClasses = `
    bg-lightGray-500 px-3 py-2 mt-8 border border-lightGray-700 rounded-lg 
    hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none 
    active:bg-lightGray-700 transition duration-300 text-sm 
    text-darkGray-500 hover:text-darkGray-400 active:text-darkGray-300
  `;

  return (
    <button
      className={`${isWhite ? whiteButtonClasses : ""} ${
        isBlack ? blackButtonClasses : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  isWhite: PropTypes.bool,
  isBlack: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
