import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

import { getPredictionCounts } from '../../../services/prediction.service';

import './assets/styles/styles.css';

const Count = () => {
  const [counts, setCounts] = useState({});

  // on load
  useEffect(() => {
    getPredictionCounts().then(
      (response) => {
        setCounts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <section id='counts' className='counts'>
      <div className='container'>
        <div className='row counters'>
          <div className='col-lg-3 col-6 text-center'>
            <CountUp start={0} end={counts.user_count} delay={0}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className='purecounter'></span>
              )}
            </CountUp>
            <p>Users</p>
          </div>

          <div className='col-lg-3 col-6 text-center'>
            <CountUp start={0} end={counts.number_of_predictions} delay={0}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className='purecounter'></span>
              )}
            </CountUp>
            <p>Number Of Tests</p>
          </div>

          <div className='col-lg-3 col-6 text-center'>
            <CountUp
              start={0}
              end={counts.successful_prediction_count}
              delay={0}
            >
              {({ countUpRef }) => (
                <span ref={countUpRef} className='purecounter'></span>
              )}
            </CountUp>
            <p>Number of Successful Predictions</p>
          </div>

          <div className='col-lg-3 col-6 text-center'>
            <CountUp
              start={0}
              end={counts.unsuccessful_prediction_count}
              delay={0}
            >
              {({ countUpRef }) => (
                <span ref={countUpRef} className='purecounter'></span>
              )}
            </CountUp>
            <p>Number of Failed Predictions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
