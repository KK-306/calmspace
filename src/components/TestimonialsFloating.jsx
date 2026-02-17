import { motion } from "framer-motion";

export default function TestimonialsFloating() {
  return (
    <section className="py-28 bg-gradient-to-r from-[#f0fdff] via-white to-[#fff0fb] relative overflow-hidden">
      
      {/* ✅ Background Glow */}
      <div className="absolute top-10 left-20 w-80 h-80 bg-calmTeal/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-300/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-8">

        {/* ✅ Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
          Loved By Modern Minds 💙
        </h2>

        {/* ✅ Subtext */}
        <p className="text-lg md:text-xl text-gray-600 text-center mt-5 max-w-2xl mx-auto leading-relaxed">
          Thousands of users trust CalmSpace for affordable counseling, AI support,
          and a safe wellness journey.
        </p>

        {/* ================================================= */}
        {/* ✅ MOBILE VIEW (Stacked Cards) */}
        {/* ================================================= */}
        <div className="mt-16 space-y-8 md:hidden">

          {/* Card 1 */}
          <div className="bg-white shadow-xl p-7 rounded-3xl border border-gray-100">
            <p className="text-gray-700 text-base leading-relaxed">
              ⭐⭐⭐⭐⭐ <br />
              “CalmSpace helped me manage anxiety in just a few sessions.
              It feels safe and comforting.”
            </p>
            <h4 className="mt-4 font-bold text-calmTeal">
              — Aditi, Student
            </h4>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-2xl p-8 rounded-3xl border border-gray-200">
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              ⭐⭐⭐⭐⭐ <br />
              “Luna AI feels like a real friend. I can talk anytime,
              and it truly supports me emotionally.”
            </p>
            <h4 className="mt-6 font-bold text-calmTeal text-lg">
              — Rohan, Gen Z User
            </h4>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-xl p-7 rounded-3xl border border-gray-100">
            <p className="text-gray-700 text-base leading-relaxed">
              ⭐⭐⭐⭐⭐ <br />
              “Affordable sessions at ₹99 is unbelievable.
              Mental wellness finally feels accessible.”
            </p>
            <h4 className="mt-4 font-bold text-calmTeal">
              — Sana, Professional
            </h4>
          </div>
        </div>

        {/* ================================================= */}
        {/* ✅ DESKTOP VIEW (Ultra Smooth Floating Animation) */}
        {/* ================================================= */}
        <div className="relative mt-20 hidden md:flex justify-center items-center">

          {/* ⭐ Review 1 */}
          <motion.div
            animate={{ y: [-8, 8] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
            className="absolute left-0 top-0 bg-white shadow-xl p-7 rounded-3xl w-80 
                       border border-gray-100 will-change-transform"
          >
            <p className="text-gray-700 text-base leading-relaxed">
              ⭐⭐⭐⭐⭐ <br />
              “CalmSpace helped me manage anxiety in just a few sessions.
              It feels safe and comforting.”
            </p>

            <h4 className="mt-4 font-bold text-calmTeal">
              — Aditi, Student
            </h4>
          </motion.div>

          {/* ⭐ Review 2 (Center Main Highlight) */}
          <motion.div
            animate={{ y: [-12, 12] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
            className="bg-white shadow-2xl p-10 rounded-3xl w-[420px] z-10 
                       border border-gray-200 will-change-transform"
          >
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              ⭐⭐⭐⭐⭐ <br />
              “Luna AI feels like a real friend. I can talk anytime,
              and it truly supports me emotionally.”
            </p>

            <h4 className="mt-6 font-bold text-calmTeal text-lg">
              — Rohan, Engineer
            </h4>
          </motion.div>

          {/* ⭐ Review 3 */}
          <motion.div
            animate={{ y: [-6, 6] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
            className="absolute right-0 top-16 bg-white shadow-xl p-7 rounded-3xl w-80 
                       border border-gray-100 will-change-transform"
          >
            <p className="text-gray-700 text-base leading-relaxed">
              ⭐⭐⭐⭐⭐ <br />
              “Affordable sessions at ₹99 is unbelievable.
              Mental wellness finally feels accessible.”
            </p>

            <h4 className="mt-4 font-bold text-calmTeal">
              — Sana, Professional
            </h4>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
