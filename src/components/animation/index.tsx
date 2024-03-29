import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { opacity, expand } from "./anim";

export default function Stairs({ children }: { children: ReactNode }) {
  const anim = (variants: any, custom: number | null = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;
  const nbofColumnsMobile = 3;
  return (
    <div className="page stairs z-50 relative">
      <motion.div {...anim(opacity)} className="transition-background" />
      <div className="transition-container hidden md:block">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
        })}
      </div>
      <div className="transition-container md:block">
        {[...Array(nbofColumnsMobile)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
        })}
      </div>
      {children}
    </div>
  );
}
