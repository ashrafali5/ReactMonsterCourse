import { motion } from "motion/react";

const items = ["item1", "item2", "item3", "item4", "item5", "item6"];

const StaggerGridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredGridLayout = () => {
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
      className="grid grid-cols-3 gap-4"
    >
      {items.map((items, index) => (
        <motion.div
          variants={StaggerGridVariants}
          key={index}
          className="p-4 bg-white text-black text-2xl rounded-lg"
        >
          {items}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredGridLayout;
