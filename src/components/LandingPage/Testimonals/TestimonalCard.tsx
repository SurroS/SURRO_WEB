import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  text: string;
  name: string;
}

const TestimonalCard = (props: Props) => {
  return (
    <div className="bg-[#e5dfe7] border-2 border-white rounded-[30px] p-5 space-y-5 justify-end items-end">
      <p className="text-[#585858] text-[16px] lg:text-{24px]">{props.text}</p>
      <div className="flex items-center gap-3 justify-end ">
        <Avatar>
          {/* <AvatarImage src={"/images/icons/logo-no-bg.png"} /> */}
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
        <p className="text-[#585858] text-[13px] lg:text-sub-heading">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default TestimonalCard;
