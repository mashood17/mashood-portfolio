const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full
                       bg-blue-100 text-blue-700
                       dark:bg-blue-900 dark:text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm font-medium">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Live Demo →
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;