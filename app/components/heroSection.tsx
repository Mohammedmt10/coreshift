import React from 'react'
import { FlowDiagram } from './flowDiagram'

export const HeroSection = () => {
  return (
    <div>
        <div className="pt-20">
        <FlowDiagram />
      </div>
        <div className="font-grostesk text-center mt-15">
        <h1 className="text-7xl font-medium tracking-tighter">
          All-in-one HR <br />
          platform
        </h1>
        <p className="text-neutral-400 font-inter my-5">
          CoreShift is a modern, all-in-one HR platform <br />
          designed to perfectly fit your business needs
        </p>
        <button className="bg-linear-to-b from-[#ff7d61] text-shadow-2xs to-[#fe6a4c] text-[#ffeeea] px-10 py-2 rounded-lg cursor-pointer">
          Request a Demo
        </button>
      </div>
    </div>
  )
}
