import { motion, useSpring } from "motion/react";

const DynamicRotation = () => {
  const rotate = useSpring(0);

  const handleRotation = () => {
    rotate.set(rotate.get() + 45);
  };

  return (
    <div>
      <motion.div
        style={{ rotate }}
        onClick={handleRotation}
        className="w-40 h-40 bg-amber-500 rounded-lg"
      />
    </div>
  );
};

export default DynamicRotation;
