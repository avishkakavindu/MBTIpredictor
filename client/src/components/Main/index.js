import React, { useState } from 'react';

import HowTo from './HowTo';
import PageForm from './PageForm';

const Main = () => {
  const [formType, setFormType] = useState('LOGIN');

  /**
   * Decides what form to render based on authenticated user or not
   */
  const handleFormType = () => {
    setFormType('SIGNUP');
  };

  return (
    <main id='main'>
      <HowTo />
      <PageForm formType={formType} />
    </main>
  );
};

export default Main;
