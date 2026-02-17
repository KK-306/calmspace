import { motion } from "framer-motion";
import { Linkedin, Instagram, X } from "lucide-react";

// ✅ Import Founder Photos
import kaustubhImg from "../assets/founders/kaustubh.jpg";
import disharaniImg from "../assets/founders/disharani.jpg";
import kartikImg from "../assets/founders/kartik.jpg";

export default function Founder() {
  const founders = [
    {
      name: "Kaustav Kaushik Bordoloi",
      role: "Co-Founder",
      image: kaustubhImg,
      bio: "Passionate about building mental wellness solutions that empower youth through counseling, AI, and community support.",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/kaustav-kaushik-bordoloi-9a3010186/",
        instagram: "",
        twitter: "https://x.com/MrKKBordoloi",
      },
    },

    {
      name: "Disharani Das",
      role: "Co-Founder & Community Lead",
      image: disharaniImg,
      bio: "Focused on creating safe, inclusive spaces for emotional growth, healing, and mental wellness awareness.",
      socials: {
        linkedin: "https://www.linkedin.com/in/disharani-das-3675591b1/",
        instagram: "https://www.instagram.com/disharanidas/",
        twitter: "",
      },
    },

    {
      name: "Kartik Karnwal",
      role: "Developer(Website)",
      image: kartikImg,
      bio: "Committed to building a technology-driven solution that ensures mental wellness support is available anytime and from anywhere.",
      socials: {
        linkedin: "https://www.linkedin.com/in/kartik-karnwal-59b94828b",
        instagram: "https://www.instagram.com/kartik_karnwal.01/",
        twitter: "",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ✅ Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center text-gray-900"
        >
          Meet the Founders 🌱
        </motion.h1>

        {/* ✅ Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 text-center mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          CalmSpace was built with a mission to make mental wellness accessible,
          affordable, and supportive for Everyone.
        </motion.p>

        {/* ================================================= */}
        {/* ✅ Founder Cards */}
        {/* ================================================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="bg-white rounded-3xl p-10 text-center flex flex-col
                         shadow-lg hover:shadow-2xl
                         border border-gray-100
                         hover:ring-2 hover:ring-calmTeal/20
                         transition duration-300"
            >
              {/* ✅ Founder Image */}
              <div className="relative mx-auto w-40 h-40">
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r 
                                from-calmTeal via-blue-400 to-purple-400 
                                blur-md opacity-70"></div>

                {/* Actual Image */}
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="relative w-40 h-40 rounded-full object-cover
                             border-4 border-white shadow-xl
                             hover:scale-110 transition duration-500"
                />
              </div>

              {/* ✅ Name */}
              <h2 className="text-2xl font-bold mt-7 text-gray-900">
                {founder.name}
              </h2>

              {/* ✅ Role */}
              <p className="text-calmTeal font-semibold mt-2">
                {founder.role}
              </p>

              {/* ✅ Bio */}
              <p className="text-sm text-gray-600 mt-5 leading-relaxed">
                {founder.bio}
              </p>

              {/* ================================================= */}
              {/* ✅ Social Links */}
              {/* ================================================= */}
              <div className="mt-auto flex justify-center gap-6 mt-8">
                {/* LinkedIn */}
                {founder.socials.linkedin && (
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 
                               hover:bg-calmTeal hover:text-white 
                               transition duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                )}

                {/* Instagram */}
                {founder.socials.instagram && (
                  <a
                    href={founder.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 
                               hover:bg-pink-500 hover:text-white 
                               transition duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                )}

                {/* ✅ X (Twitter) */}
                {founder.socials.twitter && (
                  <a
                    href={founder.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 
                               hover:bg-black hover:text-white 
                               transition duration-300"
                  >
                    <X size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Back Button */}
        <div className="text-center mt-24">
          <a
            href="/"
            className="px-10 py-4 rounded-2xl bg-calmTeal text-white font-semibold shadow-lg
                       hover:opacity-90 hover:scale-105 transition duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
