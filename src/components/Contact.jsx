import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_m1k2ee6",
      "template_99i5ky5",
     {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
      "QQX0pum_hfiITk3OI"
    ).then(
      () => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2b0f46] to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.25),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
          Let’s Connect
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 mb-6 rounded-full"></div>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          I’m always interested in hearing about new opportunities,
          collaborations, or simply having a conversation about technology
          and innovation.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT: Contact Info */}
          <div
            className="rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                       border border-purple-400/30
                       shadow-[0_0_60px_rgba(168,85,247,0.25)]"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-5 rounded-xl
                              bg-purple-600/20 border border-purple-400/30">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-sm text-purple-300">Email</p>
                  <p className="text-white font-medium">
                    mashoodrenja17@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl
                              bg-purple-600/20 border border-purple-400/30">
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-sm text-purple-300">Phone</p>
                  <p className="text-white font-medium">
                    +91 7349596313
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm text-purple-300 mb-4">
                Connect on social media
              </p>

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
          </div>

          {/* RIGHT: Message Form (NOW WORKING) */}
          <div
            className="rounded-2xl p-8 bg-purple-500/15 backdrop-blur-xl
                       border border-purple-400/30
                       shadow-[0_0_60px_rgba(168,85,247,0.25)]"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={sendEmail}>
              <div>
                <label className="text-sm text-purple-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl
                             bg-purple-600/20 text-white
                             border border-purple-400/30"
                />
              </div>

              <div>
                <label className="text-sm text-purple-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl
                             bg-purple-600/20 text-white
                             border border-purple-400/30"
                />
              </div>

              <div>
                <label className="text-sm text-purple-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl
                             bg-purple-600/20 text-white
                             border border-purple-400/30"
                />
              </div>

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
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-xl
                           bg-gradient-to-r from-purple-600 to-violet-600
                           text-white font-semibold
                           hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;