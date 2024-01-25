"use client";

import React, { ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed h-1 inset-0 bg-primary origin-[0]"
        style={{ scaleX }}
      />
      {children}
    </>
  );
};

export default ScrollProgress;
