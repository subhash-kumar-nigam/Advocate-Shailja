import React, { useState } from 'react'
import Head from '../../components/Head';

const MembershipForm = () => {
  // Initialize with one default input field
  const [socialLinks, setSocialLinks] = useState([{ id: Date.now(), value: '' }]);

  const handleInputChange = (id, value) => {
    setSocialLinks(prevLinks =>
      prevLinks.map(link => (link.id === id ? { ...link, value } : link))
    );
  };

  const addSocialLink = () => {
    setSocialLinks(prevLinks => [...prevLinks, { id: Date.now(), value: '' }]);
  };

  const removeSocialLink = id => {
    // Ensure at least one input remains
    if (socialLinks.length > 1) {
      setSocialLinks(prevLinks => prevLinks.filter(link => link.id !== id));
    }
  };


  return (
    <div>
      <Head pageheading="Register Now" />
      <div className='container my-5'>
        <h2 className='administrativemain text-center'>Are you a Ayush Doctor/Institution/Manufacturer / Traders?</h2>
        <h3 className=' administrativesub fs-5 pt-3 text-center'>Join the ‘ Integrated Ayush Council’ partner experts panel to build your brand and grow your business today!</h3>

        <div className="my-5 py-5">
          <div className="col-12 ">
            <div className="row g-0">
              <div className="col-lg-6 genralbackground ">
                <div className="p-5">
                  <h3 className=" text-white mb-5 formheading">General Infomation</h3>
                  <div className="row mb-5">
                    <div className="col-12">
                      <label className="form-label genralflabel text-white" for="title">Title</label>
                      <input type="text" id="title" className="form-control genralinputs" />
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-12 ">
                      <div data-mdb-input-init className="form-outline">
                        <label className="form-label text-white genralflabel" for="name">Full Name </label>
                        <input type="text" id="name" className="form-control genralinputs" />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-12">
                      <label className="form-label text-white genralflabel" for="description">Description</label>
                      <div data-mdb-input-init className="form-outline">
                        <textarea type="text" id="description" rows={3} className="form-control genralinputs" />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col-12 ">
                      <div data-mdb-input-init className="form-outline">
                        <label className="form-label text-white genralflabel" for="tagline">Tagline</label>
                        <input type="text" id="tagline" className="form-control genralinputs" />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-12">
                      <label className="form-label text-white genralflabel" for="tagline">Location</label>
                      <select className="form-select genralselect" aria-label="Select Position">
                        <option value="" disabled selected>Select Location</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="India">India</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                      </select>

                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-12">
                      <label className="form-label text-white genralflabel" for="tagline">Tags</label>
                      <select className="form-select genralselect" aria-label="Select Position">
                        <option value="" disabled selected>Select a Tag</option>
                        <option value="Ayurveda">Ayurveda</option>
                        <option value="Homeopathy">Homeopathy</option>
                        <option value="Naturopathy">Naturopathy & Yoga</option>
                        <option value="Nutritionist">Nutritionist</option>
                        <option value="Siddha">Siddha</option>
                        <option value="Unani">Unani</option>
                      </select>

                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-12 ">
                      <label className="form-label text-white genralflabel" for="category">Category</label>
                      <select className="form-select genralselect" aria-label="Select Position">
                        <option value="" disabled selected>Select a Tag</option>
                        <option value="Arthritis">Arthritis</option>
                        <option value="Ayurveda">Ayurveda</option>
                        <option value="Ayush Clinics">Ayush Clinics</option>
                        <option value="Colleges">Colleges</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="Dieticians">Dieticians</option>
                        <option value="Heart Diseases">Heart Diseases</option>
                        <option value="Homeopathy">Homeopathy</option>
                        <option value="Hospitals">Hospitals</option>
                        <option value="Hypertension">Hypertension</option>
                        <option value="Insomnia">Insomnia</option>
                        <option value="Institutions">Institutions</option>
                        <option value="Joint Pain">Joint Pain</option>
                        <option value="Manufacturer">Manufacturer</option>
                        <option value="Migraine">Migraine</option>
                        <option value="Other Stakeholder/Faculty/Research Scholar">Other Stakeholder/Faculty/Research Scholar</option>
                        <option value="Practitioner">Practitioner</option>
                        <option value="Practitioners">Practitioners</option>
                        <option value="Products">Products</option>
                        <option value="Siddha">Siddha</option>
                        <option value="Trader">Trader</option>
                        <option value="Unani">Unani</option>
                        <option value="Universities">Universities</option>
                        <option value="Wellness Center">Wellness Center</option>
                        <option value="Wellness Resorts">Wellness Resorts</option>
                        <option value="Yoga & Naturopathy">Yoga & Naturopathy</option>
                      </select>

                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-6 bg-light text-dark">
                <div className="p-5">
                  <h3 className=" formheading mb-5 ">Contact Details</h3>
                  <div className='row mb-4'>
                    <div className="col-12 ">
                      <label className="form-label genralflabel" for="address">Address</label>
                      <input type="text" id="address" className="form-control  contactinputs" />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-12">
                      <label className="form-label genralflabel" for="zipcode">Zip/Post code</label>
                      <input type="text" id="zipcode" className="form-control contactinputs" />
                    </div>
                  </div>
                  <div className='row mb-4'>
                    <div className="col-6">
                      <label className="form-label genralflabel" for="Phone1">Phone</label>
                      <input type="text" id="phone1" className="form-control contactinputs" />
                    </div>

                    <div className="col-6">
                      <label className="form-label genralflabel" for="Phone2">Phone 2</label>
                      <input type="text" id="phone2" className="form-control contactinputs" />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-12">
                      <label className="form-label genralflabel" for="fax">Fax</label>
                      <input type="text" id="fax" className="form-control contactinputs" />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-12">
                      <label className="form-label genralflabel" for="email">Email</label>
                      <input type="text" id="email" className="form-control contactinputs" />
                    </div>
                  </div>
                  <div className='row mb-4'>
                    <div className="col-12 ">
                      <label className="form-label genralflabel" for="website">Website</label>
                      <input type="text" id="website" className="form-control contactinputs" />
                    </div>
                  </div>
                  <div className='row mb-4'>
                    <div className="col-12">
                      <label className="form-label genralflabel" htmlFor="social">Social Info</label>
                      {socialLinks.map((link, index) => (
                        <div key={link.id} className="input-group mb-2">
                          <input
                            type="text"
                            className="form-control contactinputs"
                            value={link.value}
                            onChange={e => handleInputChange(link.id, e.target.value)}
                            placeholder="Enter social link"
                          />
                          {index > 0 && ( // Render the remove button only for additional fields
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => removeSocialLink(link.id)}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button type="button" className="btn btn-primary mt-2" onClick={addSocialLink}>
                        Add Another Social Link
                      </button>
                    </div>
                  </div>
                  <div className='row mb-4'>
                    <div className="mb-4">
                      <label className="form-label genralflabel" for="imagevideo">Image/Video</label>
                      <input type="file" id="imagevideo" className="form-control contactinputs" />
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4 pb-3">
                    <input className="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label text-dark" for="form2Example3">
                      I do accept the <a href="" className="text-dark text-decoration-none ">Terms and Conditions</a> of your
                      site.
                    </label>
                  </div>
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg"
                    data-mdb-ripple-color="dark">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembershipForm
