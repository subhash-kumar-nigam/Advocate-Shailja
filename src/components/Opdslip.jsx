import React from 'react'
import opdlogo from '../Assets/images/opdlogo.png'
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Opdslip = () => {
  return (
    <div>
      <div className='container my-5 p-lg-5 p-4'>
         <div className='row py-lg-5 justify-content-space-between'>
           <div className='col-lg-6 col-md-6 col-12 order-lg-1 order-2'  >
            <h5 className='opdmainh'>Appointment ID : <span className='opdspan'>101001</span></h5>
            <h5 className='opdmainh'>Appointment Date & Time : <span className='opdspan'>25/09/2024</span> <span className='opdspan'> 4:00 PM - 4:15 PM</span></h5>
           </div>
           <div className='col-lg-6 col-md-6 col-12 order-lg-2 order-1 text-lg-right'>
           <h5 className='opdmainh' id='datelopd'>Date :</h5>
           <p id='datelopd'>22/09/2024</p>
           <h5 className='opdmainh' id='datesopd'>Date : <span className='opdspan'>22/09/2024</span></h5>
           </div>
         </div>
         <div className='row py-5'>
            <div className='col-lg-4 col-md-4 col-4 text-left'>
              <img src={opdlogo} alt='logo' className='img-fluid opdlogo' width={180}  />
            </div>
            <div className='col-lg-4 col-md-6 col-8  pt-3 text-lg-center'>
                <h5 className='pb-lg-1 opdmainh'>Dr Pathaks Holistic Cure</h5>
                <h6 className='opdsubh'>Out Patient Department</h6>
                <p className='eopd'>e-OPD Card</p>
            </div>
            <div className='col-lg-4 col-12  pt-3 text-lg-right'>
            <h5 className='opdmainh' id='apt' >Appointment Type :</h5>
            <p  id='apt'>Online</p>       
            </div>
         </div>
         <div className='row py-lg-5 justify-content-space-between'>
           <div className='col-lg-6'>
           <h5 className='opdmainh' id='datesopd'>Appointment Type : <span className='opdspan'>Online</span></h5>
            <h5 className='opdmainh'>Nearest District or City: <span className='opdspan'>Jabalpur</span></h5>
            <h5 className='opdmainh'>Details of Illness/Condition : <span className='opdspan'>Fever</span></h5>
           </div>
           <div className='col-lg-6 col-12  text-lg-right'>
           <h5 className='opdmainh' id='datelopd'>Reporting Time :</h5>
           <p id='datelopd'>10 minutes Before</p>
           <h5 className='opdmainh' id='datesopd'>Reporting Time : <span className='opdspan'>10 minutes Before</span></h5>
           </div>
         </div>
         <div className="row py-5 p-2 ">
          <div className='table-responsive'>
     <table className="table table-bordered  ">
     <tbody>
      <tr>
        <td><strong>Name of Patient : </strong></td>
        <td>shyam sharma</td>
        <td><strong>Age :</strong></td>
        <td>30</td>
      </tr>
      <tr>
        <td><strong>Contact Detail : </strong></td>
        <td><strong>Phone : </strong><span> 9090909091</span></td>
        <td><strong>Address:</strong></td>
        <td>1234 Garha, Jabalpur Madhya Pradesh</td>
      </tr>
      <tr>
        <td><strong>Doctor Name:</strong></td>
        <td>Dr. Smith</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
   <div className='row py-5 my-5 text-center'>
    <h6 className='aptp'>We look forward to providing you with the best care.
</h6>
<h6 className='aptp'>For any queries, please feel free to contact us at.</h6>
<p className="py-3 aptpcontact ">
      <span className="mr-4 ">
        <FaPhoneAlt className="mr-lg-2" /> 8516064764, 7566064764
      </span>
      <span className="mr-4">
        <FaEnvelope className="mr-2" /> yogidrraghav@gmail.com
      </span>
      <span>
        <FaGlobe className="mr-2" /> www.drpathaksholisticcure.com
      </span>
    </p>  
    <p className="pt-3 text-center aptp aptpcontactm">
      <span className="">
        <FaPhoneAlt className="mr-1" /> 8516064764, 7566064764
      </span>
    </p> 
    <p className=" aptp text-center aptpcontactm">
      <span className="">
        <FaEnvelope className="mr-1" /> yogidrraghav@gmail.com
      </span>
    </p>  
    <p className=" aptp  text-center aptpcontactm">
      <span className=" ">
        <FaGlobe className="mr-1" /> www.drpathaksholisticcure.com
      </span>
    </p>  
    
      </div>
      </div>
    </div>
  )
}

export default Opdslip
