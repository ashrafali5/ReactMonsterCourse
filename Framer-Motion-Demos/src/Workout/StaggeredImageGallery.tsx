import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=3840&h=2160",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=3840&h=2160",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=3840&h=2160",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=3840&h=2160",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=3840&h=2160",
];

const StaggerVariants = {
  hide: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredImageGallery = () => {
  return (
    <div className="flex">
      <motion.div
        initial="hide"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 1,
            },
          },
        }}
        className="flex"
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            variants={StaggerVariants}
            src={img}
            className="w-80 h-80 ml-5 rounded-lg shadow-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default StaggeredImageGallery;
