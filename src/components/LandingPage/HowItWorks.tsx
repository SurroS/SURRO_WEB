import React from "react";
import StepCard from "./StepCard";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="
        px-5 lg:px-10 
        mt-16 lg:mt-24 
        max-w-6xl mx-auto
      "
    >
      {/* Heading */}
      <div className="w-full max-w-xl mx-auto text-center">
        <h2
          className="
            text-[28px] md:text-[40px] lg:text-[50px] 
            text-[#464646] font-semibold leading-tight
          "
        >
          How It Works
        </h2>

        <p
          className="
            text-[#838383]
            text-[15px] md:text-sub-heading lg:text-[22px] 
            mt-3 leading-relaxed
          "
        >
          Your path to parenthood is in four simple steps.
        </p>
      </div>

      {/* Steps */}
      <div
        className=" 
          grid 
          grid-cols-1 md:grid-cols-2 
          gap-6 lg:gap-10 
          mt-12 lg:mt-16
        "
      >
        <StepCard
          step={1}
          title="Create Your Profile"
          desc="Share your story, background, and hopes for the journey ahead — it helps you connect with the right people."
        />

        <StepCard
          step={2}
          title="Verify Your Identity"
          desc="For everyone’s safety, we verify each account to keep the platform trustworthy and secure."
        />

        <StepCard
          step={3}
          title="Get Matched"
          desc="We guide parents and surrogates toward the right fit — thoughtful, respectful, and aligned."
        />

        <StepCard
          step={4}
          title="Begin the Journey"
          desc="With guidance, resources, and steady support, you take each step with clarity and confidence."
        />
      </div>
    </section>
  );
};

export default HowItWorks;
