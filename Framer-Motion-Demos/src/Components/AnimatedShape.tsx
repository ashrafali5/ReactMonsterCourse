import { motion } from "motion/react";

const AnimatedShape = () => {
  const boxVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      skew: 0,
    },
    hover: {
      scale: 1.05,
      rotate: 15,
      skew: "30deg",
      transition: { duration: 0.3 },
    },
    click: {
      scale: 1.5,
      rotate: -15,
      skew: "-30deg",
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div
      className="box"
      variants={boxVariants}
      initial="initial"
      whileHover="hover"
      whileTap="click"
    />
  );
};

export default AnimatedShape;
