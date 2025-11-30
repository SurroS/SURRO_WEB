import Image from "next/image";
import StoreButtons from "./StoreButtons";

const BecomeAnAgent = () => {
  return (
    <div className="p-5 lg:p-10 my-8 flex flex-col-reverse lg:grid grid-cols-2 gap-5">
      <div>
        <h4 className="text-[28px] md:text-[40px] lg:text-[64px]   text-[#464646]">
          Become an Agent
        </h4>

        <p className="text-[#9E9E9E] text-[16px] md:text-[20px] lg:text-[28px] leading-relaxed mt-2">
          Some parents prefer to keep their identity private as they begin their
          journey. Step in as trusted intermediaries handling
          conversations, guiding the process, and creating a safe, respectful
          space for everyone involved.
        </p>

        <p className="bg-linear-to-r from-[#012770] via-[#3651BB] to-[#6C6CD3] bg-clip-text text-transparent text-sub-heading md:text-[22px] lg:text-[24px] font-semibold mt-4">
          Start your journey as an agent
        </p>

        <div className="h-3 lg:h-10" />

        <StoreButtons />
      </div>

      <div className="place-items-end">
        <Image
          src={"/images/doctor.svg"}
          alt=""
          width={200}
          height={200}
          className="w-[500px] lg:w-[450px]"
        />
      </div>
    </div>
  );
};

export default BecomeAnAgent;
