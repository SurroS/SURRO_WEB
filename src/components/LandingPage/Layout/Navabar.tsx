import { Menu } from "lucide-react";
import Link from "next/link";
import StoreButtons from "../StoreButtons";
import Image from "next/image";

const Navabar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white h-[var(--navbar-height)] flex items-center justify-between p-5 lg:px-10 border-b border-[#D2D1D0] z-50">
      <div className="w-[400px] flex font-bold text-2xl items-center">
        <Image
          src={"/icons/logo-no-bg.png"}
          alt="Surro"
          width={100}
          height={100}
        />
        <h1>Surro</h1>
      </div>
      {/* mobile menu  */}
      <div className="block lg:hidden">
        <Menu size={40} cursor={"pointer"} />
      </div>

      {/* links  */}
      <div className="lg:flex items-end gap-[55px] font-semibold text-[16px] hidden">
        <Link href="/#home">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#how-it-works">How it works</Link>
        <Link href="/#faq">FAQs</Link>
      </div>

      {/* buttons */}
      <div className="hidden lg:block">
        <StoreButtons />
      </div>
    </nav>
  );
};

export default Navabar;
