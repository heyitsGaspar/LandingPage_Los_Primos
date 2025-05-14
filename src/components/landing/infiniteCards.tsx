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
    src: "/assets/img2.webp",
  },
  {
    title: "Hamburguesas",
    src: "/assets/img2.webp",
  },
  {
    title: "Hamburguesas",
    src: "/assets/img2.webp",
  },
  {
    title: "Hamburguesas",
    src: "/assets/img2.webp",
  },
];
