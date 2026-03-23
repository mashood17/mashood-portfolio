import { motion } from "framer-motion";

const Internships = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Label */}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11.5,
          color: "rgba(225, 210, 240, 1)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: 12,
          opacity: 0.85,
        }}>
          {"<Experience/>"}
        </div>

        {/* Heading */}
        <motion.h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 38,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 12,
          }}
        >
          Where I've Worked
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-1 bg-purple-500 mt-4 mb-14 rounded-full"
        />

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

            {/* Single Experience */}
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

              <div className="mt-3">
                <ol className="list-disc ml-5 space-y-2">
                  <li>

Building Android applications using Java/Kotlin in Android Studio, implementing UI components and activity lifecycle management in a project-based environment.                  </li>
                  <li>

Leveraging GenAI tools (GitHub Copilot, Gemini) to accelerate development workflows and improve code quality across assigned modules.
                  </li>
                  <li>

Collaborating via Git-based version control and structured peer debugging practices.                  </li>
                </ol>
              </div>
            </motion.li>

          </motion.ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Internships;