import { motion } from "motion/react";

const StaggerAnimation = () => {
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 50, rotate: 15 },
    visible: { opacity: 1, y: 0, rotate: 45 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={parentVariant}>
      {[...Array(5)].map((_, index) => (
        <motion.div key={index} className="box mt-8" variants={childVariant} />
      ))}
    </motion.div>
  );
};

export default StaggerAnimation;
