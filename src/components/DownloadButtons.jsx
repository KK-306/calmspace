import { FaGooglePlay, FaApple } from "react-icons/fa6";

export default function DownloadButtons() {
  return (
    <div className="flex flex-wrap gap-6 mt-10">

      {/* ✅ Google Play Button */}
      <a
        href="https://play.google.com/store/apps/details?id=com.dixit.calmspace"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 px-8 py-4 rounded-2xl 
                   bg-gray-900 text-white shadow-xl 
                   hover:scale-105 hover:shadow-2xl 
                   transition duration-300"
      >
        {/* Official Google Play Icon */}
        <div className="p-3 bg-white/10 rounded-xl">
          <FaGooglePlay size={26} />
        </div>

        {/* Text */}
        <div className="text-left leading-tight">
          <p className="text-xs text-gray-300">Get it on</p>
          <p className="text-lg text-white font-bold">Google Play</p>
        </div>
      </a>

      {/* ✅ Apple App Store Button */}
      <a
        href="https://apps.apple.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 px-8 py-4 rounded-2xl 
                   bg-calmTeal text-white shadow-xl 
                   hover:scale-105 hover:shadow-2xl 
                   transition duration-300"
      >
        {/* Official Apple Icon */}
        <div className="p-3 bg-white/20 rounded-xl">
          <FaApple size={28} />
        </div>

        {/* Text */}
        <div className="text-left leading-tight">
          <p className="text-xs text-white/80">Download on</p>
          <p className="text-lg text-white font-bold">App Store</p>
        </div>
      </a>
    </div>
  );
}
