import React from "react";
import PropTypes from "prop-types";

function ProfileCard({
  logo,
  text,
  highlightedText,
  endingText,
  name,
  role,
  image,
}) {
  return (
    <div className="group flex flex-col p-5 gap-10 border-r border-b border-lightGray-700 border-dashed">
      <h2 className="text-darkGray-500 font-semibold">{logo}</h2>
      <p className="text-darkGray-500">
        {text}
        <span className="bg-lightGray-700 text-darkGray-500 text-sm md:text-base font-semibold">
          {highlightedText}
        </span>
        {endingText}
      </p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col space-y-1">
          <h3 className="text-darkGray-500 text-base md:text-lg font-semibold">
            {name}
          </h3>
          <p className="text-darkGray-300/60 text-xs md:text-sm">{role}</p>
        </div>
        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
          <img
            src={image}
            alt={`Profile of ${name}`}
            className="w-full h-full object-cover group-hover:scale-125 duration-300 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  logo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  highlightedText: PropTypes.string.isRequired,
  endingText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProfileCard;
