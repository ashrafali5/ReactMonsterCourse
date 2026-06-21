import { motion } from "motion/react";

const StaggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredList = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 1,
          },
        },
      }}
      className="flex gap-10 flex-col m-10 overflowY-hidden"
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          variants={StaggerVariants}
          key={index}
          className={`w-30 h-30 bg-blue-700 rounded-lg`}
        ></motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredList;
