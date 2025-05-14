"use client";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";


export function InfiniteMovingCardsFoods() {
  return (
    <div className="  rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "Hamburguesas",
    src: "/assets/img13.webp",
  },
  {
    title: "Hot-Dog de Alambre",
    src: "/assets/img3.webp",
  },
  {
    title: "Hot-Dog de Chorizo",
    src: "/assets/img4.webp",
  },
  {
    title: "TostiElote Picante",
    src: "/assets/img5.webp",
  },
  {
    title: "Hot-Dog de Champiñon",
    src: "/assets/img8.webp",
  },
  {
    title: "Combo Hot-Dog",
    src: "/assets/img10.webp",
  },
  {
    title: "Boneless",
    src: "/assets/img11.webp",
  },
  {
    title: "Combo Hamburguesa",
    src: "/assets/img12.webp",
  }
];
