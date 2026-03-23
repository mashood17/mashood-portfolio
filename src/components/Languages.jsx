import { motion } from "framer-motion";

const Languages = () => {
  return (
    <section id="languages" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

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
          {"<Languages/>"}
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
Languages & Communication
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-1 bg-purple-500 mt-4 mb-14 rounded-full"
        ></motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <LanguageCard language="English" level="Professional " />
        <LanguageCard language="Hindi" level="Conversational" />
          <LanguageCard language="Kannada" level="Native " />
          <LanguageCard language="Malayalam" level="Native " />
          <LanguageCard language="Tamil" level="Basic" />
        </motion.div>
      </div>
    </section>
  );
};

/* ===== Reusable Language Card ===== */
const LanguageCard = ({ language, level }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="rounded-2xl p-6
                 bg-purple-500/15 backdrop-blur-xl
                 border border-purple-400/30
                 shadow-[0_0_50px_rgba(168,85,247,0.25)]
                 hover:shadow-[0_0_80px_rgba(168,85,247,0.35)]
                 transition"
    >
      <h3 className="text-xl font-semibold text-white mb-2">
        {language}
      </h3>
      <p className="text-purple-300 text-sm">
        {level}
      </p>
    </motion.div>
  );
};

export default Languages;