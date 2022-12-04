import React from 'react';
import './assets/styles/styles.css';

const HowTo = () => {
  return (
    <section id='howTo' class='how-to'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-4 col-md-6'>
            <div class='icon-box'>
              <div class='icon'>
                <i class='bi bi-laptop'></i>
              </div>
              <h4 class='title'>
                <a href='#personalityTest'>Create An Account</a>
              </h4>
              <p class='description'>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
          </div>
          <div class='col-lg-4 col-md-6 mt-4 mt-md-0'>
            <div class='icon-box'>
              <div class='icon'>
                <i class='bi bi-card-checklist'></i>
              </div>
              <h4 class='title'>
                <a href='#personalityTest'>Take The Test</a>
              </h4>
              <p class='description'>
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
          </div>
          <div class='col-lg-4 col-md-6 mt-4 mt-lg-0'>
            <div class='icon-box'>
              <div class='icon'>
                <i class='bi bi-clipboard-data'></i>
              </div>
              <h4 class='title'>
                <a href='#contribute'>Help Us To Improve</a>
              </h4>
              <p class='description'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
