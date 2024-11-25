import React from "react";
import FigmaIcon from "../../assets/figma.svg";

function Services() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="grid grid-cols-4 px-32 gap-2 border-y border-slate-300 border-dashed">
        <div className="flex flex-col justify-between items-center p-6 border border-slate-200 rounded-lg">
          <div className="w-40 h-40 p-6">
            <img
              src={FigmaIcon}
              alt="Lorem ipsum dolor sit amet"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Lorem</h3>
            <p className="text-sm text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              tempore nobis est id.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center p-6 border border-slate-200 rounded-lg">
          <div className="w-40 h-40 p-6">
            <img
              src={FigmaIcon}
              alt="Lorem ipsum dolor sit amet"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Lorem</h3>
            <p className="text-sm text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              tempore nobis est id.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center p-6 border border-slate-200 rounded-lg">
          <div className="w-40 h-40 p-6">
            <img
              src={FigmaIcon}
              alt="Lorem ipsum dolor sit amet"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Lorem</h3>
            <p className="text-sm text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              tempore nobis est id.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center p-6 border border-slate-200 rounded-lg">
          <div className="w-40 h-40 p-6">
            <img
              src={FigmaIcon}
              alt="Lorem ipsum dolor sit amet"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold">Lorem</h3>
            <p className="text-sm text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              tempore nobis est id.
            </p>
          </div>
        </div>
      </div>

      <div className="h-24 grid grid-cols-[30%_1fr] px-32 border-b border-slate-300 border-dashed">
        <div className="border-x border-slate-300 border-dashed"></div>

        <div className="grid grid-cols-5 border-r border-slate-300 border-dashed"></div>
      </div>
    </section>
  );
}

export default Services;
