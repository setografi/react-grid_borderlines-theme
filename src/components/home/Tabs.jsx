import React from "react";
import TabOne from "../../assets/tabs-clean-code.svg";

function Tabs() {
  return (
    <section className="w-full bg-lightGray-500 grid grid-flow-row mx-auto">
      <div className="px-8 md:px-32 border-t border-lightGray-700 border-dashed">
        <div className="border-x border-lightGray-700 border-dashed">
          <div className="group grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 border border-lightGray-700 rounded-lg hover:shadow-xl shadow-darkGray-700 duration-300 transition-all overflow-hidden">
            <div className="flex flex-col justify-between items-start gap-6">
              <div className="flex flex-col space-y-4 md:space-y-6">
                <h2 className="text-darkGray-500 text-2xl md:text-3xl font-semibold leading-snug">
                  Search Engine Optimization (SEO)
                </h2>

                <p className="text-darkGray-300/60 text-sm md:text-base">
                  Boost your website’s visibility on search engines with
                  cutting-edge strategies that drive organic traffic.
                </p>

                <p className="text-darkGray-300/60 text-sm md:text-base">
                  Our expert team ensures your content ranks higher, bringing in
                  more qualified leads to grow your business.
                </p>
              </div>

              <a
                href="/"
                className="w-fit text-cyan-500 text-sm font-semibold hover:text-cyan-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none active:text-cyan-700 transition duration-200"
              >
                Case Study <i className="ri-arrow-right-s-line"></i>
              </a>
            </div>

            <div className="w-60 md:w-96 h-60 md:h-96 flex justify-end items-center">
              <img
                width={1080}
                height={1080}
                src={TabOne}
                alt="mediamodifier-p54tLz-qp5E-unsplash"
                className="w-full h-full object-cover group-hover:scale-105 duration-300 transition-transform"
              />
            </div>
          </div>

          <div className="flex justify-center items-center mt-6 pb-24">
            <div className="flex justify-center items-center gap-2 p-1 border border-lightGray-700 rounded-2xl">
              <button className="group px-3 md:px-4 py-1 md:py-2 rounded-xl bg-lightGray-600 hover:bg-lightGray-700 focus:ring-2 focus:ring-lightGray-800 focus:outline-none active:bg-lightGray-800 transition duration-300">
                <span className="text-darkGray-300 text-xs md:text-sm font-semibold group-hover:text-darkGray-200 group-active:text-darkGray-100">
                  SEO
                </span>
              </button>

              <button className="px-3 md:px-4 py-1 md:py-2 rounded-xl">
                <span className="text-darkGray-300/60 text-xs md:text-sm font-semibold">
                  Content Marketing
                </span>
              </button>

              <button className="px-3 md:px-4 py-1 md:py-2 rounded-xl">
                <span className="text-darkGray-300/60 text-xs md:text-sm font-semibold">
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
