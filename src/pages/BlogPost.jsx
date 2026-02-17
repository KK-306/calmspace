import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogData";
import { motion } from "framer-motion";

export default function BlogPost() {
  const { slug } = useParams();

  // Find blog by slug
  const blog = blogs.find((b) => b.slug === slug);

  // If not found
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Article not found 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-10">

        {/* Category */}
        <p className="text-sm uppercase font-bold text-calmTeal">
          {blog.category}
        </p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold mt-4 text-gray-900"
        >
          {blog.title}
        </motion.h1>

        {/* Author + Date */}
        <p className="text-gray-500 mt-4">
          ✍️ {blog.author} • {blog.date}
        </p>

        {/* Content */}
        <div className="mt-10 text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            to="/blog"
            className="px-6 py-3 rounded-xl bg-calmTeal text-white font-semibold shadow hover:scale-105 transition"
          >
            ← Back to Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
