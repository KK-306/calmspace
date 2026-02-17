import { motion } from "framer-motion";
import DownloadButtons from "./DownloadButtons";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#e6fffd] via-white to-[#ffe6f7] py-28"
    >
      {/* ✅ Background Glow Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-calmTeal/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
        {/* ================================================= */}
        {/* ✅ Left Content */}
        {/* ================================================= */}
        <div>
          {/* ✅ Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900"
          >
            Your Safe Space <br />
            for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-calmTeal to-purple-500">
              Mental Wellness
            </span>
          </motion.h1>

          {/* ✅ Animated Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg"
          >
            Affordable counseling, Luna AI support, and a safe community created for your healing journey.
          </motion.p>

          {/* ✅ Animated Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10"
          >
            <DownloadButtons />
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* ✅ Right Content (Trusted Block + Animation) */}
        {/* ================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* ✅ Trusted Big Text */}
          <motion.h2
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center"
          >
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-calmTeal to-purple-500">
              1000+
            </span>{" "}
            Users 💙
          </motion.h2>

          {/* ✅ Rating Subtext */}
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-gray-600 text-lg mb-6 text-center"
          >
            Rated <span className="font-bold text-yellow-500">4.5★</span> by 
            the community
          </motion.p>

          {/* ✅ Avatar Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="flex -space-x-4">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                alt="user1"
              />
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                alt="user2"
              />
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                alt="user3"
              />
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                alt="user4"
              />
            </div>

            {/* Extra Users */}
            <p className="ml-4 text-gray-700 font-semibold">+500 more</p>
          </motion.div>

          {/* ✅ Hero Animation */}
          <HeroAnimation />
        </motion.div>
      </div>
    </section>
  );
}
