"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Projects", href: "/Projects" },
    { name: "Skills", href: "/Skills" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav className="w-full text-zinc-700 fixed top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md">
      <div className="max-w-7xl  mx-auto px-4 py-4 flex justify-between items-center">
       
      <div className="flex items-center space-x-3">
          <Image
            src="/me2.jpeg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="text-2xl font-extrabold drop-shadow-md">
            <Link href="#">Sandeep Rajawat</Link>
          </div>
        </div>

       
        <div className="hidden md:flex space-x-8 ">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" hover:text-white font-medium transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>


        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

  
      {open && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white/10 backdrop-blur-md border-t border-white/20 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block  font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
