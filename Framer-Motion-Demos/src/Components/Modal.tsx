import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="text-center mt-16 px-9 py-3 cursor-pointer bg-teal-700 rounded-lg "
      >
        Open Model
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-transparent"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: "0vh" }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
              className="w-50 h-50 flex items-center justify-center bg-pink-900 border-2  "
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="p-6 cursor-pointer text-white bg-teal-700 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
