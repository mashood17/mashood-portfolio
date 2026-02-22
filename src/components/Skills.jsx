const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-purple-500 mt-4 mb-14 rounded-full"></div>

        {/* ===== Main Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Programming Languages */}
          <SkillCard
            title="Programming Languages"
            icon="⌨️"
            skills={["C", "Python"]}
          />

          {/* Frontend */}
          <SkillCard
            title="Frontend Development"
            icon="💻"
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Tailwind CSS",
            ]}
          />

          {/* Backend */}
          <SkillCard
            title="Backend Development"
            icon="🧠"
            skills={[
              "Python",
              "Flask",
              "Node.js",
              "Express.js",
            ]}
          />

          {/* Cloud & DevOps */}
          <SkillCard
            title="Cloud & DevOps"
            icon="☁️"
            skills={[
              "AWS",
              "Microsoft Azure",
              "Git",
              "GitHub",
            ]}
          />

          {/* Databases */}
          <SkillCard
            title="Databases"
            icon="🗄️"
            skills={[
              "MySQL",
              "MongoDB",
              "PostgreSQL",
            ]}
          />

          {/* AI & ML */}
          <SkillCard
            title="Tools & Platforms"
            icon="🛠️"
            skills={[
                "VS Code",
                "Jupyter Notebook",
                "Linux",
                "Postman",
                "MS Excel",
              ]}
          />

          {/* Additional Expertise — full width */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                            border border-purple-400/30
                            shadow-[0_0_60px_rgba(168,85,247,0.25)]">
              <h3 className="text-xl font-semibold text-white mb-6">
                Additional Expertise
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "REST APIs",
                  "API Integration",
                  "Responsive Design",
                  "System Design Basics",
                  "Problem Solving",
                  "Team Collaboration",
                  "Agile / Scrum",
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
          </div>

        </div>
      </div>
    </section>
  );
};

/* ===== Reusable Skill Card ===== */
const SkillCard = ({ title, icon, skills }) => {
  return (
    <div
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
    </div>
  );
};

export default Skills;