import { motion } from "motion/react";
import { useState } from "react";

const LongPressToChangeSize = () => {
  const [isLarge, setIsLarge] = useState(false);

  const handleTapStart = () => setIsLarge(true);

  return (
    <motion.div
      onTapStart={handleTapStart}
      onTapCancel={() => setIsLarge(false)}
      onTap={() => setIsLarge(false)}
      className={`w-40 h-40 cursor-pointer bg-fuchsia-800 flex items-center justify-center transition-all duration-300 rounded-lg ${isLarge ? "h-60 w-60" : ""}`}
    >
      <h1>Long Press !</h1>
    </motion.div>
  );
};

export default LongPressToChangeSize;
