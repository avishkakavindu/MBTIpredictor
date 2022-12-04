import React from 'react';
import './assets/styles/styles.css';

const Header = () => {
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
                <img
                  src='assets/img/apple-touch-icon.png'
                  alt=''
                  className='img-fluid'
                />
              </a>
              <ul className='navbar-nav ms-auto mb-2'>
                <li className='nav-item'>
                  <a className='nav-link active' href='#banner'>
                    <i className='fas fa-home fa-1x' aria-hidden='true'></i>
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
              <div className='text-end m-5 me-md-5'>
                <button type='button' className='btn btn-outline-success'>
                  Login
                </button>
                <button type='button' className='btn btn-success'>
                  Sign-up
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
