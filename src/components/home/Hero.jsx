import React from "react";
import ChartLine from "../common/ChartLine";

import FigmaIcon from "../../assets/figma.svg";

function Hero() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      {/* Hero Section */}
      <div className="px-32 border-b border-slate-300 border-dashed">
        <div className="h-40 border-x border-slate-300 border-dashed"></div>
      </div>
      <div className="grid grid-flow-col px-32">
        {/* Kolom utama */}
        <div className="py-1 border-x border-slate-300 border-dashed">
          <h1 className="text-3xl font-semibold leading-snug">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
            velit voluptatum soluta, perspiciatis delectus magnam.
          </h1>
        </div>

        {/* Kolom kosong */}
        <div className="w-72 border-r border-slate-300 border-dashed"></div>
      </div>

      {/* Graph Section */}
      <div className="grid grid-flow-col px-32 border-t border-slate-300 border-dashed">
        <div className="pt-32 pb-6 border-x border-slate-300 border-dashed">
          <div className="flex flex-row justify-center p-10 border border-slate-200 rounded-lg">
            <div className="w-fit flex flex-col gap-8">
              <button className="w-fit bg-slate-200/70 px-3 rounded-md">
                <span className="text-sm font-semibold text-slate-500">
                  AI / LLM SaaS
                </span>
              </button>

              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>

                <div className="flex flex-row justify-start items-center gap-2">
                  <div className="bg-orange-300 p-1 rounded-md">
                    <img
                      src={FigmaIcon}
                      alt="figma-icon"
                      loading="lazy"
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-sm font-semibold">Figma</p>
                    <p className="text-xs text-slate-500">Design Platform</p>
                  </div>
                </div>

                <a href="/" className="text-cyan-500 font-semibold">
                  Case Study {">"}
                </a>
              </div>
            </div>

            <div className="w-full">
              <ChartLine />
            </div>

            <div className="flex flex-row justify-center items-end pl-8 gap-2">
              <button className="bg-white py-1 px-3 border border-slate-300 rounded-lg">
                <span>{"<"}</span>
              </button>
              <button className="bg-white py-1 px-3 border border-slate-300 rounded-lg">
                <span>{">"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
