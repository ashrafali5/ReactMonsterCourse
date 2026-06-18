import { motion, useScroll, useTransform } from "motion/react";

const RealScrollAnimation = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        className="bg-blue-500 w-150 h-60 rounded-lg shadow-lg"
        style={{ scale, opacity }}
      ></motion.div>
      <div className="w-full h-[300vh]"></div>
    </div>
  );
};

export default RealScrollAnimation;
