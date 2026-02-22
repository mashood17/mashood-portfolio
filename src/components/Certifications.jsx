import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Certifications
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <CertificationCard
            title="Data Structures using C Programming"
            issuer="Ethnotech Academic Solutions"
            issued=" Jun 2023"
          />

          <CertificationCard
            title="DBMS using SQL"
            issuer="Ethnotech Academic Solutions"
            issued="Aug 2023"
          />

          <CertificationCard
            title="NodeJS"
            issuer="IBM"
            issued="Dec 2024"
          />

          <CertificationCard
            title="Cloud Computing"
            issuer="Certiport"
            issued="May 2025"
          />

          <CertificationCard
            title="Python Essentials"
            issuer="Cisco Networking Academy"
            issued="Sept 2025"
          />

          <CertificationCard
            title="DevOps"
            issuer="IBM"
            issued="Sept 2025"
          />
        </motion.div>
      </div>
    </section>
  );
};

/* ===== Reusable Certification Card ===== */
const CertificationCard = ({ title, issuer, issued }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="relative h-full rounded-2xl p-6
                 bg-purple-500/15 backdrop-blur-xl
                 border border-purple-400/30
                 shadow-[0_0_50px_rgba(168,85,247,0.25)]
                 hover:shadow-[0_0_80px_rgba(168,85,247,0.35)]
                 transition"
    >
      {/* Icon */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-400/30">
          🎓
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-purple-300 font-medium">
            {issuer}
          </p>
          <p className="text-sm text-gray-300 mt-1">
            Issued: {issued}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;