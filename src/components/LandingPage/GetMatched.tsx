import Image from "next/image";
import React from "react";
import StoreButtons from "./StoreButtons";

const GetMatched = () => {
  return (
    <div className="bg-[#FBF8FC] rounded-[40px] m-2 lg:m-10 my-8 relative  overflow-hidden">
      <Image
        src={"/vector/vector3.svg"}
        alt=""
        width={100}
        height={100}
        fetchPriority="high"
        className="w-full h-full hidden lg:block z-30 absolute"
      />
      <Image
        src={"/vector/vector4.svg"}
        alt=""
        width={100}
        height={100}
        fetchPriority="high"
        className="w-full h-fit lg:hidden block z-10 lg:z-30 absolute"
      />
      <div className="w-full h-full grid gap-3 lg:grid-cols-2 items-center p-5 lg:p-0 z-30">
        <div className="flex justify-center items-center z-10">
      
          <Image
            src={"/images/phone-mockup.svg"}
            alt=""
            width={100}
            height={100}
            fetchPriority="high"
            className=" w-[260px] h-[700px] hidden lg:block"
          />
          <Image
            src={"/images/phone-mockup-2.svg"}
            alt=""
            width={100}
            height={100}
            fetchPriority="high"
            className=" w-[260px]  h-[700px] block lg:hidden"
          />
        </div>
        <div className="z-40">
          <h1 className="text-[#464646] font-bold text-[20px] lg:text-[50px]">
            Get matched on the go
          </h1>
          <p  className="text-[#838383] text-[14px] lg:text-[24px]">
            Your journey doesn’t pause neither should your ability to find
            the right match. Surro works right from the device you already keep
            close, making it easy to connect, respond, and move forward wherever
            you are.
          </p>
          <div className="h-10" />
          <StoreButtons />
        </div>
      </div>
    </div>
  );
};

export default GetMatched;
