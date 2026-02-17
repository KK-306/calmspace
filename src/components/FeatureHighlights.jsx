import HighlightCard from "./HighlightCard";
import lunaImg from "../assets/logos/luna.png";

export default function FeatureHighlights() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-8">

        {/* ✅ Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
          Why CalmSpace? ✨
        </h2>

        {/* ✅ Subtext */}
        <p className="text-lg md:text-xl text-gray-600 text-center mt-5 max-w-2xl mx-auto leading-relaxed">
         Affordable counseling, AI-powered support, and a safe space to help you feel better—anytime, anywhere.
        </p>

        {/* ✅ Highlight Cards Grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">

          {/* Card 1 */}
          <HighlightCard
            icon="💸"
            title="Affordable Counseling @ ₹99"
            desc="Mental wellness support shouldn’t be expensive. Start sessions at just ₹99."
          />

          {/* Card 2 */}
          <HighlightCard
            icon="🌍"
            title="Multilingual (12+ Languages)"
            desc="Connect comfortably in your own language with verified counselors across India."
          />

          {/* Card 3 (Luna Logo Image) */}
          <HighlightCard
            icon={lunaImg}
            title="Backed with AI — Luna"
            desc="Meet Luna, your AI companion available anytime for emotional support."
          />

        </div>
      </div>
    </section>
  );
}
