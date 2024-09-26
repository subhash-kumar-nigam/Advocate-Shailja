import React from 'react';
import Head from '../../components/Head';

const Events = () => {
  return (
    <div>
      <Head pageheading="Events" />
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col'>
            <h1 className="pb-5 text-center mainheading">Integrated Ayush Council Events</h1>
            <p className='text-justify pb-5'>Integrated Aayush Council has been organizing events related to Ayurveda, Yoga & Naturopathy, Unani, Siddha and Homeopathy (AYUSH) systems of medicine. These events cover a wide range of topics, such as promoting research and development in AYUSH to raise awareness about the benefits of these traditional medical systems.</p>

            <h2 className="liheading pb-3 administrativesub">Recent AYUSH Events</h2>
            <ol className='ourptext pt-2'>
              <li className='py-2'>
                <strong>National Ayurveda Day:</strong> Celebrated annually on November 10th, this event raises awareness about Ayurveda, one of the world’s oldest medical systems.
              </li>
              <li className='py-2'>
                <strong>International Yoga Day:</strong> Held every year on June 21st, this event promotes the practice of yoga for improving both physical and mental health.
              </li>
            </ol>

            <p className='ourptext pt-4'>
              These events are part of the Integrated AYUSH Council's ongoing efforts to promote AYUSH therapies across India and globally. They play a crucial role in spreading awareness of the benefits of these traditional medical systems.
            </p>

            <h2 className="liheading pt-5 pb-3 administrativesub">Research Initiatives</h2>
            <p className='ourptext pt-2'>
              The Integrated Ayush Council also supports numerous research initiatives aimed at developing new, evidence-based AYUSH therapies. These efforts ensure the safety and effectiveness of AYUSH practices within modern healthcare.
            </p>
            <p className='ourptext pt-2'>
              Overall, the Ayush Council of India is vital in integrating AYUSH therapies into mainstream healthcare. Through its events and research, the Council continues to highlight the benefits of these ancient medical systems, ensuring they are accessible and beneficial to all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
