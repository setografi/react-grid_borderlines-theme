import React from "react";
import TabOne from "../../assets/tabs-01.jpg";

function Tabs() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="px-32 border-t border-slate-300 border-dashed">
        <div className="border-x border-slate-300 border-dashed">
          <div className="grid grid-cols-2 border border-slate-200 rounded-lg p-10 group hover:shadow-xl overflow-hidden duration-300 transition-all ">
            <div className="flex flex-col justify-between items-start">
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-semibold leading-snug">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet aspernatur sapiente suscipit maiores,
                </p>

                <p>
                  cumque aperiam nobis expedita doloremque corrupti deleniti!
                  Aliquam, at ex in quo atque porro beatae expedita libero.
                </p>
              </div>

              <a href="/" className="text-cyan-500 font-semibold">
                Explore how we do SEO {">"}
              </a>
            </div>

            <div className="flex justify-end items-center">
              <img
                width={1080}
                height={1080}
                src={TabOne}
                alt="mediamodifier-p54tLz-qp5E-unsplash"
                className="w-96 h-96 object-cover group-hover:scale-105 duration-300 transition-transform"
              />
            </div>
          </div>

          <div className="flex justify-center items-center mt-6 pb-24">
            <div className="flex justify-center items-center gap-2 p-1 border border-slate-200 rounded-2xl">
              <button className="bg-slate-200/70 px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold ">SEO</span>
              </button>
              <button className="px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold text-slate-500">
                  Content Marketing
                </span>
              </button>
              <button className="px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold text-slate-500">
                  Development & CRO
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
