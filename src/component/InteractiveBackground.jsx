import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function InteractiveBackground() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const x = useMotionValue(windowSize.width / 2);
  const y = useMotionValue(windowSize.height / 2);

  // Map cursor position to gradient positions (0% - 100%)
  const gradientX = useTransform(x, [0, windowSize.width], [40, 60]);
  const gradientY = useTransform(y, [0, windowSize.height], [40, 60]);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
        background: `radial-gradient(circle at 50% 50%, green 2%, black 40%)`, // reduced green spread
        backgroundPositionX: gradientX,
        backgroundPositionY: gradientY,
      }}
    />
  );
}
