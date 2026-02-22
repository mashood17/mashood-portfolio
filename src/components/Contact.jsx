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

            <div className="mt-10">
              <a
                href="http://linkedin.com/in/mahammad-mashood"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl
                           bg-purple-600/20 text-white
                           border border-purple-400/30
                           hover:bg-purple-600/30 transition"
              >
                💼 LinkedIn
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