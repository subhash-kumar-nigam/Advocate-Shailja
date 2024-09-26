import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import c1 from '../../Assets/images/c1.webp'
import c2 from '../../Assets/images/c2.webp'
import c3 from '../../Assets/images/c3.webp'
import c4 from '../../Assets/images/c4.webp'
import c5 from '../../Assets/images/c5.webp'
import c6 from '../../Assets/images/c6.webp'
import c7 from '../../Assets/images/c7.webp'
import c8 from '../../Assets/images/c8.webp'
import c9 from '../../Assets/images/c9.webp'
import c10 from '../../Assets/images/c10.webp'
import c11 from '../../Assets/images/c11.webp'
import c12 from '../../Assets/images/c12.webp'
import c13 from '../../Assets/images/c13.webp'
import c14 from '../../Assets/images/c14.webp'
import c15 from '../../Assets/images/c15.webp'
import c16 from '../../Assets/images/c16.webp'
const OurPartners = () => {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    };

    return (
        <div>
            <div className="container-fluid bg-light pt-5 wow fadeInUp">
                <div className="container pt-5" >
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                        <h4 className="mainheading">Our Partners</h4>
                        <h3 className="subheading mb-4">Driving Success Through Strategic Partnerships</h3>
                    </div>
                    <div className='row'>   
                            <Slider {...settings} className="customer-logos">
                                <div className="slide wow fadeInUp">
                                    <img src={c1} alt="Partner 1"  className='partnerimg'/>
                                </div>
                                  <div className="slide  wow fadeInUp">
                                    <img src={c2} alt="Partner 2" className='partnerimg' />
                                </div>
                                  <div className="slide wow fadeInUp ">
                                    <img src={c3} alt="Partner 3" className='partnerimg' />
                                </div>
                                  <div className="slide  wow fadeInUp">
                                    <img src={c4} alt="Partner 4" className='partnerimg' />
                                </div>
                                  <div className="slide ">
                                    <img src={c5} alt="Partner 5"  className='partnerimg'/>
                                </div>
                                  <div className="slide  wow fadeInUp">
                                    <img src={c6} alt="Partner 6"  className='partnerimg'/>
                                </div>
                                  <div className="slide  wow fadeInUp">
                                    <img src={c7} alt="Partner 7"  className='partnerimg'/>
                                </div>
                                  <div className="slide  wow fadeInUp">
                                    <img src={c8} alt="Partner 8"  className='partnerimg'/>
                                </div>
                                  <div className="slide wow fadeInUp">
                                    <img src={c9} alt="Partner 9"  className='partnerimg'/>
                                </div>
                                  <div className="slide wow fadeInUp ">
                                    <img src={c10} alt="Partner 9" className='partnerimg' />
                                </div>
                                  <div className="slide wow fadeInUp ">
                                    <img src={c11} alt="Partner 9" className='partnerimg' />
                                </div>
                                  <div className="slide  wow fadeInUp">
                                    <img src={c12} alt="Partner 9" className='partnerimg' />
                                </div>
                                  <div className="slide  wow fadeInUp">
                                    <img src={c13} alt="Partner 9" className='partnerimg'/>
                                </div>
                                  <div className="slide wow fadeInUp ">
                                    <img src={c14} alt="Partner 9"  className='partnerimg'/>
                                </div>
                                  <div className="slide wow fadeInUp ">
                                    <img src={c15} alt="Partner 9"  className='partnerimg'/>
                                </div>
                                  <div className="slide wow fadeInUp ">
                                    <img src={c16} alt="Partner 9"  className='partnerimg'/>
                                </div>
                            </Slider>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default OurPartners;
