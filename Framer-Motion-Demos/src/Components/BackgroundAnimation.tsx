import { motion } from "motion/react";

const BackgroundAnimation = () => {
  return (
    <motion.div
      className="h-screen w-screen"
      animate={{ backgroundColor: ["#ff0000", "#00ff", "#ffff23", "#E67"] }}
      transition={{ duration: 5, ease: "linear", repeat: Infinity }}
    />
  );
};

export default BackgroundAnimation;
