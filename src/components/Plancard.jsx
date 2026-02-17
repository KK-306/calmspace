import { motion } from "framer-motion";

export default function PlanCard({ title, price, desc, highlight, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.06, y: -6 }}
      transition={{ duration: 0.4 }}
      className={`rounded-3xl p-10 shadow-lg border transition-all duration-300
        ${
          highlight
            ? "bg-gradient-to-br from-calmTeal to-purple-500 text-white border-transparent shadow-2xl"
            : "bg-white border-gray-200 hover:shadow-2xl"
        }`}
    >
      {/* Title */}
      <h3
        className={`text-2xl font-bold ${
          highlight ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>

      {/* Price */}
      <p
        className={`text-5xl font-extrabold mt-5 ${
          highlight ? "text-white" : "text-calmTeal"
        }`}
      >
        ₹{price}
      </p>

      {/* Description */}
      <p
        className={`mt-4 text-lg leading-relaxed ${
          highlight ? "text-white/90" : "text-gray-600"
        }`}
      >
        {desc}
      </p>

      {/* Redirect Button */}
      <a
        href="https://play.google.com/store/apps/details?id=com.dixit.calmspace"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 w-full text-center inline-block py-3 rounded-2xl font-semibold shadow-md transition duration-300
          ${
            highlight
              ? "bg-white text-gray-900 hover:scale-105"
              : "bg-calmTeal text-white hover:opacity-90"
          }`}
      >
        Choose Plan →
      </a>
    </motion.div>
  );
}
