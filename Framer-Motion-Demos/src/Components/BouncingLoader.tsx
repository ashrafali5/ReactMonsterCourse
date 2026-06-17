import { easeInOut, motion } from "motion/react";
const BouncingLoader = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-15 h-15 bg-amber-200 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 0.6,
            ease: easeInOut,
            repeat: Infinity,
            repeatDelay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;
