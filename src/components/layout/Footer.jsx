import React from "react";

function Footer() {
  return (
    <footer className="w-full grid grid-flow-row mx-auto">
      <div className="px-32 border-t border-slate-300 border-dashed">
        <div className="h-28 grid grid-cols-4 ">
          <div className="h-full pt-14 border-x border-slate-300 border-dashed">
            <h2>Border</h2>
          </div>
          <div className="flex flex-row pt-14">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-sm">Company</h3>

              <ul className="flex flex-col text-sm gap-1">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
              </ul>
            </div>
          </div>
          <div className="pt-14 border-l border-slate-300 border-dashed"></div>
          <div className="pt-14 border-x border-slate-300 border-dashed"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
