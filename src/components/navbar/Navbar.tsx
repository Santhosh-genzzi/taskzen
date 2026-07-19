"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import ThemeToggler from "../Helper/ThemeToggler";
import LinkButton from "../ui/LinkButton";
import { LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import register from "@/app/register/page";


export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled,setScrolled]=useState(false)
  const [navOpen,setNavOpen]=useState(false)
  useEffect(()=>{
    const handlescroll =()=>{
      setScrolled(window.scrollY>40)
    }
    window.addEventListener("scroll",handlescroll);
    return ()=>window.removeEventListener("scroll",handlescroll)
  })
  return (
    <>
    <nav className={`sticky top-0 left-0 z-999 w-full transition-all duration-300 ${scrolled?"bg-background/80 backdrop-blur-2xl":"bg-transparent"}`}>
    <div className={`max-w-6xl lg:max-w-7xl p-3 mt-3 h-8 mx-auto flex items-center justify-between`}>
      <Logo/>
      <ul className="hidden lg:flex items-center gap-2  px-4 py-2  ">
      {navLinks.map((link,index)=>(
        <li key={index}>
          <Link href={link.href} className="px-4 py-2 rounded-full text-text hover:text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
          {link.label}
          </Link>
        </li>
      ))}
      </ul>
      <div className="hidden lg:flex items-center gap-4">
        <ThemeToggler/>
        <Link
  href="/register"
  className="bg-primary/60 text-white px-5 py-2 rounded-full"
>
  login
</Link>
 <Link
  href="/Logout"
  className="bg-primary/60 text-white px-5 py-2 rounded-full"
>
  logout
</Link>
        </div>
        <button onClick={()=>setNavOpen(!navOpen)} className="lg:hidden w-10 h-10 mr-2  rounded-full border border-border flex items-center justify-center gap-4">
          {navOpen?<LuX className="w-5 h-5 z-10"/>:<LuMenu className="w-5 h-5 z-10"/>}
        </button>
    </div>
    </nav>
    <MobileNav navOpen={navOpen}/>
    </>
  )
}

export default Navbar



