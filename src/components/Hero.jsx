import { motion } from "framer-motion";

const Hero = () => {
  return (
   <section
  id="home"
  className="relative min-h-screen flex items-start pt-24 md:pt-32 overflow-hidden"
>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b0f46] via-[#3b1366] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.25),transparent_60%)]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
       {/* 
       {/* Badge */}
        <motion.div
          variants={item}
        //  className="inline-flex px-5 py-2 mb-6 rounded-full
        //             border border-purple-400/30 bg-purple-500/10
          //           text-purple-200 text-sm backdrop-blur"
        >
          {/*Available for opportunities*/}
        </motion.div> 
            
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12.5, color: "rgba(225, 210, 240, 1)",
            letterSpacing: "3.5px", marginBottom: 28, opacity: 0.9,
          }}
        >
          {"< Hello World, I'm />"}
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          style={{ marginBottom: 24 }}
        >
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 11vw, 88px)",
            lineHeight: 1,
            letterSpacing: "-2px",
            display: "block",
            WebkitTextStroke: "2px rgba(225, 210, 240, 1)",
            color: "transparent",
            marginTop: 4,
          }}>MAHAMMAD MASHOOD</div>
        </motion.div>

        {/* Role */}
        <motion.p
          variants={item}
          className="mt-6 text-xl md:text-2xl text-purple-200/90 max-w-3xl"
        >
          Full Stack Developer | Software Engineer 
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 text-base md:text-lg text-purple-300/70 max-w-2xl"
        >
           Building intelligent, scalable web applications from the ground up —
          JWT-secured APIs, real-time WebSocket infrastructure, and pixel-level
          UI decisions. Ideas through to production.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="mt-10 flex gap-5">
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl
                       bg-gradient-to-r from-purple-600 to-violet-600
                       text-white font-semibold shadow-lg
                       hover:scale-[1.03] transition"
          >
            View Projects →
          </a>

          <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/Mahammad_Mashood_FullStackDeveloper.pdf";
    link.download = "Mahammad_Mashood_FullStackDeveloper.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="px-8 py-4 rounded-xl
             border border-purple-400/30 text-purple-200
             bg-purple-500/10 backdrop-blur
             hover:bg-purple-500/20 transition"
>
  ⬇ Download Resume
</button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border border-purple-400/40 flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <span className="w-1 h-2 bg-purple-300 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ===== Animation Variants ===== */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default Hero;