import { motion } from "motion/react";
import { useState } from "react";

const SwipeCard = () => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleDrag = (_: any, info: any) => {
    if (info.offset.x > 100) {
      setIsRemoved(true);
    } else if (info.offset.x < 100) {
      setIsRemoved(true);
    }
  };

  return (
    <motion.div
      className={`w-70 h-35 bg-blue-600 flex items-center justify-center rounded-lg shadow-lg ${isRemoved ? "hidden" : ""} `}
      onDragEnd={handleDrag}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    >
      <h1 className="text-2xl font-semibold">Swipe me !</h1>
    </motion.div>
  );
};

export default SwipeCard;
