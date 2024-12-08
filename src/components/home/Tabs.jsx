import React from "react";
import FigmaIcon from "../../assets/figma.svg";

function Tabs() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="px-32 border-t border-slate-300 border-dashed grid grid-cols-2">
        <div className="border-x border-slate-300 border-dashed p-10">
          <h1 className="text-3xl font-semibold leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            aspernatur sapiente suscipit maiores, cumque aperiam nobis expedita
            doloremque corrupti deleniti! Aliquam, at ex in quo atque porro
            beatae expedita libero.
          </p>
        </div>

        <div>
          <img src={FigmaIcon} alt="Tabs Content" />
        </div>
      </div>
    </section>
  );
}

export default Tabs;
