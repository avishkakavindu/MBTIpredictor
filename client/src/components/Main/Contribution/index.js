import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './assets/styles/styles.css';

const Contribution = () => {
  return (
    <section id='contribute' className='contribute'>
      <div className='container'>
        <div className='text-center'>
          <h3>Like to contribute?</h3>
          <p>
            If you're willing to contribute to the project feel free to
            communicate via...
          </p>
          <a href='#' className='github'>
            <FontAwesomeIcon icon={faGithub} size='5x' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contribution;
