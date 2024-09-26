import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
       <footer className="ftco-footer ftco-section bg-light">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Integrated Ayush Council</h2>
              <p>The Integrated Ayush Council (IAC), is a pioneering body established to promote the integration of traditional Indian medicine (Ayush) with modern healthcare. IAC presents a model for self-regulation and collaborative development within the AYUSH field.</p>
             
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Popular Links</h2>
              <ul className="list-unstyled">
                <li><Link to="#" className='text-decoration-none footer-text'>Membership Registration</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>Products</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>Institutions/ Industries</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>Individual / Practitioners</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>Consultancy</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>Complaints</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>Career</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li><Link to="#" className='text-decoration-none footer-text'>Home</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text' >About</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>Contactc us</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>Gallery</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>Events</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>News</Link></li>
                <li><Link to="#" className='text-decoration-none footer-text'>Media Registration</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon icon-map-marker"></span><span className="text">S-32, 1st Floor, Green Park Extension Uphar Cinema Commercial Complex, NewDelhi-110016</span></li>
                  <li><Link to="#" className='text-decoration-none'><span className="icon icon-phone text-decoration-none"></span><span className="text">+91-9582082456</span></Link></li>
                  <li><Link to="#" className='text-decoration-none'><span className="icon icon-envelope"></span><span className="text">integratedayushcouncil@gmail.com</span></Link></li>
                </ul>
                <ul className="ftco-footer-social list-unstyled  text-center">
                <li className="ftco-animate"><Link to="#"><i className="fab fa-twitter "></i></Link></li>
                <li className="ftco-animate"><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                <li className="ftco-animate"><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                <li className="ftco-animate"><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                <li className="ftco-animate"><Link to="#"><i className="fab fa-whatsapp"></i></Link></li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12 text-center">

            <p className="mb-0">
          
              Copyright &copy;<script>
                document.write(new Date().getFullYear());

              </script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
             
            </p>
          </div>
        </div> */}
      </div>
    </footer>
    </div>  
  )
}

export default Footer
