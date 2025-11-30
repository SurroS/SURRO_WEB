import About from "@/components/LandingPage/About";
import AllYouNeedToKnow from "@/components/LandingPage/AllYouNeedToKnow";
import BecomeAnAgent from "@/components/LandingPage/BecomeAnAgent";
import GetMatched from "@/components/LandingPage/GetMatched";
import HeroSection from "@/components/LandingPage/HeroSection";
import HowItWorks from "@/components/LandingPage/HowItWorks";
import Footer from "@/components/LandingPage/Layout/Footer";
import Navabar from "@/components/LandingPage/Layout/Navabar";
import Pricing from "@/components/LandingPage/Pricing";
import Questions from "@/components/LandingPage/Questions";
import SafeSupportedSecure from "@/components/LandingPage/SafeSupportedSecure";
import Testimonals from "@/components/LandingPage/Testimonals/Testimonals";
import TogetherWeBuildFamilies from "@/components/LandingPage/TogetherWeBuildFamilies";

export default function LandingPage() {
  return (
    <main>
      <Navabar />
      <div className="h-(--navbar-height)" />
      <HeroSection />
      <About />
      <SafeSupportedSecure />
      <HowItWorks />
      <GetMatched />
      <BecomeAnAgent />
      {/* <Pricing /> */}
      <Testimonals />
      <AllYouNeedToKnow />
      <Questions />
      <TogetherWeBuildFamilies />
      <Footer />
    </main>
  );
}
