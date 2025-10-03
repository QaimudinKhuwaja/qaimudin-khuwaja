"use client";

import Image from "next/image";
import myphoto from "../assets/my-ai-profile.png";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-md bg-neutral-900/40 border border-neutral-800/70 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-2xl hover:shadow-purple-500/20 transition-all"
        >
          {/* LEFT: Name, tagline, description, links */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              Qaimudin Khuwaja
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-xl font-medium text-neutral-400"
            >
              Transforming Ideas into Modern Web Experiences 🚀
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-base md:text-lg text-neutral-300 max-w-lg leading-relaxed"
            >
              I’m a{" "}
              <span className="text-yellow-400 font-semibold">
                Frontend Web Developer
              </span>{" "}
              — building clean, fast and accessible experiences with{" "}
              <span className="text-purple-400">React</span>,{" "}
              <span className="text-pink-400">Next.js</span> and{" "}
              <span className="text-blue-400">Tailwind CSS</span>.
            </motion.p>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-6 flex items-center gap-5 flex-wrap"
            >
              {[
                {
                  href: "https://drive.google.com/file/d/1j0rXJtmmzoht6E_ZoPgUL5xJ5Fk3aZbK/view?usp=drive_link",
                  label: "Resume",
                  gradient: "from-purple-500 to-yellow-500",
                },
                {
                  href: "https://github.com/QaimudinKhuwaja/",
                  label: "GitHub",
                  gradient: "from-gray-700 to-gray-900",
                },
                {
                  href: "https://www.linkedin.com/in/qaimudin-khuwaja-7127252b4",
                  label: "LinkedIn",
                  gradient: "from-blue-500 to-blue-700",
                },
                {
                  href: "mailto:farazahmedkhuwaja171@gmail.com",
                  label: "Email",
                  gradient: "from-yellow-500 to-yellow-700",
                },
              ].map((btn, i) => (
                <a
                  key={i}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${btn.gradient} text-black font-semibold hover:opacity-90 transition`}
                >
                  {btn.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Profile image with rotating ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-full md:w-1/2 flex items-center justify-center"
          >
            <div className="relative group">
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow bg-gradient-to-tr from-yellow-400 via-purple-500 to-pink-500 [mask-composite:exclude] blur-xl opacity-50" />

              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-purple-500/40 group-hover:ring-yellow-400/60 transition-all duration-500">
                <Image
                  src={myphoto}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider + Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 max-w-3xl mx-auto flex flex-col items-center gap-3"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
          <ChevronDown className="text-purple-400 animate-bounce" size={32} />
        </motion.div>
      </div>
    </header>
  );
}

