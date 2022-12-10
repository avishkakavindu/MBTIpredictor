import './assets/styles/styles.css';
import { creatorImage } from '../../../assets';

const Creator = () => {
  return (
    <section id='creator' className='creator section-bg'>
      <div className='container'>
        <div className='section-title'>
          <span>Creator</span>
          <h2>Creator</h2>
          <p>
            Sit sint consectetur velit quisquam cupiditate impedit suscipit
            alias
          </p>
        </div>

        <div className='row'>
          <div className='container d-flex align-items-center justify-content-center'>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch'>
              <div className='member'>
                <img src={creatorImage} alt='' />
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio
                  veritatis perspiciatis quaerat qui aut aut aut
                </p>
                <div className='social'>
                  <a href=''>
                    <i className='bi bi-twitter'></i>
                  </a>
                  <a href=''>
                    <i className='bi bi-facebook'></i>
                  </a>
                  <a href=''>
                    <i className='bi bi-instagram'></i>
                  </a>
                  <a href=''>
                    <i className='bi bi-linkedin'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;
