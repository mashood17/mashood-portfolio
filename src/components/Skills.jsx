import { motion } from "framer-motion";

/* ===== Animation Variants ===== */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>


      
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11.5, color: "rgba(225, 210, 240, 1)",
                letterSpacing: "3px", textTransform: "uppercase",
                marginBottom: 12, opacity: 0.85,
              }}>{"<SKILLS/>"}</div>

        {/* Heading */}
        <motion.h2
          style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: 38, color: "#fff", lineHeight: 1.1,
              marginBottom: 12,
            }}
        >
          Tech Stack
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-1 bg-purple-500 mt-4 mb-14 rounded-full"
        ></motion.div>

<div style={{
  fontSize: 15.5,
  color: "#A0A0A0",
  lineHeight: 2.75,
  maxWidth: 560,
  marginBottom: 40,
}}> 
         <p style={{
              fontSize: 15.5, color: "#A0A0A0",
              lineHeight: 1.75, maxWidth: 560,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              The tools I reach for when building production-grade applications —
              chosen for reliability, not just trend.
            </p>
            </div>

        {/* ===== Main Grid ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
      

          <SkillCard
            title="Frontend Development"
            icon="💻"
            skills={["React.js", "JavaScript ES6+", "Tailwind CSS", "HTML5", "CSS3","Component Architecture"]}
          />

          <SkillCard
            title="Backend Development"
            icon="⚙️"
            skills={["Flask", "REST APIs", "WebSockets", "Flask-SocketIO"]}
          />

          <SkillCard
            title="Databases"
            icon="🗄️"
            skills={["PostgreSQL", "MySQL", "MongoDB"]}
          />

          <SkillCard
            title="Auth & Security"
            icon="🔐"
            skills={["JWT Auth", "Token Rotation", "Axios Interceptors", "Refresh Tokens"]}
          />

          <SkillCard
            title="Testing"
            icon="🧪"
            skills={[
              "Pytest",
              "Locust (Load Testing)",
            ]}
          />

          <SkillCard
            title="Tools & Deploy"
            icon="🛠️"
            skills={["Git", "GitHub", "Postman", "Docker", "Vercel", "Render"]}
          />

          {/* ===== Additional Expertise (Full Width) ===== */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-3"
          >
            <div
              className="rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                         border border-purple-400/30
                         shadow-[0_0_60px_rgba(168,85,247,0.25)]"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Additional Expertise
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "REST API Design",
                  "Responsive Design",
                  "Load Testing",
                  "System Design",
                  "Component Libraries",
                  "Team Collaboration",
                  "Agile / Scrum",
                  "Problem Solving"
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-sm
                               bg-purple-600/20 text-purple-200
                               border border-purple-400/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ===== Reusable Skill Card ===== */
const SkillCard = ({ title, icon, skills }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="h-full rounded-2xl p-6 bg-purple-500/15 backdrop-blur-xl
                 border border-purple-400/30
                 shadow-[0_0_50px_rgba(168,85,247,0.25)]
                 hover:shadow-[0_0_80px_rgba(168,85,247,0.35)]
                 transition"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-400/30">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-sm
                       bg-purple-700/20 text-purple-200
                       border border-purple-400/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;