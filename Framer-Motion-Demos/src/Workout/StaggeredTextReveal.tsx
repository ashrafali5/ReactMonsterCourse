import { motion, scale } from "motion/react";

const StaggeredTextVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredTextReveal = () => {
  const name = "Ashraf Ali";
  return (
    <div>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 1,
            },
          },
        }}
        className="text-6xl font-bold"
      >
        {name.split("").map((chr, index) => (
          <motion.span variants={StaggeredTextVariant} key={index}>
            {chr}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default StaggeredTextReveal;
