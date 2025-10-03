"use client";
import React from "react";
import { motion } from "framer-motion";

const pinPointsData = [
  { icon: "🚀", title: "Projects", desc: "100+ projects completed" },
  { icon: "🏆", title: "Hackathons", desc: "3+ hackathons participated" },
  { icon: "🗣️", title: "Languages", desc: "English, Urdu" },
  { icon: "🎓", title: "Hobbies", desc: "Coding, Reading, Writing" },
  { icon: "🙆‍♂️", title: "Age", desc: "17 years old" },
];

const Pinpoints = () => {
  return (
    <section className="py-16 bg-black text-white relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-60 h-60 bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-yellow-500/20 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Pin Points
      </motion.h1>

      {/* Diamond Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
        {pinPointsData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Diamond Shape */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-neutral-900 border border-neutral-700 rotate-45 flex items-center justify-center group-hover:border-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-500/20 transition-all">
              <div className="-rotate-45 text-center">
                <div className="text-2xl">{item.icon}</div>
                <h2 className="text-sm font-semibold text-yellow-400">{item.title}</h2>
                <p className="text-[10px] sm:text-xs text-neutral-300">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pinpoints;
