import { motion } from "framer-motion";

export default function HighlightCard({ icon, title, desc }) {
  // ✅ Detect if icon is an image path
  const isImage =
    typeof icon === "string" &&
    (icon.includes(".png") ||
      icon.includes(".jpg") ||
      icon.includes(".jpeg") ||
      icon.includes(".svg") ||
      icon.includes("data:image"));

  return (
    <motion.div
      /* ✅ Scroll Reveal Animation */
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}

      /* ✅ Hover Interaction */
      whileHover={{ scale: 1.06, y: -8 }}
      whileTap={{ scale: 0.97 }}

      /* ✅ Styling + Glow Ring */
      className="bg-white rounded-3xl p-10 text-center shadow-md
                 hover:shadow-2xl transition-all duration-300
                 border border-gray-100
                 hover:ring-2 hover:ring-calmTeal/30"
    >
      {/* ✅ Icon Support */}
      <div className="mb-6 flex justify-center">
        {isImage ? (
          <img
            src={icon}
            alt="icon"
            className="w-16 h-16 object-contain"
          />
        ) : (
          <span className="text-6xl">{icon}</span>
        )}
      </div>

      {/* ✅ Title */}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      {/* ✅ Description */}
      <p className="mt-4 text-gray-600 leading-relaxed text-base">{desc}</p>
    </motion.div>
  );
}
