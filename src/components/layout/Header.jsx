import React from "react";

function Header() {
  return (
    <header className="fixed w-full mx-auto px-32 z-50">
      <div className="bg-white flex flex-row justify-between py-4 border-x border-slate-300 border-dashed">
        <div className="flex flex-row justify-center items-center">
          <a href="/">
            <span className="font-bold text-xl">Border</span>
          </a>

          <nav className="ml-16 flex flex-row justify-center items-center space-x-8">
            <a href="">
              <span className="text-sm text-slate-500">Services</span>
            </a>
            <a href="">
              <span className="text-sm text-slate-500">Company</span>
            </a>
            <a href="">
              <span className="text-sm text-slate-500">Industries</span>
            </a>
            <a href="">
              <span className="text-sm text-slate-500">Knowledge</span>
            </a>
          </nav>
        </div>

        <div className="flex flex-row justify-center items-center space-x-8">
          <button className="py-1 px-3 border border-slate-300 rounded-lg">
            <span className="text-sm">Language</span>
          </button>
          <button className="py-1 px-3 border border-slate-300 rounded-lg">
            <span className="text-sm">Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
