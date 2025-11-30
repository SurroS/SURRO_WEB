import Image from "next/image";
import React from "react";

interface Props {
  step: number;
  title: string;
  desc: string;
}

const StepCard = ({ step, title, desc }: Props) => {
  return (
    <div
      className="
        bg-[#f6effb] rounded-[20px]
        p-6 lg:p-10 pb-0
        shadow-lg hover:shadow-xl transition-shadow
      "
    >
      <div className=" pr-4">
        <h4 className="text-[20px] lg:text-[32px] font-semibold text-[#080833] leading-tight">
          {title}
        </h4>

        <p className="mt-2 text-[16px] lg:text-[22px] text-[#838383] leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="flex w-full justify-end">
        <Image
          src={`/images/number${step}.svg`}
          alt={`Step ${step}`}
          width={50}
          height={50}
          className="w-10 h-10 lg:w-20 lg:h-20"
        />
      </div>
    </div>
  );
};

export default StepCard;
   