import React, {useState} from 'react'
import CenterHeading from '../../components/CenterHeading'
import Head from '../../components/Head'

const Gallery = () => {

  const images = [
    'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  ];


  const [visibleImages, setVisibleImages] = useState(8); 

  const viewMore = () => {
    setVisibleImages(prevVisible => prevVisible + 8); 
  };

  return (
    <div>
      <Head pageheading="Gallery" />
      <div className='container my-5 py-5'>
      <CenterHeading centerheading="Gallery of Integrated Ayush Council" />
      <div className="row">
        {images.slice(0, visibleImages).map((image, index) => (
          <div className="col-lg-3 col-md-4 col-xs-6 pb-4 thumb" key={index}>
            <a className="thumbnail" href="#" data-toggle="modal" data-target="#image-gallery">
              <img className="img-thumbnail" src={image} alt={`Image ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <div className="text-center mt-5">
          <button className="border-0 px-5 py-3 btn-primary rounded-pill btn-lg" onClick={viewMore}>View More</button>
        </div>
      )}
    </div>

      </div>
  
  )
}

export default Gallery
