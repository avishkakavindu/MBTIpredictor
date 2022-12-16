import React, { useState, useEffect } from 'react';

import HowTo from './HowTo';
import PageForm from './PageForm';
import Count from './Counts';
import Personalities from './Personalities';
import PredictionResults from './PredictionResults';
import Contribution from './Contribution';
import Creator from './Creator';

const Main = (props) => {
  const { isSignIn, isAuthenticated } = props;

  const [formType, setFormType] = useState('LOGIN');

  /**
   * Decides what form to render based on authenticated user or not
   */
  useEffect(() => {
    if (!isAuthenticated) {
      if (isSignIn) {
        setFormType('LOGIN');
      } else {
        setFormType('SIGNUP');
      }
    } else {
      setFormType('PREDICT');
    }
  }, [isSignIn]);

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
