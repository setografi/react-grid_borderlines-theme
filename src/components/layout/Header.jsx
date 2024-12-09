import React from "react";

function Header() {
  return (
    <header className="fixed w-full mx-auto px-32 z-50">
      <div className="bg-lightGray-500 flex flex-row justify-between py-4 border-x border-lightGray-700 border-dashed">
        <div className="flex flex-row justify-center items-center">
          <a href="/">
            <span className="font-bold text-xl">Border</span>
          </a>

          <nav className="ml-12 flex flex-row justify-center items-center space-x-8">
            {["Services", "Company", "Industries", "Knowledge"].map((item) => (
              <a
                href="#"
                key={item}
                className="text-sm text-darkGray-300 py-1 px-3 hover:text-lightGray-800 rounded-lg
                 transition-colors duration-300 focus:ring-2 focus:ring-lightGray-700 
                 focus:outline-none"
              >
                <span className="hover:underline">{item}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-row justify-center items-center space-x-4">
          <button
            className="group w-fit py-1 px-3 border border-lightGray-700 rounded-lg 
              bg-lightGray-500 hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none active:bg-lightGray-700 transition duration-300"
          >
            <span className="text-sm text-darkGray-500 group-hover:text-darkGray-400 group-active:text-darkGray-300">
              Language
            </span>
          </button>

          <button
            className="group w-fit py-1 px-3 border border-lightGray-700 rounded-lg 
              bg-lightGray-500 hover:bg-lightGray-600 focus:ring-2 focus:ring-lightGray-700 focus:outline-none active:bg-lightGray-700 transition duration-300"
          >
            <span className="text-sm text-darkGray-500 group-hover:text-darkGray-400 group-active:text-darkGray-300">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
