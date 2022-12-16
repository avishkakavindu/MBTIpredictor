import React from 'react';
import './assets/styles/styles.css';

import { logo } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  const { setIsSignIn, isAuthenticated } = props;

  const handleClick = (e) => {
    if (e.currentTarget.id === 'login') {
      setIsSignIn(true);
    } else if (e.currentTarget.id === 'signUp') {
      setIsSignIn(false);
    }
  };

  return (
    <header id='header' className='fixed-top'>
      <div className='container align-items-center justify-content-between'>
        <nav className='navbar navbar-expand-lg'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarTogglerDemo01'
              aria-controls='navbarTogglerDemo01'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
              {/* <!-- Text based or logo -->
            <!-- <h1 className="logo"><a href="index.html">MBTIpredictor</a></h1> --> */}
              <a href='index.html' className='logo d-none d-lg-block'>
                <img src={logo} alt='' className='img-fluid' />
              </a>
              <ul className='navbar-nav ms-auto mb-2'>
                <li className='nav-item'>
                  <a className='nav-link active' href='#banner'>
                    <FontAwesomeIcon icon={faHome} />
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#personalityTypes'>
                    MBTI Personalities
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#contribute'>
                    Contribute
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#personalityTest'>
                    Predict
                  </a>
                </li>
              </ul>
              <div className='text-end ms-5 me-md-5'>
                {!isAuthenticated ? (
                  <>
                    <button
                      type='button'
                      className='btn btn-outline-success me-1'
                      id='login'
                      onClick={handleClick}
                    >
                      Login
                    </button>
                    <button
                      type='button'
                      className='btn btn-success'
                      id='signUp'
                      onClick={handleClick}
                    >
                      Sign-up
                    </button>
                  </>
                ) : (
                  <button
                    type='button'
                    className='btn btn-outline-danger me-1'
                    id='logout'
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
