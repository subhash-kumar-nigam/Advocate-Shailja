import React from 'react';
import Head from '../../components/Head';

const News = () => {
  return (
    <div>
      <Head pageheading="Recent News" />
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col'>
            <h1 className="pb-5 text-center mainheading">Recent News about the Integrated AYUSH Council</h1>

            <div className='news-item py-3'>
              <h2 className="liheading pb-3 administrativesub">MoU Signed Between Ministry of AYUSH and ICMR for Integrative Health Research</h2>
              <p className='ourptext'>
                In September 2023, a landmark Memorandum of Understanding (MoU) was signed between the Ministry of AYUSH and the Indian Council of Medical Research (ICMR) to foster collaboration on integrative health research. This initiative will focus on healthcare areas of national importance and aims to generate evidence using modern scientific methodologies. The MoU also seeks to enhance research capabilities through specialized training for AYUSH researchers, marking a significant step toward evidence-based integrative healthcare.
              </p>
            </div>

            <div className='news-item py-3'>
              <h2 className="liheading pb-3 administrativesub">National AYUSH Mission Receives 50% Budget Increase</h2>
              <p className='ourptext'>
                The Union Budget 2023-24 provided a major boost to the National AYUSH Mission with a 50% increase in its budget allocation. This increase reflects the government’s commitment to integrating AYUSH systems into the national healthcare ecosystem. The additional funding will be directed toward strengthening AYUSH healthcare services, upgrading infrastructure, and supporting ongoing research efforts in traditional medicine.
              </p>
            </div>

            <div className='news-item py-3'>
              <h2 className="liheading pb-3 administrativesub">Three National AYUSH Institutes of Eminence Inaugurated</h2>
              <p className='ourptext'>
                In July 2023, Prime Minister Narendra Modi inaugurated three National AYUSH Institutes of Eminence specializing in Ayurveda, Homoeopathy, and Unani. These institutes are set to become centers of excellence in AYUSH education and research, significantly contributing to the integration of traditional medicine systems into India's mainstream healthcare sector.
              </p>
            </div>

            <div className='news-item py-3'>
              <h2 className="liheading pb-3 administrativesub">First AYUSH Wellness Center Established in Kerala</h2>
              <p className='ourptext'>
                In June 2023, India saw the establishment of its first AYUSH Wellness Center in Kerala. This center offers a variety of AYUSH treatments and therapies, making holistic healthcare more accessible to the public. The government plans to replicate this model and open more AYUSH Wellness Centers across the country in the coming years, further promoting the integration of traditional therapies into modern healthcare systems.
              </p>
            </div>

            <p className='ourptext pt-4'>
              These developments highlight the Indian government's ongoing efforts to promote and integrate AYUSH systems into mainstream healthcare. With initiatives like increased budget allocations, collaborations with research bodies, and the establishment of wellness centers, the future of AYUSH in India looks promising.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
