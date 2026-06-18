import { motion } from "motion/react";
import { useState } from "react";
const Fade = () => {
  const [isHide, setIsHide] = useState(true);
  return (
    <div className="flex justify-center flex-col items-center gap-6">
      <motion.div
        className="box"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isHide ? 1 : 0,
        }}
        transition={{ duration: 1 }}
      />
      <button
        className="px-6 py-4 mt-4 bg-blue-300 text-black rounded-2xl cursor-pointer"
        onClick={() => setIsHide(!isHide)}
      >
        {isHide ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Fade;
