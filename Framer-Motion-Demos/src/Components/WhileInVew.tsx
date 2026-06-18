import { motion, scale } from "motion/react";
const WhileInVew = () => {
  return (
    <div className="h-screen">
      <h1 className="mb-4">scroll</h1>
      <div className="h-[200vh]">
        <div className="mb-150">
          <motion.div
            initial={{ scale: 0.5, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1 }}
            className="flex p-4 rounded items-center bg-white text-black mt-300"
          >
            <h1>Animated</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhileInVew;
