import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";

export function AboutUs() {
  return (
    <div className="relative flex h-[100vh] w-full overflow-hidden  bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b text-tittle bg-clip-text text-center text-4xl font-bold  md:text-8xl">
          Sobre nosotros
        </h1>
        <p className="mx-auto mt-4 font-poppins font-medium text-xl max-w-lg text-center text-neutral-300">
          En Los Primos, somos un equipo apasionado por la comida deliciosa y la diversión. Nos especializamos en ofrecerte una experiencia gastronómica única con nuestras hamburguesas jugosas, hot dogs irresistibles y esquites con el toque perfecto. Nuestro compromiso es brindarte calidad, sabor y un ambiente acogedor para que disfrutes de cada bocado. ¡Ven y descubre por qué somos los primos de la buena comida!
        </p>
      </div>
    </div>
  );
}
