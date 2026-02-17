import Lottie from "lottie-react";
import { motion } from "framer-motion";

import meditationAnim from "../assets/animations/Meditation.json";

export default function HeroAnimation() {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-[320px] md:w-[420px] relative"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-calmTeal/20 blur-3xl rounded-full"></div>

      {/* Animation */}
      <Lottie
        animationData={meditationAnim}
        loop={true}
        className="relative"
      />
    </motion.div>
  );
}
