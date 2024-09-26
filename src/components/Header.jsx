import React from 'react'
import { Link } from 'react-router-dom'
import iac from '../Assets/images/iac.webp'
// import  GoogleTranslateDropdown from './GoogleTranslateDropdown'
const Header = () => {
    return (
        <div>
        <div className="container-fluid topbar px-0 px-lg-4 bgtopbar py-2 d-none d-lg-block">
            <div className="container">
                <div className="row gx-0 align-items-center">
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap">
                        {/* <GoogleTranslateDropdown /> */}
                            <div className="border-end border-white pe-3">
                                <Link to="/" className="text-white contactnumber text-decoration-none"><i className="fas fa-map-marker-alt text-white me-2"></i>Find A Location</Link>
                            </div>
                            <div className="ps-3">
                                <Link to="mailto:pathakdrraghav77@gmail.com" className="text-white contactnumber text-decoration-none"><i className="fas fa-envelope text-white me-2"></i>pathakdrraghav77@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-flex justify-content-end">
                            <div className="d-flex border-end border-white pe-3">
                                <Link className="btn p-0 text-white me-3" to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn p-0 text-white me-3" to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn p-0 text-white me-3" to="#"><i className="fab fa-instagram"></i></Link>
                                <Link className="btn p-0 text-white me-0" to="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                           
                            {/* <div className="dropdown ms-3">
                                <Link to="#" className="text-dark" data-bs-toggle="dropdown"><small><i className="fas fa-globe-europe text-white me-2"></i> English</small></Link>
                                <div className="dropdown-menu rounded">
                                    <Link to="#" className="dropdown-item text-decoration-none">English</Link>
                                    <Link to="#" className="dropdown-item">Hindi</Link>
                                   
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light"> 
                    <Link to="#" className="navbar-brand">
                       <img src={iac} alt='logo' className='img-fluid logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ml-4 pl-3">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <div className="nav-item dropdown">
                            Administrative
                                <div className="dropdown-menu">
                                    <Link to="/leadership" className="dropdown-item">Leadership</Link>
                                    <Link to="/governing_body" className="dropdown-item">Governing Body</Link>  
                                    <Link to="/allmember" className="dropdown-item">All Members</Link>                                                                  
                                    <Link to="/our_team" className="dropdown-item">Our team</Link>                       
                                </div>
                            </div>
                            <Link to="/aboutus" className="nav-item nav-link">About</Link>
                            <div className="nav-item dropdown">                            
                                Services                               
                                <div className="dropdown-menu">
                                    <Link to="/career" className="dropdown-item">Career</Link>
                                    <Link to="/consultancy" className="dropdown-item">Consultancy</Link>
                                    <Link to="/complaints" className="dropdown-item">Complaints</Link>
                                    <Link to="/policies" className="dropdown-item">Policies</Link>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                   Membership
                                <div className="dropdown-menu">
                                    <Link to="/individual" className="dropdown-item">Individual / Practitioners</Link>
                                    <Link to="/institutions" className="dropdown-item">Institutions/ Industries</Link>
                                    <Link to="/products" className="dropdown-item">Products</Link>
                                    <Link to="/membershipform" className="dropdown-item">Membership Form</Link>
                                    <Link to="/membership_registration" className="dropdown-item">Membership Registration</Link>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                Activities
                                <div className="dropdown-menu">
                                    <Link to="/events" className="dropdown-item">Events</Link>
                                    <Link to="/press_conference" className="dropdown-item">Press conference</Link>
                                    <Link to="/mou" className="dropdown-item">MOU</Link>
                                    <Link to="/news" className="dropdown-item">News</Link>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                   Media
                                <div className="dropdown-menu">
                                    <Link to="/press_release" className="dropdown-item">Press Release</Link>
                                    <Link to="/event_news" className="dropdown-item">Event News</Link>
                                    <Link to="/published_news" className="dropdown-item">Published News</Link>
                                    <Link to="/event_video" className="dropdown-item">Event Video</Link>
                                    <Link to="/gallery" className="dropdown-item">Gallery</Link>
                                    <Link to="/media_registration" className="dropdown-item">Media Registration</Link>
                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            <div className="nav-btn px-3">
                                <Link to="/membershipform" className="btn btn-primary rounded-pill text-decoration-none py-2 px-4 ms-3 flex-shrink-0"> Join Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shrink-0 ps-4">
                        <Link to="#" className="btn btncall btn-lg-square rounded-circle position-relative wow tada" data-wow-delay=".9s">
                            <i className="fa fa-phone-alt fa-2x p-1"></i>
                           
                        </Link>
                        <div className="d-flex flex-column ms-3">
                            <span>Contact us</span>
                            <Link to="tel:+91-9584284411" className='text-decoration-none'><span className="text-dark contactnumber text-decoration-none">+91-9584284411</span></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        
        </div>
    )
}

export default Header
