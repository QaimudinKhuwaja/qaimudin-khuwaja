"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import logo from "../assets/lion.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ current route ka path mil jayega

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Projects", href: "/Projects" },
    { name: "Services", href: "/Services" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full top-0 left-0 z-50 bg-black/50 backdrop-blur-lg border-b border-neutral-800 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Logo"
            width={42}
            height={42}
            className="rounded-full shadow-md"
          />
          <a
            href="https://tech-inizio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-md hover:opacity-80 transition"
          >
            Tech Inizio
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-neutral-200 font-medium">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href; // ✅ check if active page
            return (
              <li key={i}>
                <Link
                  href={link.href}
                  className={`relative group transition-colors ${
                    isActive ? "text-yellow-400" : ""
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 backdrop-blur-xl border-t border-neutral-800"
        >
          <ul className="flex flex-col items-center py-6 gap-6 text-neutral-200 font-medium text-lg">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <li key={i}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors ${
                      isActive ? "text-yellow-400" : "hover:text-yellow-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}


