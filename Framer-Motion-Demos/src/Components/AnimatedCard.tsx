import { motion } from "motion/react";

const AnimatedCard = () => {
  return (
    <motion.div
      initial={{
        scale: 1,
        rotate: 0,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 5,
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.1 },
      }}
      drag
      dragConstraints={{
        left: -100,
        top: -100,
        right: 100,
        bottom: 100,
      }}
      dragElastic={1}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-2xl mx-auto rounded-lg shadow-lg overflow-hidden cursor-pointer"
    >
      <img
        className="w-full h-90 object-cover"
        src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Card Title</h1>
        <p className="text-gray-500 mb-4">
          This is a animated card builded by Ashraf Ali with framer motion,
          react, and tailwind css
        </p>
        <button className="px-4 py-2 bg-pink-700 rounded mb-4 cursor-pointer hover:bg-pink-500 ">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
