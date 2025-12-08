import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-gray-900 text-white pt-24 pb-16 md:py-24">
        <div className="absolute left-0 top-0 h-full w-[3px] md:w-2 bg-teal-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
            About <span className="text-teal-500">Advocate</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Dedicated Legal Professional in Civil Law Practice
          </p>
        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <section className="py-16 bg-white relative">
        <div className="absolute right-0 top-0 h-full w-[2px] bg-teal-500"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Advocate Shailja Kushwaha
            </h2>

            <p className="mt-1 text-teal-600 font-semibold text-sm sm:text-base">
              LLB, LLM | Civil Court, Vgrh (Katni)
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed border-l-4 border-teal-500 pl-4">
              Advocate Shailja Kushwaha is a qualified legal professional holding
              <strong> LLB </strong>and <strong> LLM </strong>degrees. She actively
              practices at the <strong>Civil Court, Vgrh (Katni)</strong> and provides
              sincere, ethical and result-oriented legal solutions.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Her legal practice is built on integrity, professional responsibility,
              and strong client trust. Every matter is handled with confidentiality
              and a strategic legal approach.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="
              h-72 sm:h-80 w-full max-w-sm
              bg-gray-200
              border-4 border-teal-500
              rounded-2xl
              flex items-center justify-center
              shadow-lg
            ">
              <span className="text-gray-600 font-medium text-sm">
            <img src="/Images/about.png" alt="" />
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= QUALIFICATIONS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Education & <span className="text-teal-500">Qualifications</span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10">
            {[
              {
                title: "Bachelor of Laws (LLB)",
                desc: "Strong legal foundation with focus on civil laws.",
              },
              {
                title: "Master of Laws (LLM)",
                desc: "Advanced understanding of procedural and substantive law.",
              },
              {
                title: "Court Practice",
                desc: "Active civil court practice with hands-on case experience.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-teal-500 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-16 bg-white relative">
        <div className="absolute left-0 top-0 h-full w-[2px] bg-teal-500"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Core <span className="text-teal-500">Legal Values</span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10">
            {[
              "Integrity & Ethics",
              "Client Confidentiality",
              "Result-Oriented Approach",
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 border-l-4 border-teal-500 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {value}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Commitment to professional standards and client trust.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-14 bg-gradient-to-r from-teal-500 to-teal-600 text-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Trusted Legal Representation
          </h2>

          <p className="mt-3 text-sm sm:text-base font-medium">
            Schedule a consultation for professional legal guidance.
          </p>

          <Link to="/contact" className="block sm:inline-block">
            <button className="
              mt-6
              w-full sm:w-auto
              bg-black text-white
              px-10 py-4
              rounded-full
              shadow-lg
              active:scale-95
              md:hover:scale-105
              transition
            ">
              Contact Advocate
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
