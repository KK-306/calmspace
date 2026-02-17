export default function FinalCTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-calmTeal/10 via-white to-purple-100 text-center">
      <div className="max-w-4xl mx-auto px-8">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-gray-900">
          Ready to Start Your Healing Journey? 🌙
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          Download CalmSpace today and take the first step toward mental wellness,
          confidence, and peace.
        </p>

        {/* CTA Button */}
        <button
  onClick={() =>
    window.open("https://play.google.com/store/apps/details?id=com.dixit.calmspace", "_blank")
  }
  className="mt-10 px-10 py-4 rounded-2xl bg-calmTeal text-white font-bold text-lg shadow-xl hover:scale-105 transition duration-300"
>
  Get the CalmSpace App →
</button>

      </div>
    </section>
  );
}
