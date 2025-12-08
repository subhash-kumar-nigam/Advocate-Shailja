import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* HERO / TITLE */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute left-0 top-0 h-full w-2 bg-[#6366F1]"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mt-10">
            Legal <span className="text-[#6366F1]">Experience</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
            2+ Years of Professional Legal Practice in Various Courts
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 bg-white relative">
        <div className="absolute right-0 top-0 h-full w-1 bg-[#6366F1]"></div>

        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Professional <span className="text-[#6366F1]"> Experience Overview</span>
          </h2>

          <p className="mt-8 text-gray-700 max-w-4xl mx-auto text-center leading-loose border-l-4 border-[#6366F1] pl-6">
            Advocate <span className="font-semibold text-[#6366F1]">Shailja Kushwaha</span> 
            has over <strong>2 years of professional experience</strong> in legal practice,
            actively handling matters related to <strong>Civil, Criminal, and Revenue laws</strong>.
            Her experience includes representation before Civil Court and handling
            diverse legal matters with responsibility and diligence.
          </p>
        </div>
      </section>

     {/* INTERNSHIP / WORK EXPERIENCE */}
<section className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-900 text-center">
      Work <span className="text-[#6366F1]">Experience</span>
    </h2>

    <div className="mt-12 max-w-3xl mx-auto">
      <div className="bg-white border-l-4 border-[#6366F1] p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-900">
          Madhya Pradesh State <span className="text-[#6366F1]">Legal Services</span>  Authority
        </h3>
        <p className="mt-2 text-[#6366F1] font-medium">
          Internship: 03 Dec 2024 - 23 Dec 2024
        </p>
        <p className="mt-2 text-gray-700 text-sm leading-relaxed">
          Hands-on experience in legal services, court procedures, and client interaction.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* EXPERIENCE CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Areas of <span className="text-[#6366F1]">Legal Practice</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              {
                title: "Civil Court Practice",
                years: "2+ Years Experience",
                desc: "Handling civil suits, injunction matters, recovery cases, property disputes and documentation."
              },
              {
                title: "Criminal Law Practice",
                years: "Practical Court Exposure",
                desc: "Experience in bail matters, criminal complaints, police procedures and trial preparation."
              },
              {
                title: "Revenue Court Matters",
                years: "Hands-on Experience",
                desc: "Dealing with revenue cases including land disputes, mutation, demarcation and records."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#6366F1] rounded-2xl p-8 text-center 
                transform hover:-translate-y-4 hover:scale-105 transition duration-500 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-[#6366F1] font-semibold">
                  {item.years}
                </p>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK RESPONSIBILITIES */}
      <section className="py-20 bg-white relative">
        <div className="absolute left-0 top-0 h-full w-1 bg-[#6366F1]"></div>

        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Court Work <span className="text-[#6366F1]">& Responsibilities</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-14">
            {[
              "Drafting legal documents, notices, plaints, written statements and applications",
              "Representation before Civil Court and coordination with senior advocates",
              "Client consultation, legal advice and case strategy planning",
              "Case research, legal compliance and court follow-ups",
            ].map((work, index) => (
              <div
                key={index}
                className="border-l-4 border-[#6366F1] bg-gray-50 p-6 rounded-xl
                transform hover:scale-105 transition duration-300"
              >
                <p className="text-gray-700 leading-relaxed">
                  {work}
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
            Experienced Legal Support You Can Trust
          </h2>

          <p className="mt-4 font-medium text-gray-900">
            Connect for professional and reliable legal assistance.
          </p>

      <Link to="/contact">   <button
            className="mt-8 bg-black text-white px-12 py-4 rounded-xl 
            transform hover:scale-110 hover:bg-gray-900 transition duration-300"
          >
           Contact
          </button></Link> 
        </div>
      </section>

    </div>
  );
};

export default Experience;
