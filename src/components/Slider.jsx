import React from 'react'
import slider1 from '../Assets/images/iacss1.png'
import slider2 from '../Assets/images/iacss4.png'
import slider3 from '../Assets/images/iacss3.png'
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = () => {
  return (
    <>
      <div className='slider'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
          <div class="carousel-item active ">
              <img class="d-block w-100 slides " src={slider1} alt="slide1" />
            </div>
            <div class="carousel-item ">
              <img class="d-block w-100 slides " src={slider2} alt="slide2" />
            </div> 
            <div class="carousel-item ">
              <img class="d-block w-100 slides " src={slider3} alt="slide3" />
            </div> 
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  )
}
export default Slider;
