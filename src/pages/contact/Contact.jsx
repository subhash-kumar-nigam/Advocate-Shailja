import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa';
import Head from '../../components/Head'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const validate = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            errors.phone = "Phone number must be 10 digits";
        }
        if (!formData.subject) {
            errors.subject = "Subject is required";
        }
        if (!formData.message) {
            errors.message = "Message is required";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    return (
        <div>

            <Head pageheading="Contact Us" />
            <div className="container mt-5 pt-4">
                <h2 className="text-center aboutheading">Contact Us</h2>
                <h6 className='text-center pt-2 pb-5 '>Get in Touch with Us for Any Queries, Feedback, or Support. We're Here to Help You!</h6>
                <div className="pt-5 row">
                    <div className="col-lg-5 col-md-12  leftspace">
                        <div className="d-flex flex-column justify-content-center px-4 py-5  contactinfo" >
                           
                            <div className="d-flex mt-3 mb-4 ">
                                <FaMapMarkerAlt className="fa-2x contacticon flex-shrink-0 mr-3" />
                                <div>
                                    <h5 className="text-white">Address</h5>
                                    <p><a className="text-white text-decoration-none" href="https://maps.app.goo.gl/w4uoj1DuXo1Jwhz29" target="_blank" rel="noopener noreferrer">S-32, 1st Floor, Green Park Extension Uphar Cinema Commercial Complex, NewDelhi-11001 </a></p>
                                </div>
                            </div>
                            <div className="d-flex my-4">
                                <FaEnvelopeOpen className="fa-2x contacticon flex-shrink-0 mr-3" />
                                <div>
                                    <h5 className="text-white">Email Address</h5>
                                    <p><a href="mailto:integratedayushcouncil@gmail.com" className="text-light text-decoration-none">integratedayushcouncil@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="d-flex my-3">
                                <FaPhoneAlt className="fa-2x contacticon flex-shrink-0 mr-3" />
                                <div>
                                    <h5 className="text-white">Contact Number</h5>
                                    <p className="m-0"><a href="tel:+01135990037" className="text-light text-decoration-none">01135990037</a></p>
                                    <p className="m-0"><a href="tel:9582082456" className="text-light text-decoration-none">9582082456</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 mb-lg-5">
                        <div className="contact-form bg-light mb-5 p-4">
                        <h6 className='py-2'>CONFERENCE SECRETARIAT : Shrikant Co-ordinator</h6>
                            <form >
                                <div className="row">
                                    <div className="col-12 col-md-6 form-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control p-2"
                                            placeholder="Your Name"
                                            name="name"

                                            required
                                        />
                                        {errors.name && <small className="text-danger">{errors.name}</small>}
                                    </div>
                                    <div className="col-12 col-md-6 form-group mb-3">
                                        <input
                                            type="tel"
                                            className="form-control p-2"
                                            placeholder="Your Phone"
                                            name="phone"
                                            required
                                        />
                                        {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control p-2"
                                        placeholder="Subject"
                                        name="subject"
                                        required
                                    />
                                    {errors.subject && <small className="text-danger">{errors.subject}</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control p-2"
                                        placeholder="Address"
                                        name="address"
                                        required
                                    />
                                    {errors.subject && <small className="text-danger">{errors.subject}</small>}
                                </div>
                                <div className="form-group mb-3">
                                    <textarea
                                        className="form-control py-2 px-4"
                                        rows="3"
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                    {errors.message && <small className="text-danger">{errors.message}</small>}
                                </div>
                                <div className='py-3'>
                                    <button className=" submitbtn" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89885633002!2d77.04383133031291!3d28.527553992762726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1726559414137!5m2!1sen!2sin"  className='border-0' width={1518}  height={380} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
        </div>
    )
}

export default Contact
