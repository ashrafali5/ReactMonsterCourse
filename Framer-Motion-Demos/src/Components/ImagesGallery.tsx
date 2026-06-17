import { motion } from "motion/react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    caption: "Beautiful mountain landscape",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    caption: "Ocean waves at sunset",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    caption: "Forest road in autumn",
  },
];

const ImagesGallery = () => {
  return (
    <div className="flex justify-center p-4 bg-white">
      {images.map((image, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          key={index}
          className="flex relative m-5 rounded-lg shadow-lg overflow-hidden"
        >
          <img src={image.src} alt={image.caption} className="w-full h-auto" />

          <div
            className="absolute inset-0 flex items-center justify-center bg-black opacity-0 text-white 
          cursor-pointer transition-opacity duration-300 hover:opacity-50"
          >
            <p className="text-xl font-bold">{image.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImagesGallery;
