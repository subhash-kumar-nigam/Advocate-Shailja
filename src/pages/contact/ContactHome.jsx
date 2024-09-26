import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
const ContactHome = () => {
  return (
    <div>
      <div className='contactbg' id='contactus'>
        <section id="contact" class="contact section text-white">
          <div className="container section-title text-center" data-aos="fade-up">
            <h2 className='text-center appointmentheading'>Contact Us</h2>
            <h6 className='text-center pt-2 text-white'>Get in Touch with Us for Any Queries, Feedback, or Support. We're Here to Help You!</h6>
          
          </div>

          <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="row gy-5 py-5">
              <div className="col-lg-4">
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <FaMapMarkerAlt className="flex-shrink-0 mr-2" size={25} />
                  <div>
                    <h3>Location</h3>
                    <p>Dr. Pathak's Holistic Cure Bharat Bhavan Foujdar Mohalla Rajnagar District Chhatarpur MP, Rajnagar, India, Madhya Pradesh</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <FaPhoneAlt className="flex-shrink-0 mr-2" size={25} />
                  <div>
                    <h3>Call Us</h3>
                    <p>077480 18010</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                  <FaEnvelope className="flex-shrink-0 mr-2" size={25} />
                  <div>
                    <h3>Email Us</h3>
                    <p>yogidrraghav@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div class="col-lg-7">
                <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
                  <div class="row gy-4">

                    <div class="col-md-6">
                      <input type="text" name="name" class="form-control" placeholder="Full Name" required="" />
                    </div>

                    <div class="col-md-6 ">
                      <input type="text" class="form-control" name="mobile" placeholder="Mobile Number" required="" />
                    </div>

                    <div class="col-md-12">
                      <input type="text" class="form-control" name="address" placeholder="Full Address" required="" />
                    </div>
                    <div class="col-md-12">
                      <input type="text" class="form-control" name="subject" placeholder="Subject" required="" />
                    </div>

                    <div class="col-md-12">
                      <textarea class="form-control" name="message" rows="4" placeholder="Message" required=""></textarea>
                    </div>

                    <div class="col-md-12 text-center">   
                      <button type="submit" className='text-start'>Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d448323.5995905806!2d77.2088282!3d28.6139298!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%20Delhi!3m2!1d28.613929799999998!2d77.2088282!5e0!3m2!1sen!2sin!4v1725567914063!5m2!1sen!2sin" width="1518" height="450" className="border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>
    </div>
  )
}

export default ContactHome
