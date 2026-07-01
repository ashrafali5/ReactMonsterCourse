import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

interface DraggableCardProp {
  children: ReactNode;
  style: CSSProperties;
}

const DraggableCard = ({ children, style }: DraggableCardProp) => {
  return (
    <motion.div
      className="rounded-2xl cursor-pointer shadow-lg w-52 h-72 p-5 m-2 flex justify-center items-center text-white text-xl"
      style={style}
      drag
      dragConstraints={{
        top: -200,
        left: -200,
        right: 200,
        bottom: 200,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default DraggableCard;
