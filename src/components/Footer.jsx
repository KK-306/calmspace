import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// ✅ Import CalmSpace Logo
import logo from "../assets/logos/calmspace.png";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-900 text-gray-300 pt-20 pb-10"
    >
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-12">

        {/* ================================================= */}
        {/* ✅ Brand Info */}
        {/* ================================================= */}
        <div>
          {/* Logo + Brand Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="CalmSpace Logo"
              className="w-14 h-14 object-contain drop-shadow-md"
            />

            <h2 className="text-3xl font-heading font-extrabold text-calmTeal">
              CalmSpace
            </h2>
          </div>

          <p className="mt-5 text-gray-400 leading-relaxed text-base">
            CalmSpace is a modern mental wellness platform offering affordable
            counseling, Luna AI emotional support, and a safe community space for
            healing and personal growth.
          </p>
        </div>

        {/* ================================================= */}
        {/* ✅ Quick Links (Improved with HashLink Smooth Scroll) */}
        {/* ================================================= */}
        <div>
          <h3 className="text-xl font-heading font-bold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            {/* ✅ Scroll to Plans */}
            <li>
              <HashLink
                smooth
                to="/#plans"
                className="hover:text-calmTeal transition duration-300"
              >
                Plans & Pricing
              </HashLink>
            </li>

            {/* ✅ Scroll to Counselors */}
            <li>
              <HashLink
                smooth
                to="/#counselors"
                className="hover:text-calmTeal transition duration-300"
              >
                Counselors
              </HashLink>
            </li>

            {/* ✅ Founder Page */}
            <li>
              <Link
                to="/founder"
                className="hover:text-calmTeal transition duration-300"
              >
                About the Founders
              </Link>
            </li>
          </ul>
        </div>

        {/* ================================================= */}
        {/* ✅ Socials + Contact */}
        {/* ================================================= */}
        <div>
          <h3 className="text-xl font-heading font-bold text-white mb-5">
            Connect With Us
          </h3>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.instagram.com/thecalmspace.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition duration-300"
            >
              📷
            </a>

            <a
              href="https://www.linkedin.com/company/thecalmspace/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              💼
            </a>

            <a
              href="https://x.com/Calm2024Space"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              ❌
            </a>
          </div>

          {/* Email */}
          <p className="mt-6 text-gray-400 text-sm">
            Email:{" "}
            <a
              href="mailto:calmspaceconnect@gmail.com?subject=Support Request from CalmSpace Website"
              className="text-calmTeal font-semibold hover:underline"
            >
              calmspaceconnect@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* ================================================= */}
      {/* ✅ Bottom Footer */}
      {/* ================================================= */}
      <div className="text-center text-gray-500 text-sm mt-16 border-t border-gray-700 pt-8">
        © {new Date().getFullYear()} CalmSpace | Built for Mental Wellness 🌙
      </div>
    </footer>
  );
}
