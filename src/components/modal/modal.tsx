import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface IModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
}

const spring = {
  type: "linear",
};

const itemVariants = {
  hidden: { display: "none", opacity: 0 },
  visible: { display: "flex", opacity: 1 },
  transition: { duration: 1.5 },
};

export default function Modal(props: IModalProps) {
  const { isOpen } = props;

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        exit="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={itemVariants}
        transition={spring}
        className="absolute top-0 left-0 w-full h-full flex-col"
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}
