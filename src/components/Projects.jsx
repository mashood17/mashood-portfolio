const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-purple-500 mt-4 mb-14 rounded-full"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ===== Project 1 ===== */}
          <ProjectCard
            featured
            title="Student AI Hub – AI Productivity Platform"
            description="Built an AI-powered academic productivity platform with multiple tools including code generation, debugging, summarization, chatbot, resume analysis, roadmap generation, and task management. Designed responsive UI and integrated backend APIs for smooth workflows."
            tech={[
              "React",
              "Node.js",
              "Express",
              "PostgreSQL",
              "LLMs",
            ]}
            code="https://github.com/karthikajay04/Student-AI-Hub"
            live="https://frontend-k5qm.onrender.com/"
          />

          {/* ===== Project 2 ===== */}
          <ProjectCard
            featured
            title="Online Job Portal – Web Application"
            description="Developed a responsive job portal featuring secure authentication, role-based dashboards, job posting, applications, and profile management. Focused on frontend architecture with contributions to backend workflows."
            tech={[
              "PHP",
              "MySQL",
              "JavaScript",
              "Bootstrap",
            ]}
            
            code="https://github.com/mashood17/OnlineJobPortal.git"
          />

          

        </div>
      </div>
    </section>
  );
};

/* ===== Reusable Project Card ===== */
const ProjectCard = ({ title, description, tech, code, live, featured }) => {
  return (
    <div
      className={`relative h-full rounded-2xl p-8
                  bg-purple-500/15 backdrop-blur-xl
                  border border-purple-400/30
                  shadow-[0_0_60px_rgba(168,85,247,0.25)]
                  hover:shadow-[0_0_90px_rgba(168,85,247,0.4)]
                  transition`}
    >
      {/* Featured badge */}
      {featured && (
        <span className="absolute top-5 left-5 px-3 py-1 text-xs font-medium
                         rounded-full bg-purple-600/30 text-purple-200
                         border border-purple-400/40">
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
            className="text-purple-300 hover:text-purple-100 transition"
          >
            ⌘ Code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            className="text-purple-300 hover:text-purple-100 transition"
          >
            ↗ Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;