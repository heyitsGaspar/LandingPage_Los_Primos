"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";


export function ColourfulTextDemo() {
  return (
    <div className=" min-h-[40vh] w-full flex items-center justify-center relative overflow-hidden ">
      
      <h1 className="text-3xl md:p-5  md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-poppins">
        <ColourfulText text="Explora nuestros Productos" /> 
      </h1>
    </div>
  );
}
