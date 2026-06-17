import { motion } from "motion/react";
import { useState } from "react";

const Variants = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <motion.div
        className="box cursor-pointer"
        variants={{
          hide: { opacity: 0, scale: 0.8 },
          show: { opacity: 1, scale: 1 },
        }}
        initial="hide"
        animate={isVisible ? "show" : "hide"}
        transition={{ duration: 1 }}
        onMouseEnter={() => setIsVisible(!isVisible)}
        onMouseLeave={() => setIsVisible(true)}
      />
    </div>
  );
};

export default Variants;
