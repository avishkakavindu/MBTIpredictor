import React, { useState } from 'react';

import HowTo from './HowTo';
import PageForm from './PageForm';
import Count from './Counts';
import Personalities from './Personalities';
import PredictionResults from './PredictionResults';
import Contribution from './Contribution';
import Creator from './Creator';

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
      <Count />
      <Personalities />
      <PredictionResults />
      <Contribution />
      <Creator />
    </main>
  );
};

export default Main;
