import React from "react";

const sponsors = [
  "Sponsor 01",
  "Sponsor 02",
  "Sponsor 03",
  "Sponsor 04",
  "Sponsor 05",
  "Sponsor 06",
  "Sponsor 07",
  "Sponsor 08",
  "Sponsor 09",
  "Sponsor 10",
  "Sponsor 11",
  "Sponsor 12",
  "Sponsor 13",
  "Sponsor 14",
  "Sponsor 15",
];

function Logo() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="grid lg:grid-cols-[30%_1fr] px-8 md:px-16 lg:px-32 border-b border-lightGray-700 border-dashed">
        <div className="flex justify-start items-start p-4 border-x border-lightGray-700 border-dashed">
          <p className="text-darkGray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero
            modi quas optio aliquam sit veniam accusantium.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-3 p-4 md:p-6 gap-4 md:gap-8 md:border-t border-x lg:border-l-0 border-lightGray-700 border-dashed">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-lightGray-500 flex items-center justify-center text-center border border-lightGray-700 rounded-lg"
            >
              <p className="text-darkGray-300/60 text-sm md:text-base">
                {sponsor}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-24 md:h-40 grid grid-flow-col px-8 md:px-16 lg:px-32 border-b border-lightGray-700 border-dashed">
        <div className="border-x border-lightGray-700 border-dashed"></div>
      </div>

      <div className="grid grid-flow-row px-8 md:px-16 lg:px-32 border-b border-lightGray-700 border-dashed">
        <div className="border-x border-b border-lightGray-700 border-dashed">
          <h2 className="text-darkGray-500 text-2xl md:text-3xl md:w-80 font-semibold leading-snug">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-x border-lightGray-700 border-dashed">
          <div className="pt-6 md:pt-12 md:w-80">
            <p className="text-darkGray-500 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dignissimos expedita, eligendi ipsum quos.
            </p>
          </div>

          <div className="border-l border-lightGray-700 border-dashed pt-6 md:pt-12 md:w-80">
            <p className="text-darkGray-500 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dignissimos expedita, eligendi ipsum quos.
            </p>
          </div>
        </div>

        <div className="border-x border-t h-24 md:h-[5.8rem] border-lightGray-700 border-dashed"></div>
      </div>
    </section>
  );
}

export default Logo;
