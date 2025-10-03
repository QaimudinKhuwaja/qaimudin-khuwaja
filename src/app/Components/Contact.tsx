"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // server side pe static render hoga (without animation)
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE - Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-neutral-300 leading-relaxed">
            I’d love to hear from you! Whether you have a project idea, want to
            collaborate, or just want to say hi — feel free to reach out.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 text-neutral-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" /> 
              farazahmedkhuwaja171@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-400" /> 
              +923113906067
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-400" /> 
              Gambat, Sindh, Pakistan
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://github.com/QaimudinKhuwaja"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/qaimudin-khuwaja-7127252b4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 text-blue-400 hover:bg-blue-500 hover:text-black transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-neutral-900/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-neutral-800 space-y-6"
        >
          <h2 className="text-2xl font-bold text-white">Send me a Message</h2>

          <div>
            <label className="block text-sm text-neutral-400 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-neutral-700 text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-neutral-700 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-neutral-700 text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-yellow-500 text-black font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </main>
  );
}
