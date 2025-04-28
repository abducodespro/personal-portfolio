"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Logo = ({ className = "" }) => (
    <svg
    viewBox="0 0 100 100"
    className={`h-8 w-8 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background circle */}
    <circle cx="50" cy="50" r="45" fill="#1E40AF" opacity="0.2" />
  
    {/* A letter */}
    <polygon
      points="50,25 30,75 37,75 42,63 58,63 63,75 70,75 50,25"
      fill="#60A5FA"
    />
    <rect x="46" y="45" width="8" height="8" fill="#1F2937" rx="1" />
  
    {/* J letter */}
    <path
      d="M70 30
         Q78 30, 78 40
         L78 65
         Q78 75, 68 75
         Q60 75, 60 70
         L60 65"
      fill="none"
      stroke="#60A5FA"
      strokeWidth="5"
      strokeLinecap="round"
    />
  
    {/* Glow effect */}
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="#60A5FA"
      strokeWidth="1"
      strokeOpacity="0.3"
    />
  </svg>
  
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const linkedinUrl = "https://www.linkedin.com/in/abducodespro/";

  // Close mobile menu when clicking a link
  const handleNavLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Update current section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href); // Select the section by its ID
        if (section) {
          const { offsetTop, offsetHeight } = section as HTMLElement; // Ensure section is not null
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed z-50 w-full ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-gray-900/50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo (Left) */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Logo className="text-green-900" />
            <span className="text-xl font-bold text-white">Abdu.dev</span>
          </motion.a>

          {/* Desktop Links (Center) */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{
                  scale: 1.05,
                  color: "#60A5FA",
                }}
                className={`relative rounded-md px-3 py-2 text-sm font-medium ${
                  currentSection === link.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {link.name}
                {currentSection === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-400"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA Button (Right) - Links to LinkedIn */}
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 md:block"
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-gray-800 md:hidden"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={handleNavLinkClick}
                whileHover={{ x: 5 }}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  currentSection === link.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="mt-2 block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-base font-medium text-white"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
