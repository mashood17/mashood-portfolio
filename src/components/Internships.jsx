const Internships = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Internships & Experience
        </h2>
        <div className="w-24 h-1 bg-purple-500 mt-4 mb-14 rounded-full"></div>

        {/* Experience Card */}
        <div
          className="rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                     border border-purple-400/30
                     shadow-[0_0_60px_rgba(168,85,247,0.25)]"
        >
          <ul className="space-y-6 text-gray-300 text-lg">

            <li>
              <span className="text-white font-semibold">
                Python Full Stack Developer – Virtual Internship
              </span>
              <br />
              <span className="text-purple-300">
                EduSkills Academy
              </span>
              <span className="text-gray-400">
                {" "} | Oct – Dec 2024
              </span>
            </li>

            <li>
              <span className="text-white font-semibold">
                Cloud Computing – Virtual Internship
              </span>
              <br />
              <span className="text-purple-300">
                AWS Academy
              </span>
              <span className="text-gray-400">
                {" "} | Jul – Sep 2024
              </span>
            </li>

            <li>
              <span className="text-white font-semibold">
                Cybersecurity – Virtual Internship
              </span>
              <br />
              <span className="text-purple-300">
                Palo Alto Networks
              </span>
              <span className="text-gray-400">
                {" "} | Jan – Mar 2025
              </span>
            </li>
             <li>
              <span className="text-white font-semibold">
                Android App Development using Gen AI
              </span>
              <br />
              <span className="text-purple-300">
                Mind Matrix
              </span>
              <span className="text-gray-400">
                {" "} | Feb 2026-Present
              </span>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default Internships;