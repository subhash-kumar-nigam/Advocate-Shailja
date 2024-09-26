import React from 'react';
import Head from '../../components/Head';

const Institutions = () => {
  return (
    <div>
      <Head pageheading="Institutions Membership " />
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col'>
            <h1 className="pb-5 text-center mainheading">Integrated Ayush Council Membership for Educational Institutions</h1>
        
            <h2 className="liheading pb-3 administrativesub">For AYUSH Educational Institutions</h2>
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

export default Institutions;
