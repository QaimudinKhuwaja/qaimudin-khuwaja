"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Market Place Ecommerce",
    link: "https://qafix.vercel.app/",
    desc: "Ecommerce Marketplace Website built during hackathon using Next.js framework. Includes login system, payment method and several features.",
    tags: ["Hackathon", "Sanity", "Next.js", "TailwindCSS", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Governor Sindh Website",
    link: "https://governor-sindh-website-five.vercel.app/",
    desc: "Governor Sindh Website clone including all pages and responsive design with Next.js and TailwindCSS.",
    tags: ["Next.js", "TailwindCSS", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Blog Website",
    link: "https://dynamic-blog-website-five.vercel.app/",
    desc: "Dynamic blog website with multiple posts and comment section for readers.",
    tags: ["Next.js", "TailwindCSS", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Watch Website",
    link: "https://milestone-3-project-rho.vercel.app/",
    desc: "Ecommerce Watch Website showcasing styles and brands of different watches.",
    tags: ["Next.js", "TailwindCSS", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Spider UI Web",
    link: "https://milestone-2-project-1.vercel.app/",
    desc: "Spider game UI website built with Next.js including multiple pages.",
    tags: ["HTML", "CSS"],
  },
  {
    title: "HTML CSS Portfolio",
    link: "https://html-css-portfolio-rosy.vercel.app/",
    desc: "Personal Portfolio built using pure HTML & CSS with Home, About, and Contact sections.",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Next.js Simple Portfolio",
    link: "https://milestone-2-project-3.vercel.app/",
    desc: "Portfolio built using Next.js with sections like Home, About, and Contact.",
    tags: ["Next.js", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Resume Builder",
    link: "https://milestone-1-project-5.vercel.app/",
    desc: "Dynamic Resume Builder built during hackathon with share, download and edit features.",
    tags: ["HTML", "CSS", "TypeScript"],
  },
  {
    title: "Todo App",
    link: "https://todo-app-sage-tau-29.vercel.app/",
    desc: "Todo App built with Next.js to add and delete tasks easily.",
    tags: ["Next.js", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Ecommerce Watch",
    link: "https://ecommerce-website-milestone3.vercel.app",
    desc: "Ecommerce Watch Website built with Next.js showcasing multiple watch brands.",
    tags: ["Hackathon", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Game UI",
    link: "https://milestone-2-project-1-xygl.vercel.app/",
    desc: "Game website UI built with Next.js including multiple pages.",
    tags: ["HTML", "CSS"],
  },
  {
    title: "My Portfolio",
    link: "https://qaimudin-khuwaja-portfolio.vercel.app",
    desc: "Portfolio Website built with Next.js framework and TailwindCSS.",
    tags: ["Next.js", "TailwindCSS", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Music Player",
    link: "https://music-player-ip.vercel.app",
    desc: "Music Player Website built using Next.js with multiple songs.",
    tags: ["Internship", "Next.js", "TailwindCSS", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Image Gallery",
    link: "https://image-gallery-ip.vercel.app",
    desc: "Image Gallery website built with Next.js showcasing multiple images and products.",
    tags: ["Internship", "Next.js", "TailwindCSS", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Calculator",
    link: "https://calculator-ip.vercel.app",
    desc: "Calculator built with Next.js including multiple calculation features.",
    tags: ["Internship", "Next.js", "TailwindCSS", "HTML", "CSS", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black text-white py-16 md:py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-60 h-60 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-60 h-60 md:w-72 md:h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-12 md:mb-16
                     bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500
                     bg-clip-text text-transparent leading-snug p-3"
        >
          My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="relative group backdrop-blur-md bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105" // ✅ Slight scale on hover
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur-2xl transition" />

              <Link href={project.link} target="_blank">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4
                               bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400
                               bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300"
                >
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed mb-4 md:mb-5">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


