import Hero from "../components/Hero";
import FeatureHighlights from "../components/FeatureHighlights";
import TestimonialsFloating from "../components/TestimonialsFloating";
import Recognition from "../components/Recognition";
import PricingPlans from "../components/PricingPlans";
import CounselorCarousel from "../components/CounselorCarousel";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureHighlights />
      <TestimonialsFloating />
      <Recognition />
      <PricingPlans />
      <CounselorCarousel />

      {/* Final Ending Section */}
      <FinalCTA />
    </div>
  );
}
