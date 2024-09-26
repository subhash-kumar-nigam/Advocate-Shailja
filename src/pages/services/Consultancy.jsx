import React from 'react'
import CenterHeading from '../../components/CenterHeading'
import Head from '../../components/Head'
import { FaBalanceScale, FaBook, FaChartLine, FaCheckCircle, FaFlask , FaHeartbeat, FaUsers} from 'react-icons/fa';

const Consultancy = () => {
  return (
    <div>
       <Head pageheading="Consultancy" />
      <div className="container my-lg-5">
        <CenterHeading centerheading="Consultancy of Integrated Ayush Council" />
        <p className='pb-3 text-justify'>
        As of my last knowledge update in January 2022, there wasn’t a specific entity known as the “Integrated Ayush Council Consultancy.” However, I can provide you with a general concept of what an integrated Ayush (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy) council consultancy might involve.        </p>    
        <p className='pb-5'>
        An integrated Ayush council consultancy could be an organization or consultancy service that specializes in providing guidance, advice, and support in the field of traditional Indian medicine systems, collectively known as Ayush. This may include Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homoeopathy.        </p>    
        <h2 className="liheading pb-3 administrativesub">Services offered by such a Consultancy might Include:</h2>
        <div className="row text-center pt-5">
  {/* First Row */}
  <div className="col-lg-4 mb-4 col-md-6">
    <div className='servicecarbg p-4'>
      <div className='text-center'>
        <FaBalanceScale className='vicons' /> {/* Regulatory Icon */}
      </div>
      <div className='pt-3'>
        <h4 className='text-center'>Regulatory Compliance</h4>
        <p className='text-center'>Assisting individuals or organizations in navigating the regulatory landscape related to Ayush practices, ensuring compliance with government regulations.</p>
      </div>
    </div>
  </div>
  
  <div className="col-lg-4 mb-4 col-md-6">
    <div className='servicecarbg p-4'>
      <div className='text-center'>
        <FaBook className='vicons' /> {/* Education Icon */}
      </div>
      <div className='pt-3'>
        <h4 className='text-center'>Training and Education</h4>
        <p className='text-center'>Providing training programs and resources for Ayush practices, including courses for practitioners and workshops for businesses.</p>
      </div>
    </div>
  </div>

  <div className="col-lg-4 mb-4 col-md-6">
    <div className='servicecarbg p-4'>
      <div className='text-center'>
        <FaChartLine className='vicons' /> {/* Business Development Icon */}
      </div>
      <div className='pt-3'>
        <h4 className='text-center'>Business Development</h4>
        <p className='text-center'>Helping Ayush practitioners or entrepreneurs expand their businesses through market research, business planning, and strategic guidance.</p>
      </div>
    </div>
  </div>
</div>

<div className="row text-center">
  {/* Second Row */}
  <div className="col-lg-4 mb-4 col-md-6">
    <div className='servicecarbg p-4'>
      <div className='text-center'>
        <FaCheckCircle className='vicons' /> {/* Quality Assurance Icon */}
      </div>
      <div className='pt-3'>
        <h4 className='text-center'>Quality Assurance</h4>
        <p className='text-center'>Ensuring quality control in Ayush products and services through certification processes and adherence to standardized practices.</p>
      </div>
    </div>
  </div>

  <div className="col-lg-4 mb-4 col-md-6">
    <div className='servicecarbg p-4'>
      <div className='text-center'>
        <FaFlask className='vicons' /> {/* Research Icon */}
      </div>
      <div className='pt-3'>
        <h4 className='text-center'>Research and Development</h4>
        <p className='text-center'>Supporting research initiatives in Ayush, collaborating with institutions, and promoting evidence-based practices.</p>
      </div>
    </div>
  </div>

  <div className="col-lg-4 mb-4 col-md-6">
    <div className='servicecarbg p-4'>
      <div className='text-center'>
        <FaUsers className='vicons' /> {/* Networking Icon */}
      </div>
      <div className='pt-3'>
        <h4 className='text-center'>Networking and Collaboration</h4>
        <p className='text-center'>Facilitating connections within the Ayush community through conferences, seminars, and events that foster collaboration and knowledge exchange.</p>
      </div>
    </div>
  </div>
</div>

<div className="row text-center">
  {/* Third Row */}
  <div className="col-lg-4 mb-4 col-md-6">
    <div className='servicecarbg p-4'>
      <div className='text-center'>
        <FaHeartbeat className='vicons' /> {/* Health and Wellness Icon */}
      </div>
      <div className='pt-3'>
        <h4 className='text-center'>Health and Wellness Programs</h4>
        <p className='text-center'>Developing and promoting health and wellness programs based on Ayush principles for individuals and corporate wellness initiatives.</p>
      </div>
    </div>
  </div>
</div>
<p className='py-5'>
An integrated Ayush council consultancy could be an organization or consultancy service that specializes in providing guidance, advice, and support in the field of traditional Indian medicine systems, collectively known as Ayush. This may include Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homoeopathy.        </p>    
        </div>
    </div>
  )
}

export default Consultancy
