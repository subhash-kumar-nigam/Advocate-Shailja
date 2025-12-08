import React from "react";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute left-0 top-0 h-full w-2 bg-teal-500"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Contact <span className="text-teal-500">Advocate</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Professional Legal Consultation & Court Assistance
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="py-20 bg-white relative">
        <div className="absolute right-0 top-0 h-full w-1 bg-teal-500"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT DETAILS */}
          <div className="space-y-8 transform hover:scale-105 transition duration-500">
            <h2 className="text-3xl font-bold text-gray-900">
              Advocate Shailja Kushwaha
            </h2>

            <p className="text-teal-600 font-semibold">
              LLB, LLM | Civil Court, Katni
            </p>

            <div className="border-l-4 border-teal-500 pl-5 space-y-4">
              <p className="text-gray-700 text-lg">
                📍 <strong>Office Address:</strong><br />
                Near Civil Court, Katni, Madhya Pradesh
              </p>

              <p className="text-gray-700 text-lg">
                📞 <strong>Phone:</strong><br />
                +91 XXXXX XXXXX
              </p>

              <p className="text-gray-700 text-lg">
                ✉️ <strong>Email:</strong><br />
                advocate@email.com
              </p>

              <p className="text-gray-700 text-lg">
                🏛️ <strong>Court Practice:</strong><br />
                Civil Court, Katni
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              For any legal assistance related to civil, criminal, or revenue matters,
              feel free to contact directly during court working hours.
              Confidentiality and professional ethics are strictly followed.
            </p>
          </div>

          {/* RIGHT BOX */}
          <div className="bg-gray-50 border-2 border-teal-500 rounded-2xl p-10 shadow-xl
            transform hover:-translate-y-3 hover:scale-105 transition duration-500">

            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Quick Contact Options
            </h3>

            <div className="space-y-6 text-center">
              <a
                href="tel:+91XXXXXXXXXX"
                className="block bg-teal-500 text-black px-8 py-4 rounded-xl 
                font-semibold hover:scale-110 transform transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="block bg-green-500 text-black px-8 py-4 rounded-xl 
                font-semibold hover:scale-110 transform transition"
              >
                💬 WhatsApp Chat
              </a>

              <a
                href="mailto:advocate@email.com"
                className="block bg-gray-900 text-white px-8 py-4 rounded-xl 
                font-semibold hover:scale-110 transform transition"
              >
                ✉️ Send Email
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Office Location
          </h2>

          <div className="w-full h-80 border-4 border-teal-500 rounded-xl 
            flex items-center justify-center text-gray-600 bg-white">
            Google Map – Civil Court, Katni
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600 text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold">
            Trusted Legal Guidance
          </h2>

          <p className="mt-4 font-medium">
            Reliable & professional legal support in Katni.
          </p>

          <button
            className="mt-8 bg-black text-white px-12 py-4 rounded-xl 
            transform hover:scale-110 transition duration-300"
          >
            Call for Consultation
          </button>
        </div>
      </section>

    </div>
  );
};

export default Contact;
