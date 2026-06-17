import { motion } from "motion/react";
import { useState } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&h=1080&fit=crop",
];

const StaggerGallery = () => {
  const [showImages, setShowImages] = useState(false);

  const parentVariants = {
    hide: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        staggerDirection: 1,
      },
    },
  };

  const childVariants = {
    hide: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setShowImages((prev) => !prev)}
        className="p-6 mb-8 bg-emerald-700 font-semibold text-2xl rounded-lg cursor-pointer"
      >
        {showImages ? "Show Images" : "Hide Images"}
      </button>
      <motion.div
        className="flex gap-4"
        initial="hide"
        animate={showImages ? "visible" : "hide"}
        variants={parentVariants}
      >
        {galleryImages.map((img, index) => (
          <motion.img
            variants={childVariants}
            className="w-80 rounded-lg"
            key={index}
            src={img}
            alt={`Gallery Images ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default StaggerGallery;
