import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-purple-500 mt-4 mb-14 rounded-full"
        ></motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 md:left-4 top-0 bottom-0 w-px bg-purple-500/40 -translate-x-1/2 md:translate-x-0"></div>

          {/* ===== Timeline Item 1 ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative md:pl-14 pl-0 mb-16"
          >
            {/* Dot */}
            <div className="absolute left-1/2 md:left-2 top-4 w-4 h-4 rounded-full bg-purple-500 -translate-x-1/2 md:translate-x-0"></div>

            {/* Card */}
            <div className="mt-10 md:mt-0 rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                            border border-purple-400/30
                            shadow-[0_0_60px_rgba(168,85,247,0.25)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-400/30">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    B.E. in Computer Science Engineering
                  </h3>
                  <p className="text-purple-300 font-medium">
                    Srinivas Institute of Technology, Mangalore
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    2022 – 2026
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-gray-300">
                <li>▸ Strong foundation in software engineering concepts</li>
                <li>▸ Hands-on experience with full-stack and AI-based projects</li>
                <li>▸ Actively involved in technical and academic activities</li>
              </ul>
            </div>
          </motion.div>

          {/* ===== Timeline Item 2 ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative md:pl-14 pl-0 mb-16"
          >
            <div className="absolute left-1/2 md:left-2 top-4 w-4 h-4 rounded-full bg-purple-500 -translate-x-1/2 md:translate-x-0"></div>

            <div className="mt-10 md:mt-0 rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                            border border-purple-400/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-400/30">
                  📘
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Class XII – Science (PCMB)
                  </h3>
                  <p className="text-purple-300 font-medium">
                    St. Philomena PU College, Puttur
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    2020 – 2022
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-gray-300">
                <li>▸ Strong fundamentals in Mathematics and Science</li>
                <li>▸ Developed early interest in programming and technology</li>
              </ul>
            </div>
          </motion.div>

          {/* ===== Timeline Item 3 ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:pl-14 pl-0"
          >
            <div className="absolute left-1/2 md:left-2 top-4 w-4 h-4 rounded-full bg-purple-500 -translate-x-1/2 md:translate-x-0"></div>

            <div className="mt-10 md:mt-0 rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                            border border-purple-400/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-400/30">
                  🏫
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Class X
                  </h3>
                  <p className="text-purple-300 font-medium">
                    St. Philomena High School, Puttur
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    2019 – 2020
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-gray-300">
                <li>▸ Built strong academic foundation</li>
                <li>▸ Participated in school-level activities and competitions</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;