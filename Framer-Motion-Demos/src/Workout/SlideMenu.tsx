import { motion } from "motion/react";
import { useState } from "react";

const SlideVariant = {
  hide: { x: "-100%" },
  show: { x: "0%" },
};

 
const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-8 cursor-pointer py-4 bg-fuchsia-800 rounded-2xl text-2xl font-semibold"
      >
        <i>Toggle</i>
      </button>
      <motion.div
        variants={SlideVariant}
        animate={isOpen ? "show" : "hide"}
        className="fixed inset-0 p-8 bg-fuchsia-900 w-2/10"
        transition={{ duration: 0.5, ease: "linear" }}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SlideMenu;
