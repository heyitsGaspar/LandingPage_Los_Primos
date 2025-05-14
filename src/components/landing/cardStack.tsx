"use client";

import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackFoods() {
  return (
    <div className="h-[20rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Hamburguer1",
    image: '/assets/img14.webp',
   

  },
  {
    id: 1,
    name: "Hamburguer2",
    image: '/assets/img15.webp',
 
   
  },
  {
    id: 2,
    name: "Hamburguer3",
    image: '/assets/img16.webp',
    
   
  },
  {
    id: 3,
    name: "Hamburguer4",
    image: '/assets/img17.webp',
    
   
  },
  {
    id: 4,
    name: "Hamburguer5",
    image: '/assets/img18.webp',
    
   
  },{
    id: 5,
    name: "Hamburguer6",
    image: '/assets/img19.webp',
    
   
  },
  {
    id: 6,
    name: "Hamburguer7",
    image: '/assets/img22.webp',
    
   
  },
];
