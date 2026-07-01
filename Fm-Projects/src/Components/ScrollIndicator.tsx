import { motion, useScroll, useTransform } from "motion/react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-[200vh] p-5 text-center mt-5">
      {/* indicator line */}
      <motion.div
        style={{
          width: lineWidth,
          transition: "width 0.5s ease",
        }}
        className="bg-blue-800 h-1.5 fixed top-0 left-0"
      />

      {/* random text */}
      {[...Array(500)].map((_, i) => (
        <p key={i} className="mt-4">
          Ashraf Ali the intelligent investor of the year
        </p>
      ))}
    </div>
  );
};

export default ScrollIndicator;
