import PlanCard from "./Plancard";

export default function PricingPlans() {
  return (
    <section id="plans" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        {/* ✅ Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
          Our Plans & Pricing 💰
        </h2>

        {/* ✅ Subtext */}
        <p className="text-lg md:text-xl text-gray-600 text-center mt-5 max-w-2xl mx-auto leading-relaxed">
          Affordable mental wellness support for everyone. Choose the plan that
          fits your journey.
        </p>

        {/* ✅ Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">

          {/* Plan 1 */}
          <PlanCard
            title="Quick Boost"
            price="99"
            desc="Instant emotional support sessions when you need a quick boost."
          />

          {/* Plan 2 (Highlighted Best Plan) */}
          <PlanCard
            title="Counseling Session Starting at"
            price="499"
            desc="One-on-one therapy sessions with verified professional counselors."
            highlight={true}
          />

          {/* Plan 3 */}
          <PlanCard
            title="Couple Therapy Starting at"
            price="699"
            desc="Relationship guidance sessions for couples to grow stronger together."
          />

        </div>
      </div>
    </section>
  );
}
