"use client";

import { motion } from "framer-motion";
import { Code, Cpu, ShoppingCart, Globe, Database, PenTool } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: <Code size={30} />,
    desc: "Building fast, responsive, and user-friendly websites using Next.js, React.js, and Tailwind CSS.",
  },
  {
    title: "E-Commerce Solutions",
    icon: <ShoppingCart size={30} />,
    desc: "Designing and developing scalable e-commerce websites with cart, checkout, and dynamic product features.",
  },
  {
    title: "Portfolio & Resume Builders",
    icon: <PenTool size={30} />,
    desc: "Crafting modern, professional, and dynamic portfolios or resume builders tailored for your goals.",
  },
  {
    title: "API Integration",
    icon: <Database size={30} />,
    desc: "Seamless API integration for dynamic content, real-time data, and enhanced functionality.",
  },
  {
    title: "AI & Agentic AI",
    icon: <Cpu size={30} />,
    desc: "Developing AI-driven solutions and autonomous agents that solve real-world problems.",
  },
  {
    title: "Python Automation",
    icon: <Globe size={30} />,
    desc: "Creating automation tools and AI experiments using Python for efficiency and innovation.",
  },
];

export default function Services() {
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
            My Services
          </h1>
          {/* Underline */}
          <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl p-8 text-center hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all"
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 text-black">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold mb-3 text-yellow-400">{service.title}</h2>
              <p className="text-neutral-300 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
