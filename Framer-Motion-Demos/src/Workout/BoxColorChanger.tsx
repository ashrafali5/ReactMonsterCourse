import { motion } from "motion/react";
import { useState } from "react";

const colors = ["bg-blue-500", "bg-green-500", "bg-pink-500", "bg-red-700"];

const BoxColorChanger = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const handleTap = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <motion.div
      onTap={handleTap}
      className={`w-50 h-50 flex justify-center items-center text-2xl text-black rounded-lg ${colors[colorIndex]} `}
    >
      Tap
    </motion.div>
  );
};

export default BoxColorChanger;
