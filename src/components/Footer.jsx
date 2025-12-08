import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#6366F1] text-gray-700 border-t border-gray-200 shadow-inner py-16 px-6 md:px-12">

      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#6366F1] rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#6366F1] rounded-full blur-3xl opacity-60 animate-pulse"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* ✅ Advocate Branding */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Advocate{" "}
            <span className="text-[#6366F1]">Shailja Kushwaha</span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#6366F1] to-transparent mx-auto md:mx-0 rounded-full"></div>

          <p className="text-gray-600 text-sm leading-relaxed">
            LLB, LLM • Practicing Advocate at{" "}
            <span className="text-[#6366F1] font-semibold">
              Civil Court, Vgrh (Katni)
            </span>
            .
            Providing professional legal services with integrity,
            confidentiality, and dedication in civil, criminal, and revenue matters.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 relative inline-block after:content-[''] after:block after:w-10 after:h-[3px] after:bg-[#6366F1] after:mt-2 after:rounded-full mx-auto md:mx-0">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-600 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Experience", to: "/experience" },
              { label: "Practice Areas", to: "/skills" },
              { label: "Contact", to: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="hover:text-[#6366F1] transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group"
                >
                  <span className="w-2 h-2 bg-[#6366F1] rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Contact Info (NO FORM) */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 relative inline-block after:content-[''] after:block after:w-10 after:h-[3px] after:bg-[#6366F1] after:mt-2 after:rounded-full mx-auto md:mx-0">
            Contact Information
          </h3>

          <div className="space-y-4 text-sm text-gray-600">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-[#6366F1]" />
              Civil Court Vgrh, Katni (M.P.)
            </p>

            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-[#6366F1]" />
              <a href="tel:+9752630928" className="hover:text-[#6366F1]">
                +91 9752630928
              </a>
            </p>

            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-[#6366F1]" />
              <a
                href="mailto:sshailjakushwaha@gmail.com"
                className="hover:text-[#6366F1]"
              >
               sshailjakushwaha@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div className="relative z-10 mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-800 font-semibold">
            Advocate Shailja Kushwaha
          </span>
          . All rights reserved.
        </p>

        
      </div>
    </footer>
  );
}
