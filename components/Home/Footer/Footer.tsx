import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-900/20 backdrop-blur-xl border-t border-white/10 py-10">
      <div className="w-[90%] md:w-[70%] mx-auto flex flex-col items-center space-y-6">
        
        {/* Navigation */}
        <nav className="flex space-x-6 text-white/60 text-sm">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Social */}
        <div className="flex items-center space-x-6">
          <FaGithub className="w-6 h-6 text-white/60 hover:text-white transition" />
          <FaLinkedin className="w-6 h-6 text-white/60 hover:text-white transition" />
          <FaYoutube className="w-6 h-6 text-white/60 hover:text-white transition" />
        </div>

        {/* Copyright */}
        <p className="text-white/60 text-xs tracking-wide">
          © {year} Davi P. Oliveira / Voltaris Digital Solutions — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
