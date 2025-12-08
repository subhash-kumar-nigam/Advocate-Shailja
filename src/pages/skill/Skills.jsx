import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* HERO */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute left-0 top-0 h-full w-2 bg-[#6366F1]"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mt-10">
            Professional <span className="text-[#6366F1]">Skills</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Legal Skills & Courtroom Expertise
          </p>
        </div>
      </section>

      {/* PROFILE + IMAGE */}
      <section className="py-20 bg-white relative">
        <div className="absolute right-0 top-0 h-full w-1 bg-[#6366F1]"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
         <div className="relative group">
  <div className="absolute inset-0 border-4 border-[#6366F1] rounded-2xl translate-x-4 translate-y-4"></div>

  <img
    src="/Images/skill1.png"
    alt="Advocate Shailja Kushwaha"
    className="relative z-10 rounded-2xl shadow-xl 
               transform group-hover:scale-105 transition duration-500
               max-h-96 w-full object-cover"
  />
</div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Advocate <span className="text-[#6366F1]"> Shailja Kushwaha</span>
            </h2>

            <p className="mt-2 text-[#6366F1] font-semibold">
              LLB, LLM | Civil, Criminal & Revenue Law
            </p>

            <p className="mt-6 text-gray-700 leading-loose border-l-4 border-[#6366F1] pl-5">
              Skilled legal practitioner with strong courtroom presence,
              legal drafting expertise, and comprehensive knowledge of
              civil, criminal, and revenue matters.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Core <span className="text-[#6366F1]">Legal Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              "Legal Drafting & Documentation",
              "Court Representation",
              "Civil Litigation Handling",
              "Criminal Case Analysis",
              "Revenue Court Procedures",
              "Client Consultation & Strategy",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#6366F1] rounded-xl p-6 text-center 
                transform hover:-translate-y-4 hover:scale-105 transition duration-500 shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {skill}
                </h3>

                <p className="mt-3 text-gray-600 text-sm">
                  Professional execution with ethical legal standards and accuracy.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="py-20 bg-white relative">
        <div className="absolute left-0 top-0 h-full w-1 bg-[#6366F1]"></div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Professional <span className="text-[#6366F1]">Strengths</span> 
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Strong Communication",
              "Ethical Practice",
              "Confidential Case Handling",
            ].map((strength, index) => (
              <div
                key={index}
                className="border-l-4 border-[#6366F1] bg-gray-50 p-6 rounded-xl 
                hover:bg-[#6366F1] transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {strength}
                </h3>

                <p className="mt-3 text-gray-600 text-sm">
                  Focused on professionalism, trust, and legal responsibility.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#6366F1] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold">
            Skilled Legal Representation
          </h2>

          <p className="mt-4 font-medium text-black">
            Professional legal skills backed by courtroom experience.
          </p>

         <Link to={"/contact"}> <button
            className="mt-8 bg-black text-white px-12 py-4 rounded-xl 
            transform hover:scale-110 transition duration-300"
          >
            Contact Advocate
          </button></Link>
        </div>
      </section>

    </div>
  );
};

export default Skills;
