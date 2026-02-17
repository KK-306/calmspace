import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// ✅ Import CalmSpace Logo
import logo from "../assets/logos/calmspace.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* ================================================= */}
        {/* ✅ Logo Section */}
        {/* ================================================= */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition duration-300"
        >
          {/* Logo Image */}
          <img
            src={logo}
            alt="CalmSpace Logo"
            className="w-12 h-12 object-contain drop-shadow-sm"
          />

          {/* Brand Name */}
          <span className="text-2xl font-extrabold text-calmTeal hidden sm:block">
            CalmSpace
          </span>
        </Link>

        {/* ================================================= */}
        {/* ✅ Navigation Links */}
        {/* ================================================= */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          {/* Home */}
          <Link
            to="/"
            className="hover:text-calmTeal transition duration-300"
          >
            Home
          </Link>

          {/* Founder */}
          <Link
            to="/founder"
            className="hover:text-calmTeal transition duration-300"
          >
            Founder
          </Link>

          {/* ✅ Blog Page Link (NEW) */}
          <Link
            to="/blog"
            className="hover:text-calmTeal transition duration-300"
          >
            Blog
          </Link>

          {/* Plans */}
          <HashLink
            smooth
            to="/#plans"
            className="hover:text-calmTeal transition duration-300"
          >
            Plans
          </HashLink>

          {/* Counselors */}
          <HashLink
            smooth
            to="/#counselors"
            className="hover:text-calmTeal transition duration-300"
          >
            Counselors
          </HashLink>

          {/* Contact Button */}
          <HashLink
            smooth
            to="/#footer"
            className="px-6 py-2 rounded-xl bg-calmTeal text-white font-semibold shadow-md
                       hover:opacity-90 hover:scale-105 transition duration-300"
          >
            Contact
          </HashLink>
        </div>
      </div>
    </nav>
  );
}
