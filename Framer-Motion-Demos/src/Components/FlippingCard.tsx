import { motion } from "motion/react";
import { useState } from "react";

const cardVariants = {
  frontSide: { rotateY: 0 },
  backSide: { rotateY: 180 },
};

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-[1000px]"
    >
      <motion.div
        variants={cardVariants}
        transition={{ duration: 0.5 }}
        initial="frontSide"
        animate={isFlipped ? "frontSide" : "backSide"}
        className="w-80 h-52 bg-white shadow-lg transform-3d relative"
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white flex items-center justify-center text-xl font-bold backface-hidden">
          <h1 className="text-black">Front Side</h1>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-blue-500 flex items-center justify-center text-xl font-bold rotate-y-180 backface-hidden ">
          <h1 className="text-white">Back Side</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;
