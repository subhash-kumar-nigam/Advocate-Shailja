import React from 'react';
import { FaHeartbeat, FaChild, FaLeaf, FaCapsules, FaHandHoldingMedical, FaHome, FaChalkboardTeacher, FaSearch, FaBook, FaUserMd, FaAppleAlt, FaHandsHelping, FaClinicMedical, FaYinYang, FaSpa } from 'react-icons/fa';
import CenterHeading from '../../components/CenterHeading'
import Head from '../../components/Head'

const Carrer = () => {
  return (
    <>
      <Head pageheading="Career" />
      <div className="container my-lg-5">
        <CenterHeading centerheading="Career of Integrated Ayush Council" />
        <h2 className="liheading pb-3 administrativesub">A Gateway to Diverse Career Paths in Holistic Healthcare</h2>
        <p className='pb-5'>
          The Integrated Ayush Council (IAC) has opened up a plethora of exciting career opportunities for individuals interested in the traditional and holistic healthcare systems of Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy (AYUSH). With the increasing focus on preventive and integrative healthcare, AYUSH practices are gaining significant recognition and demand, making it a promising field for passionate individuals.
        </p>    
        <div className='row pb-5'>
        <div className='col-7'>    
        <h2 className="liheading pb-3 administrativesub">Here’s a breakdown of the diverse career paths you can explore through the IAC:</h2>
        </div> 
        <div className="col-5 text-right">
          <button className="carouselbtn mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
            <i className="fa fa-arrow-left"></i>
          </button>
          <button className="carouselbtn mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
        </div> 
        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            
            {/* First Carousel Item */}
            <div className="carousel-item active">
              <div className="row text-center">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaHeartbeat className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Ayurvedic Physician</h4>
                      <p className='text-center'>Diagnose and treat ailments using Ayurvedic principles and herbs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaChild className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Yoga Therapist</h4>
                      <p className='text-center'>Guide individuals in yoga postures for physical and mental well-being.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaLeaf className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Naturopathic Physician</h4>
                      <p className='text-center'>Use natural therapies like hydrotherapy and diet to promote health.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaCapsules className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Unani Practitioner</h4>
                      <p className='text-center'>Utilize Unani medicines and formulations for treatment.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaHandHoldingMedical className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Siddha Doctor</h4>
                      <p className='text-center'>Treat diseases based on Siddha medicine principles.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaHome className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Homeopathic Doctor</h4>
                      <p className='text-center'>Prescribe individualized homeopathic remedies for healing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Carousel Item */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaChalkboardTeacher className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Professor/Lecturer</h4>
                      <p className='text-center'>Teach AYUSH subjects at universities and colleges.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaSearch className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Researcher</h4>
                      <p className='text-center'>Conduct research in AYUSH fields for scientific development.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaBook className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Content Developer</h4>
                      <p className='text-center'>Create educational materials on AYUSH practices.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaUserMd className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Ayurvedic Consultant</h4>
                      <p className='text-center'>Provide Ayurvedic advice for preventive healthcare.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaAppleAlt className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Naturopathic Consultant</h4>
                      <p className='text-center'>Offer dietary and lifestyle guidance for health.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaHandsHelping className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Siddha Consultant</h4>
                      <p className='text-center'>Offer Siddha-based health and wellness solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Carousel Item */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaClinicMedical className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Health Clinic Owner</h4>
                      <p className='text-center'>Run your own AYUSH-based healthcare clinic.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaYinYang className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Holistic Health Counselor</h4>
                      <p className='text-center'>Provide counseling for mind-body-soul wellness.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaSpa className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>Spa Owner</h4>
                      <p className='text-center'>Offer AYUSH-based therapies in a wellness spa setting.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 mb-4 col-md-6">
                  <div className='servicecarbg p-4'>
                    <div className='text-center'>
                      <FaHeartbeat className='vicons' />
                    </div>
                    <div className='pt-3'>
                      <h4 className='text-center'>AYUSH Wellness Coach</h4>
                      <p className='text-center'>Guide clients in adopting AYUSH principles for a healthy lifestyle.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className='col py-5'>
  <h2 className="liheading  administrativesub pb-4" >To Pursue a Career through the IAC</h2>
  <ol className='ourptext pb-5'>
    <li className='py-2'>
      <strong>Complete a recognized Bachelor’s degree:</strong> Earn a Bachelor’s degree in your chosen AYUSH system to start your career.
    </li>
    <li className='py-2'>
      <strong>Register with the IAC:</strong> Obtain a license to practice by registering with the Integrated Ayush Council.
    </li>
    <li className='py-2'>
      <strong>Continuously update your knowledge:</strong> Stay up-to-date with professional development programs and advancements in the field.
    </li>
  </ol>

  <h2 className="liheading pb-3 administrativesub">Benefits of a Career in Integrated Ayush Council</h2>
  <ol className='ourptext pt-2'>
    <li className='py-2'>
      <strong>High Demand:</strong> Growing awareness of AYUSH benefits is leading to an increased demand for practitioners.
    </li>
    <li className='py-2'>
      <strong>Job Satisfaction:</strong> Contribute positively to people’s well-being and make a lasting impact.
    </li>
    <li className='py-2'>
      <strong>Entrepreneurial Opportunities:</strong> Open your own practice or start a related business in the AYUSH field.
    </li>
    <li className='py-2'>
      <strong>Work-Life Balance:</strong> Enjoy flexible work options compared to conventional medical practices.
    </li>
    <li className='py-2'>
      <strong>Continuous Learning:</strong> Engage in continuous learning and development in a dynamic, growing field.
    </li>
  </ol>
</div>
<p className='pb-5'>
Remember, a successful career in AYUSH requires dedication, passion, and a commitment to lifelong learning. If you are interested in holistic healthcare and traditional healing practices, the Integrated Ayush Council offers a rewarding and fulfilling path to explore.
        </p>    

      </div>
    </>
  );
};

export default Carrer;
