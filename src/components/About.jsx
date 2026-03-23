import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
<div className="lg:col-span-2">
  <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11.5, color: "rgba(225, 210, 240, 1)",
                letterSpacing: "3px", textTransform: "uppercase",
                marginBottom: 12, opacity: 0.85,
              }}>{"<ABOUT ME/>"}</div>
  <h2  style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: 38, color: "#fff", lineHeight: 1.1,
                marginBottom: 18,
              }}>
    Who Am I?
  </h2>
  <div className="w-20 h-1 bg-purple-500 mt-4 mb-14 rounded-full"></div>
</div>
        {/* RIGHT: Profile Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Outer glow ring */}
          <div className="relative group">
            <div
              className="absolute -inset-1 rounded-3xl
                         bg-gradient-to-br from-purple-500/60 via-violet-500/40 to-transparent
                         blur-lg opacity-70 group-hover:opacity-100 transition"
            ></div>

            {/* Card */}
            <div
              className="relative rounded-3xl p-6
                         bg-purple-500/15 backdrop-blur-xl
                         border border-purple-400/30
                         shadow-[0_0_70px_rgba(168,85,247,0.35)]
                         transition-transform duration-500
                         group-hover:-translate-y-2"
            >
              {/* Inner gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent"></div>

              {/* Image */}
              <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden mx-auto">
                <img
                  src="/dp.jpeg"
                  alt="Mahammad Mashood"
                  className="w-full h-full object-cover
                             transition-transform duration-700
                             group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 leading-relaxed mb-6"
          >
           I'm a full-stack developer specializing in{" "}
                <span style={{ color: "#rgba(235, 220, 250, 1)", fontWeight: 600 }}>React</span>{" "}
                and{" "}
                <span style={{ color: "#rgba(235, 220, 250, 1)", fontWeight: 600 }}>Flask</span>,
                with a track record of independently building and shipping
                real-time web applications from scratch.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 leading-relaxed mb-6"
          >
            I'm comfortable owning the full stack — JWT-secured REST APIs,
                WebSocket infrastructure, PostgreSQL, and UI decisions down to
                the component level. I don't just write features; I build systems
                that hold up under load.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 leading-relaxed"
          >
            Built and deployed three production projects, published one
                research paper, and consistently see ideas through to production.
                Based in{"  "}
                <span style={{ color: "rgba(235, 220, 250, 1)", fontWeight: 500 }}>
                     Mangaluru, Karnataka
                </span>.
            </motion.p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;