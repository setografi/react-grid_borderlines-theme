import React, { useState } from "react";
import tabsData from "../../constants/tabsData";
import TabOne from "../../assets/tabs-clean-code.svg";

function Tabs() {
  const [activeTab, setActiveTab] = useState("seo");

  const activeTabIndex = tabsData.findIndex((tab) => tab.id === activeTab);

  return (
    <section className="w-full mx-auto">
      <div className="px-8 md:px-16 lg:px-32 border-t border-lightGray-700 border-dashed">
        <div className="border-x border-lightGray-700 border-dashed">
          <div className="relative overflow-hidden">
            {/* Tabs Content */}
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeTabIndex * 100}%)` }}
            >
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className="group flex-shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 p-5 md:p-10 border border-lightGray-700 rounded-lg hover:shadow-xl shadow-darkGray-700 duration-300 transition-all overflow-hidden"
                >
                  <div className="flex flex-col justify-center lg:justify-between items-start gap-6 md:gap-8 lg:gap-0">
                    <div className="flex flex-col space-y-4 lg:space-y-6">
                      <h2 className="text-darkGray-500 text-2xl md:text-3xl font-semibold leading-snug">
                        {tab.title}
                      </h2>

                      {tab.description.map((text, index) => (
                        <p
                          key={index}
                          className="text-darkGray-300/60 text-sm md:text-base"
                        >
                          {text}
                        </p>
                      ))}
                    </div>

                    <a
                      href="/"
                      className="w-fit text-cyan-500 text-sm font-semibold hover:text-cyan-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none active:text-cyan-700 transition duration-200"
                    >
                      {tab.buttonText} <i className="ri-arrow-right-s-line"></i>
                    </a>
                  </div>

                  <div className="w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 justify-self-center md:justify-self-start lg:justify-self-end">
                    <img
                      width={1080}
                      height={1080}
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-full object-cover group-hover:scale-105 duration-300 transition-transform"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs Buttons */}
          <div className="flex justify-center items-center mt-6 pb-24">
            <div className="flex justify-center items-center gap-2 p-1 border border-lightGray-700 rounded-2xl">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 md:px-4 py-1 md:py-2 rounded-xl transition duration-300 ${
                    activeTab === tab.id
                      ? "bg-lightGray-600 text-darkGray-300"
                      : "text-darkGray-300/60"
                  }`}
                >
                  <span
                    className={`text-xs md:text-sm font-semibold ${
                      activeTab === tab.id
                        ? "text-darkGray-200"
                        : "group-hover:text-darkGray-200"
                    }`}
                  >
                    {tab.buttonTabs}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
