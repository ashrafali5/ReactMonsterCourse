import { motion } from "motion/react";
import { useState } from "react";

const variants = {
  of: { x: 0 },
  on: { x: 70 },
};

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="relative w-40 h-20">
      <div
        className={`w-full h-full rounded-full bg-white ${isOn ? "bg-green-700" : ""}`}
        onClick={() => setIsOn(!isOn)}
      >
        <motion.div
          variants={variants}
          initial="off"
          animate={isOn ? "on" : "of"}
          className="absolute top-3 ml-2 lef-5 w-14 h-14 rounded-full bg-amber-300 shadow-lg"
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
