import { Plus, Rocket } from "lucide-react";
import Image from "next/image";
import React from "react";

const SafeSupportedSecure = () => {
  return (
    <div className="bg-[#FBF8FC] rounded-[40px] m-2 lg:m-10 my-8 relative h-[650px] lg:h-[610px]">
      {/* Background Vectors */}
      <Image
        src={"/vector/vector1.svg"}
        alt=""
        width={100}
        height={100}
        fetchPriority="high"
        className="w-full h-full hidden lg:block"
      />
      <Image
        src={"/vector/vector2.svg"}
        alt=""
        width={100}
        height={100}
        fetchPriority="high"
        className="w-full h-full block lg:hidden"
      />

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full p-5 lg:p-8">
        <div className="lg:w-[680px]">
          <h1 className="text-[#464646] text-[25px] lg:text-[60px] leading-tight">
            Safe. Supported. Secure.
          </h1>

          <p className="text-[#7A7A7A]  text-[16px] lg:text-[24px] mt-2 leading-relaxed">
            This journey asks for trust — and you deserve to feel protected at
            every step. Surro is built with care, clarity, and the security that
            brings real peace of mind.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid elevate grid-cols-1 lg:grid-cols-3 gap-5 mt-5 ">
          {[
            "Private, protected conversations between parents and surrogates",
            "Verified profiles for genuine, trustworthy connections",
            "Guidance, tools, and support from the first step to the last",
          ].map((item, index) => (
            <div
              key={item}
              className={`${
                index === 1 
                  ? "bg-linear-to-r from-[#CDCDFB] to-[#F5DDFF]"
                  : "bg-white/70"
              } rounded-[10px] lg:rounded-[20px] 
              shadow-lg hover:shadow-xl transition-shadow
      p-3 lg:p-10 
      backdrop-blur-2xl 
      flex flex-col justify-between 
      gap-4 lg:gap-10`}
            >
              <p
                className=" font-bold bg-linear-to-r from-[#6C6CD3] to-[#092D7B] 
        text-transparent bg-clip-text 
        text-[16px] md:text-sub-heading lg:text-[24px] 
        leading-snug"
              >
                {item}
              </p>

              <div
                className={`flex items-center justify-center self-end 
        ${index === 1 ? "bg-white" : "bg-[#EDEDED]"} 
        h-10 w-10 md:h-12 md:w-12 lg:h-[45px] lg:w-[45px] 
        rounded-full`}
              >
                <Rocket
                  size={22}
                  className=" size-24 md:size-26 lg:size-30 opacity-60"
                  color="#6C6CD3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafeSupportedSecure;
