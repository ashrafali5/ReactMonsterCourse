import { motion, useMotionValue, useMotionValueEvent } from "motion/react";

const UseMotionValueHook = () => {
  const x = useMotionValue(20);
  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation started");
  });
  useMotionValueEvent(x, "change", (latest) => {
    console.log("position changed to ", latest);
  });
  return (
    <motion.div
      className="box"
      drag
      dragConstraints={{
        top: -100,
        bottom: 100,
        left: -100,
        right: 100,
      }}
      style={{ x }}
    />
  );
};

export default UseMotionValueHook;
