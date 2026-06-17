import { motion } from "motion/react";
import { useRef } from "react";

const Gestures = () => {
  const constraints = useRef(null);
  return (
    <div ref={constraints} className="h-screen w-dvw overflow-hidden">
      {/* WhileHover */}

      {/* <motion.div
        className="box cursor-pointer"
        whileHover={{
          scale: 2,
          rotate: 45,
          transition: {
            type: "spring",
            stiffness: 500,
          },
        }}
      /> */}

      {/* WhileTap*/}
      {/* <motion.div
        className="box cursor-pointer"
        whileTap={{ scale: 2, backgroundColor: "crimson" }}
        transition={{ type: "spring", stiffness: 500 }}
      /> */}

      {/* WhileDrag */}
      <motion.div
        className="box cursor-pointer"
        drag
        dragConstraints={constraints}
        whileDrag={{ scale: 2, backgroundColor: "crimson" }}
      />
    </div>
  );
};

export default Gestures;
