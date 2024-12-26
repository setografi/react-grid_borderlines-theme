import React, { useState } from "react";
import heroData from "../../constants/heroData";
import Button from "../common/Button";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
  };

  const activeData = heroData[currentSlide];

  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="px-8 md:px-16 lg:px-32 border-b border-lightGray-700 border-dashed">
        <div className="h-32 md:h-36 lg:h-40 border-x border-lightGray-700 border-dashed"></div>
      </div>

      <div className="grid grid-flow-row md:grid-flow-col px-8 md:px-16 lg:px-32">
        <div className="py-1 border-x border-lightGray-700 border-dashed">
          <h1 className="text-darkGray-500 text-2xl md:text-3xl font-semibold leading-snug">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
            velit voluptatum soluta, perspiciatis delectus magnam.
          </h1>
        </div>

        <div className="md:w-72 border-r border-lightGray-700 border-dashed"></div>
      </div>

      <div className="px-8 md:px-16 lg:px-32 border-t border-lightGray-700 border-dashed">
        <div className="pt-8 md:pt-32 pb-24 md:pb-6 border-x border-lightGray-700 border-dashed">
          <div className="flex flex-col lg:flex-row md:justify-center p-5 md:p-10 gap-6 lg:gap-0 border border-lightGray-700 rounded-lg">
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8">
              <a
                href="/"
                className="group w-fit bg-lightGray-600 py-1 px-2 md:px-3 rounded-lg hover:bg-lightGray-700 focus:ring-2 focus:ring-lightGray-800 focus:outline-none active:bg-lightGray-800 transition duration-300"
              >
                <span className="text-darkGray-300 text-xs md:text-sm font-semibold group-hover:text-darkGray-200 group-active:text-darkGray-100">
                  {activeData.category}
                </span>
              </a>

              <div className="flex flex-col gap-4 md:gap-6">
                <h3 className="text-darkGray-500 text-lg md:text-xl font-semibold">
                  {activeData.title}
                </h3>

                <div className="flex flex-row justify-start items-center gap-2">
                  <div className="bg-[#F24E1E]/40 p-1 rounded-md">
                    <img
                      src={activeData.platformIcon}
                      alt={`${activeData.platform}-icon`}
                      loading="lazy"
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-sm text-darkGray-500 font-semibold">
                      {activeData.platform}
                    </p>
                    <p className="text-xs text-darkGray-300/60">
                      {activeData.description}
                    </p>
                  </div>
                </div>

                <a
                  href="/"
                  className="w-fit text-sm text-cyan-500 font-semibold hover:text-cyan-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none active:text-cyan-700 transition duration-200"
                >
                  Case Study <i className="ri-arrow-right-s-line"></i>
                </a>
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="w-full flex justify-end">
              {activeData.contentType === "chart" ? (
                <activeData.chart />
              ) : (
                <img
                  width={1080}
                  height={1080}
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-64 h-auto object-cover rounded-md"
                />
              )}
            </div>

            {/* Button */}
            <div className="flex flex-row lg:justify-center items-end lg:pl-8 gap-2">
              <Button isWhite onClick={handlePrev}>
                <i className="ri-arrow-left-s-line"></i>
              </Button>

              <Button isWhite onClick={handleNext}>
                <i className="ri-arrow-right-s-line"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
