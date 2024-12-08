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
      <div className="grid grid-cols-[30%_1fr] px-32 border-b border-slate-300 border-dashed">
        <div className="flex justify-start items-start p-4 border-x border-slate-300 border-dashed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero
            modi quas optio aliquam sit veniam accusantium.
          </p>
        </div>

        <div className="grid grid-cols-5 grid-rows-3 p-6 gap-8  border-r border-slate-300 border-dashed">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white flex items-center justify-center text-center border border-slate-200 rounded-lg"
            >
              {sponsor}
            </div>
          ))}
        </div>
      </div>

      <div className="h-40 grid grid-flow-col px-32 border-b border-slate-300 border-dashed">
        <div className="border-x border-slate-300 border-dashed"></div>
      </div>

      <div className="grid grid-flow-row px-32 border-b border-slate-300 border-dashed">
        <div className="border-x border-b border-slate-300 border-dashed">
          <h2 className="text-4xl w-80 font-semibold leading-snug">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>

        <div className="grid grid-cols-2 border-x border-slate-300 border-dashed">
          <div className="pt-12 w-80">
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dignissimos expedita, eligendi ipsum quos.
            </p>
          </div>

          <div className="border-l border-slate-300 border-dashed pt-12 w-80">
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              dignissimos expedita, eligendi ipsum quos.
            </p>
          </div>
        </div>

        <div className="border-x border-t h-[5.8rem] border-slate-300 border-dashed"></div>
      </div>
    </section>
  );
}

export default Logo;
