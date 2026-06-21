import { motion } from "motion/react";

const FadeInEffect = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

const FadeVariant = () => {
  return (
    <motion.div
      className="box"
      variants={FadeInEffect}
      initial="show"
      animate="hide"
      transition={{ duration: 2 }}
    ></motion.div>
  );
};

export default FadeVariant;
