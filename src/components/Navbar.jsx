import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { name: "About", link: "about" },
    { name: "Education", link: "education" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.getElementById(item.link);
        if (!section) return;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(item.link);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50
                 bg-black/40 backdrop-blur-xl
                 border-b border-purple-400/20"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold tracking-wide
                     text-purple-200 hover:text-purple-100 transition"
        >
          Portfolio
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.link;

            return (
              <li key={item.name} className="relative">
                <a
                  href={`#${item.link}`}
                  className={`transition ${
                    isActive
                      ? "text-purple-200"
                      : "text-gray-300 hover:text-purple-200"
                  }`}
                >
                  {item.name}
                </a>

                {/* Active underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px]
                              bg-gradient-to-r from-purple-500 to-violet-500
                              transition-all duration-300
                              ${isActive ? "w-full" : "w-0"}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;