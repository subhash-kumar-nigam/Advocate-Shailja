import React, { useState } from 'react';
import Head from '../../components/Head';
import { Link } from 'react-router-dom'

const allPosts = [
  
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF7F50/000000",
    date: "19th Oct, 19",
    title: "Quick guide on business with friends.",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/6495ED/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF1493/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF7F50/000000",
    date: "19th Oct, 19",
    title: "Quick guide on business with friends.",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/6495ED/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF1493/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF7F50/000000",
    date: "19th Oct, 19",
    title: "Quick guide on business with friends.",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/6495ED/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF1493/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF7F50/000000",
    date: "19th Oct, 19",
    title: "Quick guide on business with friends.",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/6495ED/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF1493/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF7F50/000000",
    date: "19th Oct, 19",
    title: "Quick guide on business with friends.",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/6495ED/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
  {
    imgSrc: "https://www.bootdey.com/image/420x280/FF1493/000000",
    date: "19th Oct, 19",
    title: "Become more money-minded",
    excerpt: "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
    authorName: "ganesh",
  },
 
];

const PublishedNews = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount(visibleCount + 6);
  };

  return (
    <div>
      <Head pageheading="Published News" />
      <div className='my-5'>
        <h1 className="pb-5 text-center mainheading">Published News of Integrated Ayush Council</h1>
        <div className="container mt-100 mt-60">
  <div className="row">
    {allPosts.slice(0, visibleCount).map((post, index) => (
      <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
        <div className="blog-post rounded border" style={{ height: '550px' }}> 
          <div
            className="blog-img "
            style={{ height: '250px' }}
          >
            <img
              src={post.imgSrc}
              className="img-fluid rounded-top"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className="content py-2 px-3" style={{ height: 'calc(100% - 200px)', overflow: 'hidden' }}> 
            <div className="pt-3 mt-3 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 administrativemain text-capitalize">{post.authorName}</h6>
              <small className="text-muted">{post.date}</small>
            </div>
            <h6 className="mt-3 administrativesub">{post.title}</h6>
            <p className="text-muted mt-2" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {post.excerpt}
            </p> 
            <div className="pt-3 mt-3 border-top d-flex justify-content-between align-items-center">
              <div className="author mt-2">
                <Link to="/blogdetails" className="text-dark text-decoration-none name">Read More >> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  {visibleCount < allPosts.length && (
    <div className="text-center my-5">
      <button onClick={handleViewMore} className="btn btn-primary rounded-pill py-3 px-5">View More</button>
    </div>
  )}
</div>

      </div>
    </div>
  );
};

export default PublishedNews;
