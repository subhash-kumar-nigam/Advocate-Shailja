import React from 'react';
import g1 from '../../Assets/images/g1.webp';
import g2 from '../../Assets/images/g2.webp';
import g3 from '../../Assets/images/g3.webp';
import g4 from '../../Assets/images/g4.webp';
import g5 from '../../Assets/images/g5.webp';
import g6 from '../../Assets/images/g6.webp';
import g7 from '../../Assets/images/g7.webp';
import g8 from '../../Assets/images/g8.webp';

const GalleryHome = () => {
    return (
        <div>
            <div className="container-fluid bg-white py-5 wow fadeInUp">
                <div className="container py-5" >
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                        <h4 className="mainheading">Our Latest Photos</h4>
                        <h3 className="subheading mb-4">Capturing Moments That Define Our Journey</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-3 ftco-animate">
                            <a href={g1} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: `url(${g1})` }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href={g2} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: `url(${g2})` }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href={g3} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: `url(${g3})` }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href={g4} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: `url(${g4})` }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 ftco-animate">
                            <a href={g5} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: `url(${g5})` }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href={g6} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: `url(${g6})` }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href={g7} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: `url(${g7})` }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 ftco-animate">
                            <a href={g8} className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: `url(${g8})` }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryHome;
