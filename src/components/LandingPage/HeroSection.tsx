import Image from "next/image";
import StoreButtons from "./StoreButtons";

const  HeroSection = () => {
  return (
    <div id="home" className="bg-white p-5">
      <div className="header-background rounded-[40px] p-5 h-full">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="lg:w-[70%] flex flex-col items-center justify-center space-y-5 pt-10">
            <h1 className="text-[32px] md:text-[72px] text-[#464646] font-normal leading-[100%] text-center">
              One Heart Carries the Hope of Another.
            </h1>

            <p className="text-[#9E9E9E] text-[16px] lg:text-[24px] text-center">
              Parenthood isn’t always a straight path. Some families wait, pray,
              and wonder if they’ll ever hold a child of their own. And then
              there are women whose strength quietly becomes the bridge to that
              dream. We bring these stories together with compassion, clarity,
              and unwavering support.
            </p>

            <p className="text-[18px] font-semibold lg:text-sub-heading bg-linear-to-r from-[#012770] via-[#3651BB] to-[#6C6CD3] bg-clip-text text-transparent">
              Begin Your Surrogacy Journey now
            </p>

            <StoreButtons />
          </div>

          {/* Bottom Images  */}
          <div className="flex gap-5 mt-20 w-[80vw] lg:w-full lg:grid lg:grid-cols-3 overflow-x-auto scrollbar-none">
            <Image
              src="/images/mother-breastfeeding.svg"
              alt=""
              width={500}
              height={500}
              className="min-w-[220px] lg:min-w-[420px] h-auto"
            />
            <Image
              src="/images/pregnant-mother.svg"
              alt=""
              width={500}
              height={500}
              className="min-w-[220px] lg:min-w-[420px] h-auto"
            />
            <Image
              src="/images/pregnant-mother-with-child.svg"
              alt=""
              width={500}
              height={500}
              className="min-w-[220px] lg:min-w-[420px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
