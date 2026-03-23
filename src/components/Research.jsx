import { motion } from "framer-motion";

const Research = () => {
  return (
    <section id="research" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11.5,
          color: "rgba(225, 210, 240, 1)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: 12,
          opacity: 0.85,
        }}>
          {"<Research & Publications/>"}
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
          Research & Publications
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-1 bg-purple-500 mt-4 mb-14 rounded-full"
        ></motion.div>

        {/* Publication Card */}
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
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="px-3 py-1 text-xs font-medium rounded-full
                         bg-purple-600/30 text-purple-200
                         border border-purple-400/40"
            >
              Research Paper
            </span>
            <span className="text-sm text-purple-300">
              Journal Publication
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
            “Job Portal Website”
          </h3>

          {/* Journal info */}
          <p className="text-purple-300 font-medium">
            Journal of Emerging Technologies and Innovative Research (JETIR)
          </p>

          <p className="text-sm text-gray-300 mt-1">
            Volume 12, Issue 7 · July 2025 · ISSN: 2349-5162 · Impact Factor: 7.95
          </p>

          {/* Description */}
          <p className="text-gray-300 mt-6 leading-relaxed max-w-4xl">
            This research paper presents the design and implementation of a
            web-based job portal system with secure authentication, role-based
            access, job posting, application management, and document handling.
            The study focuses on improving usability, efficiency, and scalability
            in online recruitment platforms.
          </p>

          {/* Link */}
          <div className="mt-6">
            <motion.a
              href="https://www.jetir.org/view?paper=JETIRGX06045"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0.85 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-block"
            >
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="inline-flex items-center gap-2
                           px-4 py-1.5 text-xs font-medium rounded-full
                           bg-purple-600/30 text-purple-200
                           border border-purple-400/40
                           backdrop-blur"
              >
                <span>↗</span>
                <span>Dive into the full paper</span>
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;