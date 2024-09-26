import React from 'react';
import { Carousel } from 'react-bootstrap';

const FullScreenVideo = () => {
    return (
        <div>
            <Carousel className='wow fadeInUp '>
            <Carousel.Item>
                <iframe  src="https://www.youtube.com/embed/zJ1FUMP5xTc" 
                    className="d-block custom-video"
                title="Padma Shri Dr  S C Manchanda, Former Faculty, AIIMS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe
                        className="d-block custom-video"
                        src="https://www.youtube.com/embed/wdvq63HD5Qc?start=10&rel=0&autoplay=0"
                        title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe src="https://www.youtube.com/embed/1urS6f61Wks"
                        className="d-block custom-video"
                        title="Dr  Vinod Kumar Yadav, Chief Medical Officer, CGHS"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe  src="https://www.youtube.com/embed/14Smj2nBXUc" 
                        className="d-block custom-video"
                    title="Padma Bhushan Dr  Devendra Triguna ji" frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                <iframe  src="https://www.youtube.com/embed/ewStEWgsx5s"
                    className="d-block custom-video"
                 title="Dr  SN Bansu President, Integrated Ayush Council" frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                <iframe src="https://www.youtube.com/embed/O-Ts6vNgDd8" 
                    className="d-block custom-video"
                title="Speaker 2 National Ayush Conference" frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                <iframe src="https://www.youtube.com/embed/4XsewTZmNuw" 
                    className="d-block custom-video"
                title="Dr  Himanshu Verma, Chief Medical Officer NFGS MCD" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
                </Carousel.Item>
               
            </Carousel>
        </div>
    );
}

export default FullScreenVideo;
