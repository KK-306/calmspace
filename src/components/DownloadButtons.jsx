import { Play, Apple } from "lucide-react";

export default function DownloadButtons() {
  return (
    <div className="flex flex-wrap gap-6 mt-10">

      {/* ✅ Play Store Button */}
      <a
        href="https://play.google.com/store/apps/details?id=com.dixit.calmspace"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 px-7 py-4 rounded-2xl 
                   bg-gray-900 text-white shadow-xl 
                   hover:scale-105 hover:shadow-2xl 
                   transition duration-300"
      >
        {/* Icon */}
        <div className="p-3 bg-white/10 rounded-xl">
          <Play size={24} />
        </div>

        {/* Text */}
        <div className="text-left leading-tight">
          <p className="text-xs text-gray-300"></p>
          <p className="text-lg text-white font-bold">Google Play</p>
        </div>
      </a>

      {/* ✅ App Store Button */}
      <a
        href="https://apps.apple.com/" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 px-7 py-4 rounded-2xl 
                   bg-calmTeal text-white shadow-xl 
                   hover:scale-105 hover:shadow-2xl 
                   transition duration-300"
      >
        {/* Icon */}
        <div className="p-3 bg-white/20 rounded-xl">
          <Apple size={24} />
        </div>

        {/* Text */}
        <div className="text-left leading-tight">
          <p className="text-xs text-white/80"></p>
          <p className="text-lg text-white font-bold">App Store</p>
        </div>
      </a>
    </div>
  );
}
