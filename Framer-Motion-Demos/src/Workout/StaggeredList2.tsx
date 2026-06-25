import { motion } from "motion/react";

const StaggeredVariants = {
  hide: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredList2 = () => {
  return (
    <motion.ul
      className="h-screen mt-560"
      initial="hide"
      whileInView="visible"
      variants={StaggeredVariants}
      transition={{ staggerChildren: 1 }}
    >
      {[...Array(5)].map((_, index) => (
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          key={index}
          className="mt-8 bg-blue-800 rounded-lg p-6"
        >
          Ashraf Ali
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggeredList2;
