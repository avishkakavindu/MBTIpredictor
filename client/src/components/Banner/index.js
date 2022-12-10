import React from 'react';

import { bannerImage } from '../../assets';

const Banner = () => {
  return (
    <section id='banner' className='d-flex align-items-center mt-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
            <h1>Predict your personality by Social Media texts </h1>
            <h2>
              Now you can predict anyone's MBTI personality type with there
              Social Media activities
            </h2>
            <div className='d-flex'>
              <a href='#howTo' className='btn-get-started scrollto'>
                Get Started
              </a>
            </div>
          </div>
          <div className='col-lg-6 order-1 order-lg-2'>
            <img src={bannerImage} className='img-fluid animated' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
