import { motion } from "framer-motion";

const Internships = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Internships & Experience
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-1 bg-purple-500 mt-4 mb-14 rounded-full"
        ></motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                     border border-purple-400/30
                     shadow-[0_0_60px_rgba(168,85,247,0.25)]
                     hover:shadow-[0_0_90px_rgba(168,85,247,0.35)]
                     transition"
        >
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="space-y-6 text-gray-300 text-lg"
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span className="text-white font-semibold">
                Python Full Stack Developer – Virtual Internship
              </span>
              <br />
              <span className="text-purple-300">
                EduSkills Academy
              </span>
              <span className="text-gray-400">
                {" "} | Oct – Dec 2024
              </span>
            </motion.li>

            <motion.li
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span className="text-white font-semibold">
                Cloud Computing – Virtual Internship
              </span>
              <br />
              <span className="text-purple-300">
                AWS Academy
              </span>
              <span className="text-gray-400">
                {" "} | Jul – Sep 2024
              </span>
            </motion.li>

            <motion.li
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span className="text-white font-semibold">
                Cybersecurity – Virtual Internship
              </span>
              <br />
              <span className="text-purple-300">
                Palo Alto Networks
              </span>
              <span className="text-gray-400">
                {" "} | Jan – Mar 2025
              </span>
            </motion.li>

            <motion.li
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span className="text-white font-semibold">
                Android App Development using Gen AI
              </span>
              <br />
              <span className="text-purple-300">
                Mind Matrix
              </span>
              <span className="text-gray-400">
                {" "} | Feb 2026 – Present
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;