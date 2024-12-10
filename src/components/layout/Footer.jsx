import React from "react";

function Footer() {
  return (
    <footer className="w-full mx-auto">
      <div className="bg-lightGray-500 grid grid-flow-row px-32 border-t border-lightGray-700 border-dashed">
        <div className="grid grid-cols-4">
          <div className="py-14 border-x border-lightGray-700 border-dashed">
            <h2 className="text-darkGray-500">Border</h2>
          </div>

          <div className="flex flex-col py-14 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-darkGray-500 font-semibold">
                Company
              </h3>

              <ul className="flex flex-col text-sm gap-2">
                {["Home", "About", "Blog", "Contact"].map((item) => (
                  <a
                    href="#"
                    key={item}
                    className="text-sm text-darkGray-300 hover:text-lightGray-800 rounded-lg
                 transition-colors duration-300 focus:ring-2 focus:ring-lightGray-700 
                 focus:outline-none"
                  >
                    <span className="hover:underline">{item}</span>
                  </a>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Industries</h3>

              <ul className="flex flex-col text-sm gap-2">
                {["SaaS", "Fintech"].map((item) => (
                  <a
                    href="#"
                    key={item}
                    className="text-sm text-darkGray-300 hover:text-lightGray-800 rounded-lg
                 transition-colors duration-300 focus:ring-2 focus:ring-lightGray-700 
                 focus:outline-none"
                  >
                    <span className="hover:underline">{item}</span>
                  </a>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Locations</h3>

              <ul className="flex flex-col text-sm gap-2">
                {["London, UK", "Berlin, Germany", "Bogor"].map((item) => (
                  <a
                    href="#"
                    key={item}
                    className="text-sm text-darkGray-300 hover:text-lightGray-800 rounded-lg
                 transition-colors duration-300 focus:ring-2 focus:ring-lightGray-700 
                 focus:outline-none"
                  >
                    <span className="hover:underline">{item}</span>
                  </a>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col py-14 gap-8 border-l border-lightGray-700 border-dashed">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-darkGray-500 font-semibold">
                Services
              </h3>

              <ul className="flex flex-col text-sm gap-2">
                {[
                  "Content Marketing",
                  "B2B SEO",
                  "Development & CRO",
                  "Programmatic SEO",
                  "Data Analytics",
                ].map((item) => (
                  <a
                    href="#"
                    key={item}
                    className="text-sm text-darkGray-300 hover:text-lightGray-800 rounded-lg
                 transition-colors duration-300 focus:ring-2 focus:ring-lightGray-700 
                 focus:outline-none"
                  >
                    <span className="hover:underline">{item}</span>
                  </a>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Case studies</h3>

              <ul className="flex flex-col text-sm gap-2">
                {["Lorem", "Ipsum", "Dolor", "Sit amet"].map((item) => (
                  <a
                    href="#"
                    key={item}
                    className="text-sm text-darkGray-300 hover:text-lightGray-800 rounded-lg
                 transition-colors duration-300 focus:ring-2 focus:ring-lightGray-700 
                 focus:outline-none"
                  >
                    <span className="hover:underline">{item}</span>
                  </a>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-14 border-x border-lightGray-700 border-dashed">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-darkGray-500 font-semibold">
                Knowledge
              </h3>

              <ul className="flex flex-col text-sm gap-2">
                {[
                  "Development & CRO",
                  "Programmatic SEO",
                  "Data Analytics",
                  "Machine Learning",
                  "Deep Learning",
                ].map((item) => (
                  <a
                    href="#"
                    key={item}
                    className="text-sm text-darkGray-300 hover:text-lightGray-800 rounded-lg
                 transition-colors duration-300 focus:ring-2 focus:ring-lightGray-700 
                 focus:outline-none"
                  >
                    <span className="hover:underline">{item}</span>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-lightGray-700 border-dashed">
          <div className="flex flex-col py-4 gap-2 border-l border-lightGray-700 border-dashed">
            <h2 className="font-semibold">Stay up to date</h2>

            <p className="text-sm text-darkGray-300/60">
              Receive Growth OpenLetter once a month. No spam, only value.
            </p>
          </div>

          <div className="flex justify-center items-center border-x border-lightGray-700 border-dashed">
            <form
              className="flex w-full border border-dashed border-lightGray-700 overflow-hidden bg-slate-50/30"
              aria-label="Newsletter"
            >
              <input
                type="email"
                name="Newsletter"
                id="Newsletter"
                placeholder="Your business email"
                className="flex-1 px-3 py-2 text-sm text-gray-600 bg-transparent outline-none placeholder-darkGray-300/60"
                maxLength="256"
              />
              <button
                type="submit"
                className="group w-fit py-1 px-3 border border-lightGray-700 rounded-lg 
              bg-lightGray-500 hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none active:bg-lightGray-700 transition duration-300"
              >
                <span className="text-sm text-darkGray-500 group-hover:text-darkGray-400 group-active:text-darkGray-300">
                  Subscribe
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-t border-x border-lightGray-700 border-dashed">
          <p className="text-sm text-darkGray-300/60">
            © 2024 Border. All rights reserved.
          </p>

          <div className="flex flex-row justify-center items-center p-1 border border-lightGray-700 rounded-xl">
            <button className="group px-3 py-1 rounded-lg bg-lightGray-600 hover:bg-lightGray-700 focus:ring-2 focus:ring-lightGray-800 focus:outline-none active:bg-lightGray-800 transition duration-300">
              <span className="text-sm font-semibold text-darkGray-300 group-hover:text-darkGray-200 group-active:text-darkGray-100">
                Language
              </span>
            </button>

            <button className="px-3 py-1 rounded-lg">
              <span className="text-sm font-semibold text-darkGray-300/60">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
