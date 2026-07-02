import { motion } from "framer-motion";
import { useState } from "react";

const sideBarVariants = {
  open: { x: 0, opacity: 1, scale: 1 },
  closed: { x: "-100%", opacity: 0, scale: 0.8 },
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen flex justify-center items-center bg-cyan-950 text-white">
      <div className="relative">
        {/* Backdrop */}
        {/* Sidebar content */}
        <motion.div
          variants={sideBarVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 300, damping: 100 }}
          className="fixed top-0 left-0 h-full w-64 bg-fuchsia-950 text-white shadow-lg"
        >
          <div className="p-4">
            <button
              className="absolute top-4 right-4 z-10"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>
    </div>
  );
};

export default SideBar;
