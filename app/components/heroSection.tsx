import React from "react";
import { FlowDiagram } from "./flowDiagram";

export const HeroSection = () => {
  return (
    <div>
      <div className="pt-30">
        <FlowDiagram />
      </div>
      <div className="mt-15 text-center font-grostesk">
        <h1 className="text-7xl font-medium tracking-tighter">
          All-in-one HR <br />
          platform
        </h1>
        <p className="my-5 font-inter text-neutral-400">
          CoreShift is a modern, all-in-one HR platform <br />
          designed to perfectly fit your business needs
        </p>
        <button className="cursor-pointer rounded-lg bg-linear-to-b from-[#ff7d61] to-[#fe6a4c] px-10 py-2 text-[#ffeeea] text-shadow-2xs">
          Request a Demo
        </button>
      </div>
    </div>
  );
};
