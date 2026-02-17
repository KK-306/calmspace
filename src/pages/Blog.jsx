import { motion } from "framer-motion";
import { blogs } from "../data/blogData";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-heading font-extrabold text-center text-gray-900"
        >
          CalmSpace Blog ✨
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-600 text-center mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Insights, self-care tips, and wellness stories to support your journey.
        </motion.p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition"
            >
              {/* Date */}
              <p className="text-sm text-gray-400">{blog.date}</p>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mt-3">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mt-4 leading-relaxed">
                {blog.description}
              </p>

              {/* Read More */}
              <button className="mt-6 text-calmTeal font-semibold hover:underline">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-20">
          <a
            href="/"
            className="px-10 py-4 rounded-2xl bg-calmTeal text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
