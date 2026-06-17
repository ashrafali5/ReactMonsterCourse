import { easeInOut, motion } from "motion/react";
const PulsingButton = () => {
  return (
    <div>
      <motion.button
        className="text-white bg-blue-500 rounded outline-none px-4 py-2 cursor-pointer"
        animate={{
          scale: [1, 1.1, 1],
          backgroundColor: ["#292929", "#000000", "#0037ff1f"],
          transition: { duration: 0.8, ease: easeInOut, repeat: Infinity },
        }}
      >
        Click Me
      </motion.button>
    </div>
  );
};

export default PulsingButton;
