import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";

export default function Homepage() {
  const [activeAdjective, setActiveAdjective] = useState(0);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ShashankSreep",
      hoverColor: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shashank-sreepathi/",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:shashanksreepathi3@gmail.com",
      hoverColor: "hover:text-green-400",
    },
  ];

  const adjectives = [
    "Software Engineer",
    "Student",
    "Builder",
    "Coffee Addict",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdjective((prev) => (prev + 1) % adjectives.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [adjectives.length]);

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-xl md:text-6xl text-white font-light tracking-tight">
              Shashank Sreepathi
            </h1>

            <div className="h-10 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={adjectives[activeAdjective]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl text-gray-400 font-light tracking-wide"
                >
                  {adjectives[activeAdjective]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-8 pt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {socialLinks.map((social, idx) => (
              <button
                key={idx}
                className={`h-11 w-11 text-gray-500 ${social.hoverColor} transition-all duration-500 scale-100 hover:scale-103 ease-in-out`}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" strokeWidth={1.5} />
                </a>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
