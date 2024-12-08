import React from "react";
import CtaIcon from "../../assets/react.svg";

function Cta() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="px-32 border-t border-slate-300 border-dashed">
        <div className="border-x border-slate-300 border-dashed">
          <div className="relative h-[450px] bg-black flex flex-col items-center p-16 rounded-xl">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12">
                <img
                  src={CtaIcon}
                  alt="Cta Animation"
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-4xl text-white font-semibold">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-white text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Id mollitia natus quia, sit est odit minus quisquam quae
                ut aperiam?
              </p>
            </div>

            <button className="bg-white px-4 py-2 mt-8 rounded-full">
              <span className="text-black font-semibold">Get starterd</span>
            </button>

            <div
              className="absolute -bottom-16 flex justify-between"
              style={{ fontSize: "calc(1rem + 10vw)" }}
            >
              {"Border Logo".split("").map((letter, index) => (
                <span
                  key={index}
                  className="text-slate-300/10 font-semibold uppercase "
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-32 border-t border-slate-300 border-dashed">
        <div className="h-28 grid grid-cols-4 border-x border-slate-300 border-dashed">
          <div className="border-r border-slate-300 border-dashed"></div>
          <div className="border-r border-slate-300 border-dashed"></div>
          <div className="border-r border-slate-300 border-dashed"></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
