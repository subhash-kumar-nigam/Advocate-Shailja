import React from 'react'
import map from '../../Assets/images/map1519647479-1745x2048.webp'
const Why_choose_us = () => {
    return (
        <div>
            <div class="container-fluid bg-light about  py-5">
                <div class="container pb-5">
                    <div class="row pt-5 g-5">
                        <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div class="about-item-content bg-white rounded p-5 h-100">
                                <h4 class="whychooseheading">Why Integrated ayush council ?</h4>
                                <h2 class="mt-3 mb-4 subheading">Comprehensive Solutions for Holistic Well-being</h2>
                                <p className='ourptext'> The AYUSH market in 2020 reached a staggering ₹1,49,451 crore, marking a remarkable six-fold growth since 2014. India’s AYUSH exports amounted to ₹12,715 crore in the same year. AYUSH encompasses Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy, focusing on preventing and curing various disorders. The AYUSH health infrastructure includes 12,000 AYUSH hospitals and 37,000 AYUSH dispensaries. The Integrated AYUSH Council convenes experts, policymakers, researchers, and stakeholders to shape the future of AYUSH systems in India. </p>
                                <h4 class="whychooseheading">Our Reach</h4>
                                <p className='ourptext'> In keeping with its philosophy of ‘Real Work, Real Change’, the Integrated AYUSH Council provides a strong platform for the overall development and promotion of AYUSH at the national and international levels. </p>
                                <a class="btn btn-primary rounded-pill  mt-4 py-3 px-5" href="#">More Information</a>
                            </div>
                        </div>
                        <div class="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                            <div class="bg-white rounded p-5 h-100">
                                <div class="row g-4 justify-content-center">
                                    <div class="col-12">
                                        <div class="rounded bg-light">
                                            <img src={map} class="map rounded " alt="" />
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="counter-item bg-light rounded p-3 h-100">
                                            <div class="counter-counting">
                                                <span class="whychooseheading fs-2 fw-bold" data-toggle="counter-up">9</span>
                                                <span class=" whychooseheading ">+</span>
                                            </div>
                                            <h4 class="mb-0 text-dark mainheading">States</h4>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="counter-item bg-light rounded p-3 h-100">
                                            <div class="counter-counting">
                                                <span class="whychooseheading fs-2 fw-bold" data-toggle="counter-up">25</span>
                                                <span class="whychooseheading">+</span>
                                            </div>
                                            <h4 class="mb-0 text-dark mainheading">Countries</h4>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="counter-item bg-light rounded p-3 h-100">
                                            <div class="counter-counting">
                                                <span class="whychooseheading fs-2 fw-bold" data-toggle="counter-up">42,507</span>
                                                <span class="whychooseheading">+</span>
                                            </div>
                                            <h4 class="mb-0 text-dark mainheading">Members</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why_choose_us
