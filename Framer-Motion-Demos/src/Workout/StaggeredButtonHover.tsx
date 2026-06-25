import { motion } from "motion/react";
import { useState } from "react";

const StaggeredButtonHover = () => {
  const [isHover, setIsHover] = useState(false);

  const StaggerButtonVariants = {
    hide: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col items-start">
      <motion.button
        whileHover={{ scale: 0.8 }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        className="px-9 py-4 bg-blue-500 mt-5 rounded-lg text-2xl"
      >
        Button
      </motion.button>

      <motion.div
        initial="hide"
        animate={isHover ? "visible" : "hide"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 1,
            },
          },
        }}
        className="flex flex-col"
      >
        {[...Array(5)].map((_, index) => (
          <motion.button
            variants={StaggerButtonVariants}
            className="px-8 py-4 bg-blue-500 mt-5 rounded-lg text-2xl"
            key={index}
          >
            Buttons
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default StaggeredButtonHover;
