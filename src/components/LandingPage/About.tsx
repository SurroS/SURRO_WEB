import React from "react";
import Image from "next/image";
import StoreButtons from "./StoreButtons";

const About = () => {
  return (
    <div
      id="about"
      className="p-5 lg:p-10 my-10 flex flex-col-reverse lg:flex-row gap-5 items-center justify-center"
    >
      {/* Text */}
      <div className="lg:max-w-[600px] flex flex-col gap-5">
        <h3 className="text-[25px] lg:text-[50px] text-[#464646] font-normal leading-tight">
          About Surro
        </h3>

        <p className=" text-[16px] lg:text-[24px] text-[#4B4B4B] leading-relaxed">
          Parenthood is a journey of hope, love, and courage and sometimes it
          takes an extraordinary act to make that dream come true. Surro is a trusted
          space where intended parents and surrogates meet, connect, and support
          each other with care and transparency.  
          <span className="block mt-2">
            Every step is guided with compassion, ensuring the process feels
            safe, clear, and empowering for everyone involved.
          </span>
        </p>

        <p className="bg-linear-to-r from-[#012770] via-[#3651BB] to-[#6C6CD3] text-transparent bg-clip-text text-sub-heading lg:text-[25px] font-semibold">
          Begin Your Journey to Parenthood
        </p>

        <div />
        <StoreButtons />
      </div>

      {/* Image */}
      <Image
        src="/images/pregnant-woman.png"
        alt="Pregnant woman smiling"
        width={550}
        height={550}
        className="w-[500px] lg:w-[450px] h-auto rounded-[20px] object-cover"
        fetchPriority="high"
      />
    </div>
  );
};

export default About;
