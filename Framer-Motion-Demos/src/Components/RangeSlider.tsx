import { motion, /*useMotionValue,*/ useSpring } from "motion/react";
import type { ChangeEvent } from "react";

const RangeSlider = () => {
  const scale = useSpring(1); // useSpring for smooth animation
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(+e.target.value);
  };
  return (
    <div>
      <motion.button className="box" style={{ scale }} />
      <div className="mt-24 flex items-center justify-center">
        <input
          type="range"
          min={0.1}
          max={2}
          step={0.001}
          defaultValue={0.1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
