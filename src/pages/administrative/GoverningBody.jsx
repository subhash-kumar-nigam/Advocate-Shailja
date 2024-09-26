import React from 'react';
import Head from '../../components/Head';
import { Link } from "react-router-dom";

const allPosts = [
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF7F50/000000",
    date: "19th Oct, 19",
    title: "Quick guide on business with friends.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/6495ED/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF1493/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF7F50/000000",
    date: "19th Oct, 19",
    title: "Quick guide on business with friends.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/6495ED/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF1493/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    authorName: "ganesh",
  },
];

const GoverningBody = () => {

  const groupedPosts = [];
  for (let i = 0; i < allPosts.length; i += 3) {
    groupedPosts.push(allPosts.slice(i, i + 3));
  }

  return (
    <div>
      <Head pageheading="Governing Body" />
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col'>
            <h1 className="pb-5 text-center mainheading">Governing Body of the Integrated Ayush Council</h1>
            <ol>
              <li className='py-3'>
                <strong className='liheading'>Board of Directors:</strong>
                <ul className='ourptext pt-2'>
                  <li>The Integrated Ayush Council would likely have a board of directors responsible for the overall governance, strategic direction, and policy decisions.</li>
                  <li>Directors may represent various Ayush disciplines, healthcare experts, researchers, and community leaders.</li>
                </ul>
              </li>
              <div className="container my-5">
                {/* First Carousel */}
                <div id="postCarousel1" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    {groupedPosts.map((postGroup, index) => (
                      <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <div className="row">
                          {postGroup.map((post, idx) => (
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={idx}>
                              <div className="blog-post rounded">
                                <div className="blog-img">
                                  <img src={post.imgSrc} className="img-fluid rounded-top" alt="" />
                                </div>
                                <div className="content py-2 px-3">
                                  <div className="pt-3 mt-3 d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0 administrativemain">{post.authorName}</h6>
                                    <small className="text-muted">{post.date}</small>
                                  </div>
                                  <h6 className="mt-3 administrativesub">{post.title}</h6>
                                  <p className="text-muted mt-2">{post.excerpt}</p>
                                  <div className="pt-3 mt-3 border-top d-flex justify-content-between align-items-center">
                                    <div className="author ">
                                      <Link to="/member_details" className="text-dark text-decoration-none name">
                          Read More >>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Controls below the row */}
                  <div className="d-flex justify-content-between mt-3">
                    <a className="carousel-control-prev" href="#postCarousel1" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#postCarousel1" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              <li className=' py-3'>
                <strong className='liheading'>Executive Committee:</strong>
                <ul className='ourptext pt-2'>
                  <li>An executive committee, comprising key leaders from different Ayush disciplines, could be responsible for day-to-day operations and implementing the council’s strategies.</li>
                  <li>This committee may include positions such as Chairperson, Vice-Chairperson, Secretary, and Treasurer.</li>
                </ul>
              </li>
<div className='container my-5'>
              <div id="postCarousel2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {groupedPosts.map((postGroup, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                      <div className="row">
                        {postGroup.map((post, idx) => (
                          <div className="col-lg-4 col-md-6 mt-4 pt-2" key={idx}>
                            <div className="blog-post rounded">
                              <div className="blog-img">
                                <img src={post.imgSrc} className="img-fluid rounded-top" alt="" />
                              </div>
                              <div className="content py-2 px-3">
                                <div className="pt-3 mt-3 d-flex justify-content-between align-items-center">
                                  <h6 className="mb-0 administrativemain">{post.authorName}</h6>
                                  <small className="text-muted">{post.date}</small>
                                </div>
                                <h6 className="mt-3 administrativesub">{post.title}</h6>
                                <p className="text-muted mt-2">{post.excerpt}</p>
                                <div className="pt-3 mt-3 border-top d-flex justify-content-between align-items-center">
                                  <div className="author ">
                                    <Link to="/blogdetails" className="text-dark text-decoration-none name">
                          Read More >>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <a className="carousel-control-prev" href="#postCarousel2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#postCarousel2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              </div>

              <li className=' py-3'>
                <strong className='liheading'>Committees for Each Ayush Discipline:</strong>
                <ul className='ourptext pt-2'>
                  <li>To ensure representation and expertise from each Ayush discipline (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy), the council might have specialized committees or divisions.</li>
                  <li>These committees would focus on discipline-specific issues, research, and development.</li>
                </ul>
              </li>
              <li className=' py-3'>
                <strong className='liheading'>Ethics and Standards Committee:</strong>
                <ul className='ourptext pt-2'>
                  <li>A dedicated committee could oversee ethical considerations and set standards for practitioners within the Ayush systems.</li>
                  <li>This committee may work to establish and maintain a code of ethics for Ayush professionals.</li>
                </ul>
              </li>
              <li className=' py-3'>
                <strong className='liheading'>Research and Development Committee:</strong>
                <ul className='ourptext pt-2'>
                  <li>Given the importance of research in Ayush, a committee might be formed to promote and oversee research initiatives.</li>
                  <li>This committee could guide funding decisions, research priorities, and collaborations with research institutions.</li>
                </ul>
              </li>
              <li className=' py-3'>
                <strong className='liheading'>Education and Training Committee:</strong>
                <ul className='ourptext pt-2'>
                  <li>An education and training committee could focus on accreditation standards for Ayush educational institutions.</li>
                  <li>It may also work to develop and enhance curriculum guidelines for Ayush disciplines.</li>
                </ul>
              </li>
              <li className=' py-3'>
                <strong className='liheading'>Public Relations and Outreach Team:</strong>
                <ul className='ourptext pt-2'>
                  <li>To engage with the community and promote awareness of Ayush practices, a public relations and outreach team could be part of the governing body.</li>
                  <li>This team might organize events, workshops, and awareness campaigns.</li>
                </ul>
              </li>
              <li className=' py-3'>
                <strong className='liheading'>Legal and Compliance Team:</strong>
                <ul className='ourptext pt-2'>
                  <li>To ensure that the council operates within legal frameworks, a legal and compliance team may be established.</li>
                  <li>This team would address regulatory issues and ensure compliance with relevant laws.</li>
                </ul>
              </li>
              <li className=' py-3'>
                <strong className='liheading'>Finance and Audit Team:</strong>
                <ul className='ourptext pt-2'>
                  <li>A finance and audit team could be responsible for overseeing the council’s financial management, budgeting, and auditing processes.</li>
                  <li>This team ensures transparency and accountability in financial matters.</li>
                </ul>
              </li>
              <li className=' py-3'>
                <strong className='liheading'>Stakeholder Engagement Representatives:</strong>
                <ul className='ourptext pt-2'>
                  <li>The governing body may include representatives from various stakeholders, including Ayush practitioners, researchers, patients, and community leaders.</li>
                  <li>These representatives could provide valuable input and perspectives in decision-making processes.</li>
                </ul>
              </li>

            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoverningBody;
