"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-neutral-900 to-black py-12 mt-12 shadow-inner border-t border-neutral-800">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Company / Startup Branding */}
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          Tech Inizio
        </h2>
        <p className="text-sm text-neutral-400 mt-1">
          Crafted with ❤️ by Tech Inizio | Agentic AI & Web Development Services
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-5 mt-6">
          {[
            { icon: <FaGithub size={22} />, link: "https://github.com/QaimudinKhuwaja" },
            { icon: <FaLinkedin size={22} />, link: "https://linkedin.com/QaimudinKhuwaja" },
            { icon: <FaEnvelope size={22} />, link: "mailto:farazahmedkhuwaja171@gmail.com" },
            { icon: <FaFacebook size={22} />, link: "https://facebook.com/QaimudinKhuwaja" },
            { icon: <FaTwitter size={22} />, link: "https://twitter.com/QaimudinKhuwaja" },
            { icon: <FaInstagram size={22} />, link: "https://www.instagram.com/faraz_khuwajaa?igsh=bGRtOTV1bGo3emM1" },
            { icon: <FaYoutube size={22} />, link: "https://youtube.com/@codewithfarazz?si=tkB_YMm6A8sZiVzQ" },
            
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-12 h-12 rounded-full bg-neutral-800/70 backdrop-blur-md text-yellow-400 
              hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 hover:text-black 
              transform hover:scale-110 transition duration-300 shadow-md hover:shadow-yellow-500/40"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center text-xs text-neutral-500 mt-8 border-t border-neutral-800 pt-4">
          <p>© {new Date().getFullYear()} Qaimudin Khuwaja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

