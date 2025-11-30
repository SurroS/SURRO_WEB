"use client";
import Link from "next/link";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/#home" },
      { label: "About", href: "/#about" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "Terms and Conditions", href: "/" },
      { label: "Privacy policy", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="p-6 lg:p-12 mt-10 bg-white border-t">
      {/* Logo */}
      <h1 className="bg-linear-to-r from-[#6C6CD3] to-[#092D7B] text-transparent bg-clip-text text-4xl lg:text-5xl mb-10">
        Surro
      </h1>

      <div className="grid md:grid-cols-4 gap-12">
        {/* Explore + Legal Sections */}
        {footerSections.map((section) => (
          <div key={section.title} className="space-y-5">
            <h4 className="text-[#A8A7A6] text-xl">{section.title}</h4>

            <div className="flex flex-col space-y-4 text-[#535353] text-lg">
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#6C6CD3] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Social + Newsletter */}
        <div className="space-y-6">
          <h4 className="text-[#A8A7A6] text-xl">Connect</h4>

          {/* Social Icons */}
          <div className="flex space-x-5 text-[#535353]">
            <Link
              href="https://twitter.com/SurroSantara"
              className="hover:text-[#6C6CD3] transition"
            >
              <FaTwitter size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/108860155/"
              className="hover:text-[#6C6CD3] transition"
            >
              <FaLinkedinIn size={22} />
            </Link>
            <Link
              href="https://www.instagram.com/surrosantara/"
              className="hover:text-[#6C6CD3] transition"
            >
              <FaInstagram size={22} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61580441493572"
              className="hover:text-[#6C6CD3] transition"
            >
              <FaFacebookF size={22} />
            </Link>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <p className="text-[#535353]">
              Subscribe for updates & announcements.
            </p>

            <form
              className="flex items-center space-x-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border border-[#ccc] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C6CD3]"
              />
              <button
                type="submit"
                className="bg-linear-to-r from-[#6C6CD3] to-[#092D7B] text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
              >
                <FaEnvelope size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 text-[#A8A7A6] text-sm lg:text-base">
        © Surro 2025. All rights reserved.
      </div>
    </footer>
  );
}
