import React from "react";

function Cta() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="px-8 md:px-32 border-t border-lightGray-700 border-dashed">
        <div className="border-x border-lightGray-700 border-dashed">
          <div className="relative h-[450px] bg-darkGray-500 flex flex-col items-center p-5 md:p-10 rounded-xl overflow-hidden">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14">
                <a href="/">
                  <span className="text-lightGray-500 text-xl font-bold">
                    Border
                  </span>
                </a>
              </div>

              <h2 className="text-lightGray-500 text-3xl md:text-4xl font-semibold text-center">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-lightGray-500 text-sm md:text-base text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Id mollitia natus quia, sit est odit minus quisquam quae
                ut aperiam?
              </p>
            </div>

            <button
              className="group w-fit bg-lightGray-500 px-4 py-2 mt-8 border border-lightGray-700 rounded-lg 
               hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none active:bg-lightGray-700 transition duration-300"
            >
              <span className="text-sm text-darkGray-500 group-hover:text-darkGray-400 group-active:text-darkGray-300">
                Get starterd
              </span>
            </button>

            <div
              className="absolute -bottom-6 md:-bottom-14 flex justify-between"
              style={{ fontSize: "calc(1rem + 10vw)" }}
            >
              {"Border Logo".split("").map((letter, index) => (
                <span
                  key={index}
                  className="text-darkGray-100/40 font-semibold uppercase"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-32 border-t border-lightGray-700 border-dashed">
        <div className="h-24 md:h-28 grid grid-cols-4 border-x border-lightGray-700 border-dashed">
          <div></div>
          <div className="border-l border-lightGray-700 border-dashed"></div>
          <div className="border-l border-lightGray-700 border-dashed"></div>
          <div className="border-l border-lightGray-700 border-dashed"></div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
