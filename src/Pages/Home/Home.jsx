import HeroSection from '../../Components/Sections/HeroSection';
import StatsSection from '../../Components/Sections/StatsSection';
import FeaturesSection from '../../Components/Sections/FeaturesSection';
import FeaturedTasksSection from '../../Components/Sections/FeaturedTasksSection';
import HowItWorksSection from '../../Components/Sections/HowItWorksSection';
import TestimonialsSection from '../../Components/Sections/TestimonialsSection';
import FAQSection from '../../Components/Sections/FAQSection';
import CTA from '../../Components/Sections/CTA';
import Trust from '../../Components/Sections/Trust';

const Home = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <FeaturedTasksSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Trust />
      <FAQSection />
      <CTA />
    </div>
  );
};

export default Home;
