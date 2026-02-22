const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-500 mt-4 mb-8 rounded-full"></div>

          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a passionate software engineer specializing in full-stack
            development and AI-driven applications. With a strong foundation in
            modern web technologies, I focus on building solutions that create
            real-world impact.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            My journey in software engineering is driven by curiosity and
            continuous learning. I enjoy working in collaborative environments
            where innovation meets practical problem-solving, and I’m always
            eager to take on new challenges.
          </p>

          <p className="text-gray-300 leading-relaxed">
            When I’m not coding, you’ll find me exploring emerging technologies,
            contributing to projects, and continuously improving my skills to
            stay aligned with industry trends.
          </p>
        </div>

       {/* RIGHT: Profile Image Card */}
{/* RIGHT: Profile Image Card */}
<div className="relative flex justify-center">
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

      {/* Image (slightly larger) */}
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
</div>

      </div>
    </section>
  );
};

export default About;