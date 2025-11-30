"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import StoreButtons from "../StoreButtons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white h-(--navbar-height) flex items-center justify-between p-5 lg:px-10 border-b border-[#D2D1D0] z-50">

      {/* Logo */}
      <div className="flex items-center gap-3 font-bold text-xl sm:text-2xl lg:text-3xl">
        <Image
          src="/icons/logo-no-bg.png"
          alt="Surro"
          width={60}
          height={60}
          className="object-contain"
        />
        <h1>Surro</h1>
      </div>

      {/* Mobile menu button */}
      <button
        className="block lg:hidden z-999"
        onClick={() => setOpen(true)}
      >
        <Menu size={32} />
      </button>

      {/* Desktop links */}
      <div className="hidden lg:flex items-end gap-[55px] font-semibold text-base lg:text-lg xl:text-xl">
        <Link href="/#home">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#how-it-works">How it works</Link>
        <Link href="/#faq">FAQs</Link>
      </div>

      <div className="hidden lg:block">
        <StoreButtons />
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-998 lg:hidden">
          {/* Click outside to close */}
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white shadow-xl z-999 p-6">
            <button
              className="mb-6"
              onClick={() => setOpen(false)}
            >
              <X size={30} />
            </button>

            <nav className="flex flex-col gap-6 text-lg font-semibold">
              <Link href="/#home" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/#about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/#how-it-works" onClick={() => setOpen(false)}>
                How it works
              </Link>
              <Link href="/#faq" onClick={() => setOpen(false)}>
                FAQs
              </Link>
            </nav>

            <div className="mt-10">
              <StoreButtons />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
