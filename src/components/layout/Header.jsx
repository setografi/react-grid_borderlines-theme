import React from "react";

function Header() {
  return (
    <header className="fixed w-full bg-lightGray-500 mx-auto z-50">
      <div className="px-8 md:px-16 lg:px-32">
        <div className="flex flex-row justify-between py-4 border-x border-lightGray-700 border-dashed">
          <div className="flex flex-row justify-center items-center">
            <a href="/">
              <span className="font-bold text-xl">Border</span>
            </a>

            <nav className="hidden lg:flex flex-row justify-center items-center space-x-8 ml-12">
              {["Services", "Company", "Industries", "Knowledge"].map(
                (item) => (
                  <a
                    href="#"
                    key={item}
                    className="text-sm text-darkGray-300 py-1 px-3 hover:text-lightGray-800 rounded-lg
                 transition-colors duration-300 focus:ring-2 focus:ring-lightGray-700 
                 focus:outline-none"
                  >
                    <span className="hover:underline">{item}</span>
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="hidden lg:flex flex-row justify-center items-center space-x-4">
            <button className="group w-fit bg-lightGray-500 py-1 px-3 border border-lightGray-700 rounded-lg hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none active:bg-lightGray-700 transition duration-300">
              <span className="text-sm text-darkGray-500 group-hover:text-darkGray-400 group-active:text-darkGray-300">
                Language
              </span>
            </button>

            <button className="group w-fit bg-lightGray-500 py-1 px-3 border border-lightGray-700 rounded-lg hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none active:bg-lightGray-700 transition duration-300">
              <span className="text-sm text-darkGray-500 group-hover:text-darkGray-400 group-active:text-darkGray-300">
                Get Started
              </span>
            </button>
          </div>

          <div className="block lg:hidden">
            <i className="ri-menu-3-line ri-lg"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
