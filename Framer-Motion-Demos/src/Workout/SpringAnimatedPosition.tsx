import { motion, useSpring } from "motion/react";

const SpringAnimatedPosition = () => {
  const x = useSpring(0);
  const y = useSpring(0);

  const moveBox = () => {
    x.set(Math.random() * 200);
    y.set(Math.random() * 200);
  };

  return (
    <div>
      <motion.div
        style={{ x, y }}
        className="w-40 h-40 bg-amber-500 rounded-lg"
        onClick={moveBox}
      />
    </div>
  );
};

export default SpringAnimatedPosition;
