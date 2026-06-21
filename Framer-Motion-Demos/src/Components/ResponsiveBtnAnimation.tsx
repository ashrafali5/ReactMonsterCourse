import { motion } from "motion/react";

const ResponsiveBtnAnimation = () => {
  return (
    <div className="border-2 rounded-lg shadow-lg">
      <motion.button
        className="p-4 cursor-pointer bg-blue-800 shadow-lg rounded-lg "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Click Me !
      </motion.button>
    </div>
  );
};

export default ResponsiveBtnAnimation;
