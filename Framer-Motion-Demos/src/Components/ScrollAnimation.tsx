import { useMotionValueEvent, useScroll } from "motion/react";

const ScrollAnimation = () => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page Scroll: ", latest);
  });

  return (
    <div>
      <ul>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
        <li>wwe</li>
      </ul>
    </div>
  );
};

export default ScrollAnimation;
