import React from 'react';
import Head from '../../components/Head';

const Individual = () => {
  return (
    <div>
      <Head pageheading="Individual Membership" />
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col'>
            <h1 className="pb-5 text-center mainheading"> Integrated Ayush Council Membership for Individual Practitioners & Educational Institutions</h1>
            <h6 className=' pb-5 '>membership in an Integrated AYUSH Council  offers a range of benefits for all stakeholders within the AYUSH field. By promoting ethical practices, quality standards, professional development, practice support, advocacy, research opportunities and collaboration.</h6>
            
            <h2 className="liheading pb-3 administrativesub">For AYUSH Practitioners</h2>
            <ol className='ourptext pt-2'>
              <li className='py-2'>
                <strong>Enhanced Recognition and Credibility:</strong> Membership in the Integrated AYUSH Council could signify adherence to ethical practices and quality standards, enhancing credibility and public trust.
              </li>
              <li className='py-2'>
                <strong>Networking and Collaboration:</strong> The Council could provide a platform for practitioners across different AYUSH systems to connect, share knowledge, and collaborate on research and development initiatives.
              </li>
              <li className='py-2'>
                <strong>Professional Development Opportunities:</strong> The Council could offer continuing education programs, workshops, and conferences to keep members updated on the latest advancements in their fields.
              </li>
              <li className='py-2'>
                <strong>Practice Support and Resources:</strong> The Council could provide access to resources like legal and business advice, malpractice insurance, and patient referral networks.
              </li>
            </ol>

            <h2 className="liheading administrativesub py-3">For AYUSH Educational Institutions</h2>
            <ol className='ourptext pt-2'>
              <li className='py-2'>
                <strong>Accreditation and Quality Assurance:</strong> The Council could set accreditation standards, ensuring quality education and adherence to ethical guidelines in AYUSH institutions.
              </li>
              <li className='py-2'>
                <strong>Curriculum Development and Research Support:</strong> The Council could guide and support curriculum development and research activities in AYUSH institutions.
              </li>
              <li className='py-2'>
                <strong>Faculty Development and Exchange Programs:</strong> The Council could facilitate faculty development and exchange programs, fostering knowledge sharing and innovation.
              </li>
              <li className='py-2'>
                <strong>Placement Assistance for Graduates:</strong> The Council could establish a platform to connect AYUSH graduates with potential employers and healthcare facilities.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Individual;
