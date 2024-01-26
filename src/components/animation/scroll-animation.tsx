"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import React, { ReactNode } from "react";

const ScrollAnimate = ({ children }: { children: ReactNode }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["01", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default ScrollAnimate;