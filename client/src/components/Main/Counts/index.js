import './assets/styles/styles.css';
import CountUp from 'react-countup';

const Count = () => {
  const userCount = 232;
  const numberOfTests = 521;
  const numberOfSuccessfulPredictions = 1463;
  const numberOfPredictions = 15;

  return (
    <section id='counts' className='counts'>
      <div className='container'>
        <div className='row counters'>
          <div className='col-lg-3 col-6 text-center'>
            <CountUp start={0} end={userCount} delay={0}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className='purecounter'></span>
              )}
            </CountUp>
            <p>Users</p>
          </div>

          <div className='col-lg-3 col-6 text-center'>
            <CountUp start={0} end={numberOfTests} delay={0}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className='purecounter'></span>
              )}
            </CountUp>
            <p>Number Of Tests</p>
          </div>

          <div className='col-lg-3 col-6 text-center'>
            <CountUp start={0} end={numberOfSuccessfulPredictions} delay={0}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className='purecounter'></span>
              )}
            </CountUp>
            <p>Number of Successful Predictions</p>
          </div>

          <div className='col-lg-3 col-6 text-center'>
            <CountUp start={0} end={numberOfPredictions} delay={0}>
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
