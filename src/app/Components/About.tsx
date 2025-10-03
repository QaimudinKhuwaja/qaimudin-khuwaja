"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-10 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Divider */}
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 rounded-full mb-10" />

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-neutral-900/50 border border-neutral-800/70 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-purple-500/20 transition-all text-left"
        >
          <p className="text-neutral-300 leading-relaxed text-lg mb-6">
            My self{" "}
            <span className="text-yellow-400 font-semibold">
              Qaimudin Khuwaja😎
            </span>
            . I am a{" "}
            <span className="text-purple-400 font-semibold">
              Frontend Developer
            </span>{" "}
            with{" "}
            <span className="text-pink-400 font-semibold">
              1.5+ years of experience
            </span>
            , and a portfolio of{" "}
            <span className="text-yellow-400 font-semibold">100+ projects</span>
            , including websites, e-commerce platforms, resume builders, and
            dynamic portfolios.
          </p>

          <p className="text-neutral-300 leading-relaxed text-lg mb-6">
            My expertise includes{" "}
            <span className="text-pink-400">
              Next.js, React.js, Tailwind CSS, TypeScript, HTML, CSS, and
              JavaScript
            </span>
            , where I focus on building fast, responsive, and user-friendly
            applications. 😊
          </p>

          <p className="text-neutral-300 leading-relaxed text-lg mb-6">
            Alongside frontend development, I am deeply engaged in{" "}
            <span className="text-yellow-400 font-semibold">Agentic AI 🤖</span>,
            creating{" "}
            <span className="text-purple-400 font-semibold">
              AI-driven projects
            </span>{" "}
            that solve real-world problems. I also work with{" "}
            <span className="text-pink-400 font-semibold">Python</span> for
            automation and AI experiments.
          </p>

          <p className="text-neutral-300 leading-relaxed text-lg">
            Currently, I am studying at{" "}
            <span className="text-purple-400 font-semibold">GIAIC</span>, where
            I actively combine{" "}
            <span className="text-yellow-400 font-semibold">
              modern frontend development
            </span>{" "}
            with{" "}
            <span className="text-pink-400 font-semibold">cutting-edge AI</span>
            . My mission is simple: to bridge the gap between{" "}
            <span className="text-yellow-400 font-semibold">
              intelligent AI systems 👀
            </span>{" "}
            and{" "}
            <span className="text-purple-400 font-semibold">
              user-centric applications
            </span>{" "}
            for the next generation of digital experiences. 🙌
          </p>
        </motion.div>
      </div>
    </section>
  );
}

