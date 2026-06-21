import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
  "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5",
  "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
  "https://images.unsplash.com/photo-1444464666168-49d633b86797",
  "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
  "https://images.unsplash.com/photo-1516934024742-b461fba47600",
];
const GestureBasedImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (_: any, swipeInfo: any) => {
    if (swipeInfo.offset.y > 100) {
      setCurrentIndex((currentIndex + 1 + images.length) % images.length);
    } else if (swipeInfo.offset.y < 100) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative w-100 h-auto overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`SlideImg${currentIndex}`}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleSwipe}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default GestureBasedImageGallery;
