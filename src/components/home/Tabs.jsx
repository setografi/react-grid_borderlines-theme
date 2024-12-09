import React from "react";
import TabOne from "../../assets/tabs-clean-code.svg";

function Tabs() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="px-32 border-t border-lightGray-700 border-dashed">
        <div className="border-x border-lightGray-700 border-dashed">
          <div className="grid grid-cols-2 border border-lightGray-700 rounded-lg p-10 group hover:shadow-xl shadow-darkGray-700 overflow-hidden duration-300 transition-all ">
            <div className="flex flex-col justify-between items-start">
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-semibold text-darkGray-500 leading-snug">
                  Search Engine Optimization (SEO)
                </h1>

                <p className="text-darkGray-300/60">
                  Boost your website’s visibility on search engines with
                  cutting-edge strategies that drive organic traffic.
                </p>

                <p className="text-darkGray-300/60">
                  Our expert team ensures your content ranks higher, bringing in
                  more qualified leads to grow your business.
                </p>
              </div>

              <a
                href="/"
                className="w-fit text-sm text-cyan-500 font-semibold hover:text-cyan-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none active:text-cyan-700 transition duration-200"
              >
                Case Study <i class="ri-arrow-right-s-line"></i>
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
            <div className="flex justify-center items-center gap-2 p-1 border border-lightGray-700 rounded-2xl">
              <button className="group px-4 py-2 rounded-xl bg-lightGray-600 hover:bg-lightGray-700 focus:ring-2 focus:ring-lightGray-800 focus:outline-none active:bg-lightGray-800 transition duration-300">
                <span className="text-sm font-semibold text-darkGray-300 group-hover:text-darkGray-200 group-active:text-darkGray-100">
                  SEO
                </span>
              </button>

              <button className="px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold text-darkGray-300/60">
                  Content Marketing
                </span>
              </button>

              <button className="px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold text-darkGray-300/60">
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
