import { motion, useMotionValue } from "motion/react";

const HoverLinkedScale = () => {
  const scale = useMotionValue(1);
  return (
    <motion.button
      onHoverStart={() => scale.set(1.5)}
      onHoverEnd={() => scale.set(1)}
      style={{ scale }}
      className="px-6 bg-blue-500 rounded-lg py-4"
    >
      Hover Me !
    </motion.button>
  );
};

export default HoverLinkedScale;
