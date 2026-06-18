import { easeIn, motion } from "motion/react";
import { useState } from "react";
const SideBarSmooth = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <motion.div
        className={`h-full w-2/10 fixed left-0 top-0 p-12 bg-pink-950 text-center ${visible ? "opacity-100" : "-translate-x-100%"} `}
        initial={{ x: "-100%" }}
        animate={{
          x: visible ? "0%" : "-100%",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-3xl font-bold">Side Bar</h1>
        <p>
          this is a sidebar this is a sidebar this is a sidebar this is a
          sidebar
        </p>
      </motion.div>
      <button
        onClick={() => setVisible(!visible)}
        className="px-8 py-4 text-2xl font-semibold bg-gray-600 rounded-2xl cursor-pointer"
      >
        Swap
      </button>
    </div>
  );
};

export default SideBarSmooth;
