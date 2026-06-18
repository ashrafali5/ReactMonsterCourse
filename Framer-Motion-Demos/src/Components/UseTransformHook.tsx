import { motion, useTransform, useMotionValue } from "motion/react";

const UseTransformHook = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // x, [inputRangeStart, inputRangeEnd], [outputRangeStart, outputRangeEnd]
  const backgroundColor = useTransform(x, [-100, 100], ["#ff0000", "#00ff00"]);
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -200,
        left: -200,
        right: 200,
        bottom: 200,
      }}
      style={{ x, y, backgroundColor }}
      className="w-60 h-60 flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
    >
      <span className="font-bold text-3xl">Drag Me!</span>
    </motion.div>
  );
};

export default UseTransformHook;
