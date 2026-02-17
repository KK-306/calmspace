import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import  yuktasaxenaImg from "../assets/counselors/yukta-saxena.png";
import prathanaImg from "../assets/counselors/prathana.png";
import shreyaImg from "../assets/counselors/shreya.png";

export default function CounselorCarousel() {
  // ✅ Counselor Data (with Status)
  const counselors = [
    {
      name: "Yukta Saksena",
      specialty: "Stress & Anxiety Management",
      image: yuktasaxenaImg,
      status: "Online",
    },
    {
      name: "Prathana Sharma",
      specialty: "Depression & Emotional Support",
      image: prathanaImg,
      status: "Available",
    },
    {
      name: "Shreya Singh",
      specialty: "Relationship & Couple Counseling",
      image: shreyaImg,
      status: "Online",
    },
  ];

  const [index, setIndex] = useState(0);

  // ✅ Auto swap every 4 seconds (smoother experience)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % counselors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="counselors"
      className="py-28 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* ✅ Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
          Meet Our Counselors 👩‍⚕️
        </h2>

        {/* ✅ Subtext */}
        <p className="text-lg md:text-xl text-gray-600 text-center mt-5 max-w-2xl mx-auto leading-relaxed">
          Our verified experts are here to guide you through your mental wellness journey.
        </p>

        {/* ================================================= */}
        {/* ✅ Carousel Card */}
        {/* ================================================= */}
        <div className="mt-20 flex justify-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 
                         p-12 w-[420px] text-center"
            >
              {/* ✅ Counselor Image */}
              <img
                src={counselors[index].image}
                alt="Counselor"
                className="w-28 h-28 rounded-full mx-auto border-4 border-calmTeal shadow-lg"
              />

              {/* ✅ Name */}
              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                {counselors[index].name}
              </h3>

              {/* ✅ Specialty */}
              <p className="text-gray-600 mt-2 text-lg">
                {counselors[index].specialty}
              </p>

              {/* ✅ Status */}
              <p className="mt-3 text-sm font-semibold text-green-600">
                ● {counselors[index].status}
              </p>

              {/* ✅ Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.dixit.calmspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-8 w-full py-4 rounded-2xl bg-calmTeal text-white font-semibold shadow-lg 
                     hover:opacity-90 hover:scale-105 transition duration-300">
                  Book a Session →
                </button>
              </a>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* ================================================= */}
        {/* ✅ Dots Indicator */}
        {/* ================================================= */}
        <div className="flex justify-center gap-3 mt-8">
          {counselors.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-calmTeal" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
}
