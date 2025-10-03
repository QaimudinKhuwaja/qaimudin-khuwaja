"use client"
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "GIAIC (Governor Sindh Initiative for Artificial Intelligence Courses)",
    year: "2025 - Present",
    desc: "Cloud Native Applied Generative AI and Agentic AI",
  },
  {
    title: "Government Boys Higher Secondary College",
    year: "2025 - Present",
    desc: "Continue 2nd year of Intermediate in Pre-engineering ",
  },
];

const Education = () => {
  return (
    <section className="py-16 bg-black relative w-full overflow-x-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-60 h-60 bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-yellow-500/20 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14
        bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 
        bg-clip-text text-transparent px-4"
      >
        Education
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] sm:w-[3px] bg-gradient-to-b from-yellow-400 via-purple-400 to-pink-500 transform -translate-x-1/2"></div>

        <div className="flex flex-col gap-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative w-full md:w-1/2 ${
                index % 2 === 0 ? "self-start text-left pr-4 sm:pr-6" : "self-end text-right pl-4 sm:pl-6"
              }`}
            >
              {/* Dot */}
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-400 border-4 border-black shadow-lg"></div>

              {/* Card */}
              <div className="backdrop-blur-md bg-neutral-900/70 border border-neutral-700 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-yellow-400 hover:shadow-yellow-500/20 transition-all">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 text-black rounded-full mb-3">
                  {item.year}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-yellow-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
