import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-16 md:py-24">
        {/* Side Border */}
        <div className="absolute left-0 top-0 h-full w-[3px] md:w-2 bg-teal-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div className="text-center md:text-left space-y-3">
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-snug">
              Advocate <span className="text-teal-500">Shailja Kushwaha</span>
            </h1>

            <p className="text-lg text-gray-300">LLB, LLM</p>

            <p className="text-sm text-gray-400">Civil Court, Vgrh (Katni)</p>

            <Link
              to="/contact"
              className="block w-full sm:inline-block sm:w-auto"
            >
              <button
                className="
                mt-6
                w-full sm:w-auto
                bg-gradient-to-r from-teal-400 to-teal-600
                text-black font-semibold
                px-10 py-4
                rounded-full
                shadow-lg
                active:scale-95
                md:hover:scale-105
                transition
              "
              >
                Contact
              </button>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/Images/pic.jpg"
                alt="Advocate Shailja Kushwaha"
                className="
    w-full
    max-w-sm md:max-w-md
    max-h-80 md:max-h-96
    object-cover
    rounded-2xl
    border-4 border-teal-500
    shadow-2xl
  "
              />

              <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full border-2 border-teal-400 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-16 bg-white relative">
        <div className="absolute right-0 top-0 h-full w-[2px] bg-teal-500"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/Images/home.png"
              alt="Advocate at Court"
              className="w-64 sm:w-72 rounded-xl border-l-8 border-teal-500 shadow-xl"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              About <span className="text-teal-500">Advocate</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed border-l-2 sml:border-l-4 border-teal-500 pl-4">
              Advocate{" "}
              <span className="font-semibold text-teal-600">
                Shailja Kushwaha
              </span>{" "}
              holds <strong>LLB</strong> and <strong>LLM</strong> degrees and
              practices at the <strong>Civil Court, Vgrh (Katni)</strong>. She
              provides reliable legal representation in civil, criminal and
              revenue matters with ethical advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Legal <span className="text-teal-500">Experience</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3 mt-10">
            {[
              "2+ Years Civil Court Experience",
              "Criminal, Revenue & Civil Matters",
              "Strong Drafting & Case Handling",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-teal-500 rounded-xl p-6 text-center shadow-md"
              >
                <h3 className="text-base sm:text-lg font-semibold">{item}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Professional court-oriented legal practice.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRACTICE AREAS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Practice <span className="text-teal-500">Areas</span>
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 mt-10">
            {[
              "Civil Litigation",
              "Criminal Matters",
              "Revenue Cases",
              "Property Disputes",
              "Injunction & Recovery",
              "Legal Drafting & Agreements",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-teal-500 rounded-xl p-5 shadow-sm"
              >
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm mt-2 text-gray-600">
                  Court-tested legal solutions.
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
            Need Legal Assistance?
          </h2>

          <p className="mt-3 text-sm sm:text-base">
            Call or visit for professional legal consultation.
          </p>

          <Link to="/contact" className="block sm:inline-block sm:w-auto">
            <button
              className="
              mt-6
              w-full sm:w-auto
              bg-black text-white
              px-10 py-4
              rounded-full
              shadow-lg
              active:scale-95
              md:hover:scale-105
              transition
            "
            >
              Contact Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
