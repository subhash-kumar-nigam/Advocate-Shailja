import React from 'react';
import CenterHeading from '../../components/CenterHeading'
import Head from '../../components/Head'
const EventVideo = () => {
    const videos = [
        {
            title: 'नेशनल आयुष कॉन्फ़्रेन्स सफलतापूर्वक सम्पन्न',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1' // replace with actual YouTube video ID
        },
        {
            title: 'वर्क लाइफ बैलेंस थ्रू हॉलिस्टिक हेल्थ',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2'
        },
        {
            title: 'आयुषकॉन-2023 कॉन्फ्रेंस',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3'
        },
        {
            title: 'दो दिवसीय राष्ट्रीय आयुष सम्मेलन',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4'
        },
        {
            title: 'नेशनल आयुष कॉन्फ़्रेन्स',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5'
        },
        {
            title: 'National AYUSH Conference 2024',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_6'
        },
        {
            title: 'राष्ट्रीय आयुष सम्मेलन-2023',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_7'
        },
        {
            title: 'Balance between Work and Family',
            videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_8'
        }
    ];

    return (
      <>
      <Head pageheading="Event Videos" />
      <div className='container my-5 py-5'>
      <CenterHeading centerheading="Event Videos of Integrated Ayush Council" />
            <div className="row ">
                <div className="col-md-12 ">
                    <div className="row  ">
                        {videos.map((video, index) => (
                            <div key={index} className="col-lg-4 mb-4 col-md-6">
                                <div className="bg-light p-4" style={{ minHeight: '340px' }}>
                                    <div className="video-container">
                                        <iframe
                                            width="100%"
                                            height="200"
                                            src={video.videoUrl}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={video.title}
                                        ></iframe>
                                    </div>
                                    <div className="pt-3">
                                        <h4>{video.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default EventVideo;
