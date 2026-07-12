"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import ThemeToggler from "../Helper/ThemeToggler";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
   { href: "#career", label: "Career" },
  
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-2xl bg-background/80" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl lg:max-w-7xl mx-auto h-16 flex items-center justify-between">
          <Logo />

          <ul className="hidden lg:flex items-center gap-1 py-2 px-2 rounded-full bg-surface/60 border border-border">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm hover:text-primary transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggler />
            <LinkButton
              variant="primary"
              rounded
              text="l"
              href="/document/cv.pdf"
              download
            />
          </div>

          <button
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-border"
          >
            {navOpen ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>
      </nav>

      <MobileNav navOpen={navOpen} />
    </>
  );
};

export default Navbar;