import React from "react";

function Cta() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="px-32 border-t border-lightGray-700 border-dashed">
        <div className="border-x border-lightGray-700 border-dashed">
          <div className="relative h-[450px] bg-darkGray-500 flex flex-col items-center p-16 rounded-xl overflow-hidden">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14">
                {/* <img
                  width={1080}
                  height={1080}
                  src={CtaIcon}
                  alt="Cta Animation"
                  className="w-full h-full object-cover"
                /> */}
                <a href="/">
                  <span className="text-xl text-lightGray-500 font-bold">
                    Border
                  </span>
                </a>
              </div>

              <h1 className="text-4xl text-lightGray-500 font-semibold">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-lightGray-500 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Id mollitia natus quia, sit est odit minus quisquam quae
                ut aperiam?
              </p>
            </div>

            <button className="bg-lightGray-500 px-4 py-2 mt-8 rounded-full">
              <span className="text-darkGray-500 font-semibold">
                Get starterd
              </span>
            </button>

            <div
              className="absolute -bottom-14 flex justify-between"
              style={{ fontSize: "calc(1rem + 10vw)" }}
            >
              {"Border Logo".split("").map((letter, index) => (
                <span
                  key={index}
                  className="text-darkGray-100/40 font-semibold uppercase "
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-32 border-t border-lightGray-700 border-dashed">
        <div className="h-28 grid grid-cols-4 border-x border-lightGray-700 border-dashed">
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
