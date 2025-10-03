"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Cpu, Globe, Database, GitBranch } from "lucide-react";

const skills = [
  { name: "HTML / CSS", icon: <Code size={20} /> },
  { name: "JavaScript", icon: <Code size={20} /> },
  { name: "TypeScript", icon: <Code size={20} /> },
  { name: "React.js", icon: <Code size={20} /> },
  { name: "Next.js", icon: <Globe size={20} /> },
  { name: "Tailwind CSS", icon: <Palette size={20} /> },
  { name: "Sanity CMS", icon: <Database size={20} /> },
  { name: "API Integration", icon: <Globe size={20} /> },
  { name: "Git / GitHub", icon: <GitBranch size={20} /> },
  { name: "Figma", icon: <Palette size={20} /> },
  { name: "Python (Basic)", icon: <Cpu size={20} /> },
  { name: "GenAI & Agentic AI", icon: <Cpu size={20} /> },
  { name: "Frontend Development", icon: <Globe size={20} /> },
];

const Skills = () => {
  return (
    <section className="py-20 bg-black text-white relative">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/20 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          {/* Underline */}
          <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-neutral-800/60 backdrop-blur-md px-5 py-3 rounded-xl border border-neutral-700 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all cursor-pointer"
            >
              <span className="text-yellow-400">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
