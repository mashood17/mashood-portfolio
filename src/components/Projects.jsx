import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11.5, color: "rgba(225, 210, 240, 1)",
                letterSpacing: "3px", textTransform: "uppercase",
                marginBottom: 12, opacity: 0.85,
              }}>{"<PROJECTS/>"}</div>

        {/* Heading */}
        <motion.h2
          style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: 38, color: "#fff", lineHeight: 1.1,
                marginBottom: 18,
              }}  >
          Things I've Built
        </motion.h2>

        

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-1 bg-purple-500 mt-4 mb-14 rounded-full"
        ></motion.div>

        <div >
        <p style={{
  fontSize: 15.5,
  color: "#A0A0A0",
  lineHeight: 1.75,
  maxWidth: 560,
  marginBottom: 40,
}}>
              Shipped to production, not just committed to a repo.
            </p>
            </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* ===== Project 1 ===== */}
          <ProjectCard
            featured
            title="CampusLoop – Real-time Campus Communication Platform"
            description="Replaced fragmented WhatsApp-based communication with a structured real-time platform. Secured 20+ REST endpoints with JWT token rotation. Load tested at 50 concurrent users — 72ms avg response, 23+ RPS, 0% failure rate. 21 pytest tests, 100% pass."
            tech={[
              "React",
              "Flask",
              "PostgreSQL",
              "WebSockets",
              "JWT",
            ]}
            code="https://github.com/mashood17/campus_loop"
            live="https://campus-loop-pi.vercel.app"
          />

          {/* ===== Project 2 ===== */}
         <ProjectCard
            featured
            title="GitInsight – GitHub Developer Analytics Platform"
            description="Full-stack analytics platform with a custom developer scoring algorithm — classifies developers as Beginner, Intermediate, or Advanced based on weighted repos, stars, and followers. Validated by benchmarking against known profiles."
            tech={[
              "Python",
              "Flask",
              "JavaScript",
              "Chart.js",
              "GitHub REST API",
            ]}
            code="https://github.com/mashood17/gitinsight"
            live="https://gitinsight-lake.vercel.app/"
          />

          {/* ===== Project 3 ===== */}
         <ProjectCard
            featured
            title="Student AI Hub – AI Productivity Platform"
            description="Sole frontend developer on a team project. Built 7+ React modules: AI code generator, debugger, chatbot, doc summarizer, resume analyzer, roadmap generator, and task manager. Integrated 4 LLM providers with dynamic model switching."
            tech={[
              "React",
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "LLaMA",
              "Cerebras",
              "OpenRouter"
            ]}
            code="https://github.com/mashood17/student-ai-hub"
            live="https://frontend-k5qm.onrender.com/"
          />

        </motion.div>
      </div>
    </section>
  );
};

/* ===== Reusable Project Card ===== */
const ProjectCard = ({ title, description, tech, code, live, featured }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className={`relative h-full rounded-2xl p-8
                  bg-purple-500/15 backdrop-blur-xl
                  border border-purple-400/30
                  shadow-[0_0_60px_rgba(168,85,247,0.25)]
                  hover:shadow-[0_0_90px_rgba(168,85,247,0.4)]
                  transition`}
    >
      {/* Featured badge */}
      {featured && (
        <span
          className="absolute top-5 left-5 px-3 py-1 text-xs font-medium
                     rounded-full bg-purple-600/30 text-purple-200
                     border border-purple-400/40"
        >
          Featured
        </span>
      )}

      <h3 className="text-xl md:text-2xl font-semibold text-white mt-6">
        {title}
      </h3>

      <p className="text-gray-300 mt-4 leading-relaxed">
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-6">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full text-sm
                       bg-purple-700/20 text-purple-200
                       border border-purple-400/30"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-6 mt-8 text-sm font-medium">
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="text-purple-300 hover:text-purple-100 transition"
          >
            ⌘ Code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="text-purple-300 hover:text-purple-100 transition"
          >
            ↗ Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;