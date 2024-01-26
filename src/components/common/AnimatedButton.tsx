import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface MotionButtonProps extends MotionProps {
  children?: ReactNode;
  whileTap?: { scale: number };
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const AnimatedButton: FC<MotionButtonProps> = ({
  children,
  whileTap,
  ...rest
}) => {
  return (
    <motion.button whileTap={whileTap} {...rest}>
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
