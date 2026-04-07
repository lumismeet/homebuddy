import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import BlocksSection from "@/components/BlocksSection";
import HowItWorks from "@/components/HowItWorks";
import MicromeshCallout from "@/components/MicromeshCallout";
import FeatureRows from "@/components/FeatureRows";
import CostEstimator from "@/components/CostEstimator";
import Reviews from "@/components/Reviews";
import VeteransSection from "@/components/VeteransSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <TopBar />
      <Nav />
      <HeroSection />
      <TrustBar />
      <BlocksSection />
      <HowItWorks />
      <MicromeshCallout />
      <FeatureRows />
      <CostEstimator />
      <Reviews />
      <VeteransSection />
      <Footer />
    </>
  );
};

export default Index;
