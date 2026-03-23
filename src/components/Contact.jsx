import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

const RATE_LIMIT_SECONDS = 60; // spam protection

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: "success" | "error", message }
  const lastSentRef = useRef(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSentRef.current < RATE_LIMIT_SECONDS * 1000) {
      setToast({
        type: "error",
        message: "Please wait a moment before sending another message.",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_m1k2ee6",
        "template_99i5ky5",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "QQX0pum_hfiITk3OI"
      )
      .then(() => {
        lastSentRef.current = Date.now();
        setFormData({ name: "", email: "", subject: "", message: "" });
        setToast({
          type: "success",
          message: "Message sent successfully!",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setToast({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center"
        >
          Let’s Connect
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-1 bg-purple-500 mx-auto mt-4 mb-6 rounded-full"
        />

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          I’m always interested in hearing about new opportunities,
          collaborations, or simply having a conversation about technology
          and innovation.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                       border border-purple-400/30
                       shadow-[0_0_60px_rgba(168,85,247,0.25)]"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <a
                href="mailto:mashoodrenja17@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl
                           bg-purple-600/20 border border-purple-400/30
                           hover:bg-purple-600/30 transition"
              >
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-sm text-purple-300">Email</p>
                  <p className="text-white font-medium">
                    mashoodrenja17@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+917349596313"
                className="flex items-center gap-4 p-5 rounded-xl
                           bg-purple-600/20 border border-purple-400/30
                           hover:bg-purple-600/30 transition"
              >
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-sm text-purple-300">Phone</p>
                  <p className="text-white font-medium">
                    +91 7349596313
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/mahammad-mashood"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 px-5 py-3 rounded-xl
               bg-purple-600/20 text-white
               border border-purple-400/30
               hover:bg-purple-600/30 transition"
  >
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 20.452h3.564V9H3.555v11.452z"/>
    </svg>
    LinkedIn
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/mashood17"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 px-5 py-3 rounded-xl
               bg-purple-600/20 text-white
               border border-purple-400/30
               hover:bg-purple-600/30 transition"
  >
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.02c-3.338.726-4.033-1.416-4.033-1.416-.547-1.387-1.335-1.756-1.335-1.756-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.762-1.605-2.665-.305-5.467-1.335-5.467-5.932 0-1.31.47-2.38 1.237-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0 1 12 5.8c1.02.005 2.047.138 3.005.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.22.694.825.576C20.565 21.8 24 17.3 24 12c0-6.63-5.373-12-12-12z"/>
    </svg>
    GitHub
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/917349596313"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 px-5 py-3 rounded-xl
               bg-purple-600/20 text-white
               border border-purple-400/30
               hover:bg-purple-600/30 transition"
  >
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.02 0C5.38 0 .02 5.36.02 12c0 2.12.56 4.18 1.62 6L0 24l6.18-1.6A11.94 11.94 0 0 0 12.02 24c6.64 0 12-5.36 12-12 0-3.2-1.25-6.22-3.5-8.52zM12.02 22c-1.82 0-3.6-.48-5.17-1.38l-.37-.22-3.67.95.98-3.57-.24-.37A9.93 9.93 0 0 1 2.02 12c0-5.5 4.5-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22.02 12c0 5.5-4.5 10-10 10zm5.54-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.5.7.3 1.25.48 1.67.62.7.22 1.34.2 1.85.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
    </svg>
    WhatsApp
  </a>

</div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                       border border-purple-400/30
                       shadow-[0_0_60px_rgba(168,85,247,0.25)]"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={sendEmail}>
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label className="text-sm text-purple-300 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 px-4 py-3 rounded-xl
                               bg-purple-600/20 text-white
                               border border-purple-400/30"
                  />
                </div>
              ))}

              <div>
                <label className="text-sm text-purple-300">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl
                             bg-purple-600/20 text-white
                             border border-purple-400/30"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full mt-4 py-3 rounded-xl
                            bg-gradient-to-r from-purple-600 to-violet-600
                            text-white font-semibold
                            flex items-center justify-center gap-3
                            transition
                            ${
                              loading
                                ? "opacity-70 cursor-not-allowed"
                                : "hover:opacity-90"
                            }`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2
                       bg-purple-500/20 backdrop-blur-xl
                       border border-purple-400/30
                       px-6 py-4 rounded-xl
                       text-white flex items-center gap-3
                       shadow-lg z-50"
          >
            {toast.type === "success" ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-green-400 text-xl"
              >
                ✔
              </motion.span>
            ) : (
              <span className="text-red-400 text-xl">✖</span>
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;