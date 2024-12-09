import React from "react";
import ChartLine from "../common/ChartLine";

import FigmaIcon from "../../assets/figma.svg";

function Hero() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="px-32 border-b border-lightGray-700 border-dashed">
        <div className="h-40 border-x border-lightGray-700 border-dashed"></div>
      </div>
      <div className="grid grid-flow-col px-32">
        <div className="py-1 border-x border-lightGray-700 border-dashed">
          <h1 className="text-3xl text-darkGray-500 font-semibold leading-snug">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
            velit voluptatum soluta, perspiciatis delectus magnam.
          </h1>
        </div>

        <div className="w-72 border-r border-lightGray-700 border-dashed"></div>
      </div>

      <div className="grid grid-flow-col px-32 border-t border-lightGray-700 border-dashed">
        <div className="pt-32 pb-6 border-x border-lightGray-700 border-dashed">
          <div className="flex flex-row justify-center p-10 border border-lightGray-700 rounded-lg">
            <div className="flex flex-col gap-8">
              <button
                className="group w-fit py-1 px-3 rounded-lg 
              bg-lightGray-600 hover:bg-lightGray-700 focus:ring-2 focus:ring-lightGray-800 focus:outline-none active:bg-lightGray-800 transition duration-300"
              >
                <span className="text-sm font-semibold text-darkGray-300 group-hover:text-darkGray-200 group-active:text-darkGray-100">
                  AI / LLM SaaS
                </span>
              </button>

              <div className="flex flex-col gap-6">
                <h3 className="text-xl text-darkGray-500 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>

                <div className="flex flex-row justify-start items-center gap-2">
                  <div className="bg-[#F24E1E]/40 p-1 rounded-md">
                    <img
                      src={FigmaIcon}
                      alt="figma-icon"
                      loading="lazy"
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-sm text-darkGray-500 font-semibold">
                      Figma
                    </p>
                    <p className="text-xs text-darkGray-300">Design Platform</p>
                  </div>
                </div>

                <a
                  href="/"
                  className="w-fit text-sm text-cyan-500 font-semibold hover:text-cyan-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none active:text-cyan-700 transition duration-200"
                >
                  Case Study <i class="ri-arrow-right-s-line"></i>
                </a>
              </div>
            </div>

            <div className="w-full">
              <ChartLine />
            </div>

            <div className="flex flex-row justify-center items-end pl-8 gap-2">
              <button
                className="group w-fit py-1 px-3 border border-lightGray-700 rounded-lg 
              bg-lightGray-500 hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none active:bg-lightGray-700 transition duration-300"
              >
                <span className="text-sm text-darkGray-500 group-hover:text-darkGray-400 group-active:text-darkGray-300">
                  <i class="ri-arrow-left-s-line"></i>
                </span>
              </button>

              <button
                className="group w-fit py-1 px-3 border border-lightGray-700 rounded-lg 
              bg-lightGray-500 hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none active:bg-lightGray-700 transition duration-300"
              >
                <span className="text-sm text-darkGray-500 group-hover:text-darkGray-400 group-active:text-darkGray-300">
                  <i class="ri-arrow-right-s-line"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
