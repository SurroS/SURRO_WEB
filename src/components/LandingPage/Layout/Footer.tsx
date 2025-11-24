import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 lg:p-10 my-[2rem] space-y-[48px] grid">
      <h1 className="bg-gradient-to-r from-[#6C6CD3] to-[#092D7B] text-transparent bg-clip-text text-[48px]">
        Surro
      </h1>
      <div className="grid grid-cols-2 gap-20 lg:flex justify-between">
        <div className="space-y-[24px] lg:space-y-[32px]">
          <h4 className="text-[#A8A7A6] text-[20px] lg:text-[24px]">Explore</h4>
          <div className="text-[#535353] text-[16px] lg:text-[20px] space-y-[24px] lg:space-y-[32px] flex flex-col">
            <Link href="/#home">
              <p>Home</p>
            </Link>
            <Link href="/#about">
              <p>About</p>
            </Link>
            <Link href="/#how-it-works">
              <p>How it works</p>
            </Link>
            <Link href="/#faq">
              <p>FAQs</p>
            </Link>
          </div>
        </div>
        <div className="space-y-[32px] lg:space-y-[32px]">
          <h4 className="text-[#A8A7A6] text-[20px] lg:text-[24px]">Socials</h4>
          <div className="text-[#535353] text-[16px] lg:text-[20px] grid space-y-[24px] lg:space-y-[32px]">
            <Link href="/">
              <p>X(Twitter)</p>
            </Link>
            <Link href="/">
              <p>LinkedIn</p>
            </Link>
            <Link href="/">
              <p>Instagram</p>
            </Link>
            <Link href="/">
              <p>Facebook</p>
            </Link>
          </div>
        </div>
        <div className="space-y-[32px] lg:space-y-[32px]">
          <h4 className="text-[#A8A7A6] text-[20px] lg:text-[24px]">
            Get in touch
          </h4>
          <div className="text-[#535353] text-[16px] lg:text-[20px] grid space-y-[24px] lg:space-y-[32px]">
            <Link href="/">
              <p>Terms and Conditions</p>
            </Link>
            <Link href="/">
              <p>Privacy policy</p>
            </Link>
            <Link href="/">
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
      <small className="text-[#A8A7A6] text-[13px] lg:text-[16px] mx-auto">
        Copyright @ Surro 2025. All rights reserved
      </small>
    </footer>
  );
};

export default Footer;
