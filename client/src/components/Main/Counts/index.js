import PureCounter from '@srexi/purecounterjs';
import './assets/styles/styles.css';

const Count = () => {
  const pureCounter = new PureCounter();

  return (
    <section id='counts' className='counts'>
      <div className='container'>
        <div className='row counters'>
          <div className='col-lg-3 col-6 text-center'>
            <span
              data-purecounter-start='0'
              data-purecounter-end='232'
              data-purecounter-duration='1'
              className='purecounter'
            ></span>
            <p>Users</p>
          </div>

          <div className='col-lg-3 col-6 text-center'>
            <span
              data-purecounter-start='0'
              data-purecounter-end='521'
              data-purecounter-duration='1'
              className='purecounter'
            ></span>
            <p>Number Of Tests</p>
          </div>

          <div className='col-lg-3 col-6 text-center'>
            <span
              data-purecounter-start='0'
              data-purecounter-end='1463'
              data-purecounter-duration='1'
              className='purecounter'
            ></span>
            <p>Number of Successful Predictions</p>
          </div>

          <div className='col-lg-3 col-6 text-center'>
            <span
              data-purecounter-start='0'
              data-purecounter-end='15'
              data-purecounter-duration='1'
              className='purecounter'
            ></span>
            <p>Number of Failed Predictions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
