import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { name: "<About/>", link: "about" },
      { name: "<Skills/>", link: "skills" },
    { name: "<Projects/>", link: "projects" },
    { name: "<Education/>", link: "education" },
    { name: "<Contact/>", link: "contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

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
    handleScroll();

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
         <span >mashood</span>
            <span style={{ color: "rgba(196, 196, 196, 0.4)" }}> :: </span>
            <span >dev</span>
        </a>

        {/* Desktop Nav */}
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-purple-200 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 backdrop-blur-xl
                     border-t border-purple-400/20"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.link}`}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-4 text-sm
                    ${
                      activeSection === item.link
                        ? "text-purple-200 bg-purple-800/30"
                        : "text-gray-300 hover:text-purple-200"
                    }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;