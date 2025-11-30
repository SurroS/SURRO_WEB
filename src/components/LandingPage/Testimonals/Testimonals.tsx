import React from "react";
import TestimonalCard from "./TestimonalCard";

const Testimonals = () => {
  return (
    <div className="p-5 mt-10">
      <p className="text-left lg:text-center text-[32px] lg:text-[64px]">
        Testimonials
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5">
        <TestimonalCard
          text="After years of struggling, we finally found the perfect surrogate through this platform. Today, we’re proud parents of twins."
          name="Anna owolabi"
        />
        <TestimonalCard
          text="The support I received as a surrogate made me feel valued and respected every step of the way. Truly life-changing"
          name="Sarah Tadom"
        />
        <TestimonalCard
          text="I was worried I’d have to keep paying over and over just to find the right match. But they actually stayed with me through the whole process until I was completely satisfied. It saved me so much compared to what traditional agencies usually charge.”"
          name="Ifeoma Gideon"
        />
      </div>
    </div>
  );
};

export default Testimonals;
