import { motion } from "framer-motion";
import { blogs } from "../data/blogData";
import { Link } from "react-router-dom";

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
          CalmSpace Articles ✨
        </motion.h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-center mt-6 max-w-2xl mx-auto text-lg">
          Wellness insights and articles from CalmSpace and partner counsellors.
        </p>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg p-6 border hover:shadow-2xl transition flex flex-col"
            >
              {/* Category */}
              <p className="text-xs uppercase font-semibold text-calmTeal">
                {blog.category}
              </p>

              {/* Title */}
              <h2 className="text-lg font-bold text-gray-900 mt-3">
                {blog.title}
              </h2>

              {/* Author */}
              <p className="text-sm text-gray-500 mt-3">{blog.author}</p>

              {/* Date */}
              <p className="text-xs text-gray-400 mt-1">{blog.date}</p>

              {/* Read More */}
              <Link
                to={`/blog/${blog.slug}`}
                className="mt-auto pt-5 text-calmTeal font-semibold hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
