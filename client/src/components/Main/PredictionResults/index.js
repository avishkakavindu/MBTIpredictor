import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'boxicons';
import 'swiper/css/bundle';

import './assets/styles/styles.css';
import { personalityFace, unknownFace } from '../../../assets';
import Prediction from './Prediction';

import { getRandomPredictions } from '../../../services/prediction.service';

const PredictionResults = () => {
  // const predictions = [
  //   {
  //     id: 1,
  //     text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  //     imagePath: personalityFace,
  //     name: 'Saul Goodman',
  //     mbtiType: 'ESTJ the Executive',
  //   },
  //   {
  //     id: 2,
  //     text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  //     imagePath: personalityFace,
  //     name: 'Saul Goodman',
  //     mbtiType: 'ESTJ the Executive',
  //   },
  //   {
  //     id: 3,
  //     text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  //     imagePath: personalityFace,
  //     name: 'Saul Goodman',
  //     mbtiType: 'ESTJ the Executive',
  //   },
  //   {
  //     id: 4,
  //     text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  //     imagePath: personalityFace,
  //     name: 'Saul Goodman',
  //     mbtiType: 'ESTJ the Executive',
  //   },
  //   {
  //     id: 5,
  //     text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  //     imagePath: personalityFace,
  //     name: 'Saul Goodman',
  //     mbtiType: 'ESTJ the Executive',
  //   },
  //   {
  //     id: 6,
  //     text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  //     imagePath: personalityFace,
  //     name: 'Saul Goodman',
  //     mbtiType: 'ESTJ the Executive',
  //   },
  // ];

  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    getRandomPredictions().then(
      (response) => {
        setPredictions(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <section id='predictionResults' className='prediction-results section-bg'>
      <div className='container'>
        <div className='section-title'>
          <span>Prediction Results</span>
          <h2>Prediction Results</h2>
          <p>Some of user personality type results that is being predicted.</p>
        </div>

        <div
          className='prediction-results-slider swiper'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <Swiper
            spaceBetween={20}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              // when window width is >= 576px (sm)
              576: {
                slidesPerView: 1,
              },
              // when window width is >= 768px (md)
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 992px (lg)
              992: {
                spaceBetween: 10,
                slidesPerView: 3,
              },
            }}
          >
            {predictions.map((prediction, idx) => {
              const { id, user, text, date_created, mbti_type } = prediction;
              let imagePath = user.mbti_type?.image_male;
              if (user.gender === 1) {
                // female
                imagePath = user.mbti_type?.image_female;
              }
              return (
                <SwiperSlide key={idx}>
                  <Prediction
                    id={id}
                    text={text}
                    imagePath={imagePath ? imagePath : unknownFace}
                    name={user.full_name}
                    mbtiType={mbti_type.mbti_display}
                    mbti_name={mbti_type.name}
                    date_created={format(
                      new Date(date_created),
                      'yyyy/MM/dd kk:mm:ss  '
                    )}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PredictionResults;
