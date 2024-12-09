import React from "react";

function Footer() {
  return (
    <footer className="w-full mx-auto">
      <div className="grid grid-flow-row px-32 border-t border-slate-300 border-dashed">
        <div className="grid grid-cols-4">
          <div className="py-14 border-x border-slate-300 border-dashed">
            <h2>Border</h2>
          </div>

          <div className="flex flex-col py-14 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Company</h3>

              <ul className="flex flex-col text-sm gap-2">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Industries</h3>

              <ul className="flex flex-col text-sm gap-2">
                <a href="">SaaS</a>
                <a href="">Fintech</a>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Locations</h3>

              <ul className="flex flex-col text-sm gap-2">
                <a href="">London, UK</a>
                <a href="">Berlin, Germany</a>
                <a href="">Bogor</a>
              </ul>
            </div>
          </div>

          <div className="flex flex-col py-14 gap-8 border-l border-slate-300 border-dashed">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Services</h3>

              <ul className="flex flex-col text-sm gap-2">
                <a href="">Content Marketing</a>
                <a href="">B2B SEO</a>
                <a href="">Development & CRO</a>
                <a href="">Programmatic SEO</a>
                <a href="">Data Analytics</a>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Case studies</h3>

              <ul className="flex flex-col text-sm gap-2">
                <a href="">Lorem ipsum dolor sit amet</a>
                <a href="">Lorem ipsum dolor sit amet</a>
                <a href="">Lorem ipsum dolor sit amet</a>
                <a href="">Lorem ipsum dolor sit amet</a>
                <a href="">Lorem ipsum dolor sit amet</a>
                <a href="">Lorem ipsum dolor sit amet</a>
              </ul>
            </div>
          </div>

          <div className="py-14 border-x border-slate-300 border-dashed">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm">Knowledge</h3>

              <ul className="flex flex-col text-sm gap-2">
                <a href="">Content Marketing</a>
                <a href="">B2B SEO</a>
                <a href="">Development & CRO</a>
                <a href="">Programmatic SEO</a>
                <a href="">Data Analytics</a>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-slate-300 border-dashed">
          <div className="flex flex-col py-4 gap-2 border-l border-slate-300 border-dashed">
            <h2 className="font-semibold">Stay up to date</h2>

            <p className="text-sm text-slate-500">
              Receive Growth OpenLetter once a month. No spam, only value.
            </p>
          </div>

          <div className="flex justify-center items-center border-x border-slate-300 border-dashed">
            <form
              className="flex w-full border border-dashed border-slate-300 overflow-hidden bg-slate-50/30"
              aria-label="Omnius Newsletter"
            >
              <input
                type="email"
                name="Newsletter"
                id="Newsletter"
                placeholder="Your business email"
                className="flex-1 px-3 py-2 text-sm text-gray-600 bg-transparent outline-none placeholder-gray-400"
                maxLength="256"
              />
              <button
                type="submit"
                className="px-3 text-sm font-semibold text-black bg-white border border-slate-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-t border-x border-slate-300 border-dashed">
          <p className="text-sm text-slate-500">
            © 2024 Border. All rights reserved.
          </p>

          <div className="flex flex-row justify-center items-center p-1 border border-slate-300 rounded-xl">
            <button className="bg-slate-300/70 py-1 px-3 rounded-lg">
              <span className="text-sm">Language</span>
            </button>
            <button className="py-1 px-3 rounded-lg">
              <span className="text-sm">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
