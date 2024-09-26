import React from 'react'
import news1 from '../Assets/images/new1.jpg'
import news2 from '../Assets/images/news2.jpg'
import news3 from '../Assets/images/news3.jpg'

const NewsUpdate = () => {
  return (
    <div>
         <div className='bg-light py-5'>
        <div class="container-fluid blog py-5  ">
            <div class="container ">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                <h4 className="mainheading">News And Updates</h4>
                <h3 className="subheading mb-4">Highlights of Recent Achievements and Announcements</h3>
                </div>
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={news1} class="img-fluid  newsimg rounded-top w-100" alt="" />
                                <div class="blog-categiry py-2 px-4">
                                    <span>News</span>
                                </div>
                            </div>
                            <div class="blog-content p-4">
                                <h3 className="d-inline-block newheading mb-4">Which allows you to pay down insurance bills</h3>                               
                                <a href="#" class="btn p-0 newsbtn">Read More  <i class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={news2} class="img-fluid newsimg rounded-top w-100" alt="" />
                                <div class="blog-categiry py-2 px-4">
                                    <span>News</span>
                                </div>
                            </div>
                            <div class="blog-content p-4">
                                <h3 className="d-inline-block newheading mb-4">Leverage agile frameworks to provide</h3>
                                <a href="#" class="btn newsbtn p-0">Read More  <i class="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={news3}class="img-fluid newsimg rounded-top w-100" alt="" />
                                <div class="blog-categiry py-2 px-4">
                                    <span>News</span>
                                </div>
                            </div>
                            <div class="blog-content p-4">
                                <h3 className="d-inline-block newheading mb-4">Leverage agile frameworks to provide</h3>
                                <a href="#" class="btn newsbtn p-0">Read More  <i class="fa fa-arrow-right"></i></a>
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

export default NewsUpdate
