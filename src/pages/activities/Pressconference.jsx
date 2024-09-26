import React from 'react';
import Head from '../../components/Head';

const PressConference = () => {
  return (
    <div>
      <Head pageheading="Press Conference" />
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col'>
            <h1 className="pb-5 text-center mainheading">Integrated Ayush Council Holds Press Conference: Unveiling a New Era of Holistic Healthcare</h1>

            <p className='ourptext'>
              <strong>New Delhi, India – [Date]</strong> – The Integrated Ayush Council (IAC), a pioneering body established to promote the integration of traditional Indian medicine (Ayush) with modern healthcare, hosted a press conference today to unveil its vision and announce key initiatives.
            </p>

            <h2 className="liheading pt-5 pb-3 administrativesub">Key Announcements</h2>
            <ol className='ourptext pt-2'>
              <li className='py-2'>
                <strong>Roadmap for Integrative Ayush Practice:</strong> The IAC presented a comprehensive roadmap outlining the framework for integrating Ayush practices into mainstream healthcare delivery. This includes collaborations with medical institutions, development of clinical practice guidelines, and training programs for healthcare professionals.
              </li>
              <li className='py-2'>
                <strong>Launch of Research Grants:</strong> The Council announced a dedicated research grant program aimed at stimulating evidence-based research on the combined efficacy of Ayush therapies and conventional medicine in managing various health conditions.
              </li>
              <li className='py-2'>
                <strong>Establishment of Ayush Integration Centers:</strong> Plans were revealed for the development of a network of Ayush Integration Centers across the country, serving as hubs for clinical practice, research, and education.
              </li>
              <li className='py-2'>
                <strong>Strengthening Public Awareness:</strong> The IAC emphasized its commitment to raising public awareness about the benefits of integrative Ayush care through information campaigns, educational materials, and facilitating patient access to qualified Ayush practitioners.
              </li>
            </ol>

            <h2 className="liheading pt-5 pb-3 administrativesub">Quotes from Press Conference</h2>
            <div className='ourptext'>
              <p className='py-2'>
                <strong>Dr. [Name], Chairperson, IAC:</strong> “The establishment of the IAC marks a significant milestone in the evolution of healthcare in India. By harnessing the strengths of both Ayush and modern medicine, we can offer a more holistic and personalized approach to health and well-being.”
              </p>
              <p className='py-2'>
                <strong>Shri [Name], Minister of Ayush:</strong> “The government has committed to supporting the growth and integration of Ayush practices. The IAC plays a crucial role in bridging the gap between traditional and modern healthcare systems, ultimately benefiting millions of people.”
              </p>
              <p className='py-2'>
                <strong>Dr. [Name], Renowned Medical Practitioner:</strong> “The integration of Ayush offers immense potential for managing chronic diseases, promoting mental health, and enhancing overall quality of life. I am excited to see the IAC leading this transformative movement.”
              </p>
            </div>

            <h2 className="liheading pt-5 pb-3 administrativesub">Press Q&A</h2>
            <p className='ourptext'>
              The conference concluded with a lively Q&A session where reporters had the opportunity to seek clarification on specific initiatives and express their queries about the IAC’s vision for the future of integrative healthcare.
            </p>

            <p className='ourptext pt-4'>
              Overall, the press conference generated significant media interest and highlighted the increasing momentum behind the movement towards integrative Ayush care in India. The IAC’s ambitious plans and collaborative approach hold promise for a future where both traditional wisdom and modern science work hand in hand to empower individuals to achieve optimal health and well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressConference;
