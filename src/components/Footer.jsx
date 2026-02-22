const Footer = () => {
  return (
    <footer className="relative py-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#2b0f46] to-black"></div>

      <div className="relative z-10 text-center">
        <p className="text-sm text-gray-400">
          © 2026 Mahammad Mashood. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;