"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <div className="fixed right-6 bottom-8 z-50 md:right-10 md:bottom-12">
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => setOpen(true)}
              aria-label="Open chat"
              className="relative w-16 h-16 md:w-18 md:h-18 rounded-full shadow-2xl overflow-hidden flex items-center justify-center
                         bg-gradient-to-tr from-yellow-400 via-purple-500 to-pink-500 ring-4 ring-neutral-900/30 hover:scale-105 transition"
            >
              {/* Animated robotic face */}
              <svg
                viewBox="0 0 120 120"
                width="58"
                height="58"
                className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#FFE26A" />
                    <stop offset="50%" stopColor="#9B5CF7" />
                    <stop offset="100%" stopColor="#FF6FA5" />
                  </linearGradient>
                </defs>

                <rect x="10" y="14" width="100" height="72" rx="12" fill="url(#g1)" />
                <rect x="20" y="28" width="80" height="26" rx="6" fill="#0b0b0b" opacity="0.92" />
                <g transform="translate(24,34)">
                  <rect x="0" y="4" width="20" height="6" rx="3" fill="#7CFFB2">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
                  </rect>
                  <rect x="36" y="4" width="20" height="6" rx="3" fill="#7CFFB2">
                    <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="translate(26,62)" stroke="#060606" strokeWidth="1.6" strokeLinecap="round">
                  <line x1="0" y1="6" x2="68" y2="6" opacity="0.8" />
                  <line x1="0" y1="12" x2="68" y2="12" opacity="0.6" />
                </g>
                <path d="M60 10 L60 0" stroke="#060606" strokeWidth="3" strokeLinecap="round" />
                <circle cx="60" cy="0" r="3.2" fill="#FFDE59" />
              </svg>

              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black/60 border-2 border-yellow-400 flex items-center justify-center text-[10px] font-bold text-yellow-300">
                ⚡
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="w-[280px] md:w-[300px] bg-neutral-900/80 backdrop-blur-lg border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-purple-500 to-pink-500 flex items-center justify-center">
                    <svg viewBox="0 0 64 64" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="8" width="52" height="36" rx="6" fill="#0b0b0b" />
                      <rect x="14" y="18" width="12" height="6" rx="2" fill="#7CFFB2" />
                      <rect x="38" y="18" width="12" height="6" rx="2" fill="#7CFFB2" />
                      <rect x="20" y="28" width="24" height="6" rx="2" fill="#101010" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">CyberBot</div>
                    <div className="text-xs text-neutral-400 -mt-0.5">AI Assistant (Coming Soon)</div>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="p-2 rounded-md hover:bg-neutral-800 transition"
                >
                  <X size={18} className="text-neutral-300" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-purple-500 to-pink-500 flex items-center justify-center text-black font-bold">
                    🤖
                  </div>
                  <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm text-neutral-200">
                    Hello 👋
                    <div className="mt-2 text-neutral-300 text-xs">
                      This chatbot feature is currently <strong>under development</strong>. <br />
                      Work is in progress and it will be live very soon 🚀.
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="mt-4 border-t border-neutral-800 pt-3 text-xs text-neutral-400">
                  <div>Quick info:</div>
                  <ul className="mt-2 list-disc list-inside">
                    <li>Static UI only — no API connected yet.</li>
                    <li>Responsive design — works on mobile & desktop.</li>
                    <li>Future: live chat, AI responses, chat history.</li>
                  </ul>
                </div>

                {/* Disabled Input */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Message (coming soon...)"
                    disabled
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-neutral-800 text-neutral-400 placeholder:text-neutral-500 outline-none"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-neutral-800 text-[11px] text-neutral-500 flex items-center justify-between">
                <div>Designed by Qaimudin</div>
                <div className="text-xs text-neutral-400">v0.1</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
