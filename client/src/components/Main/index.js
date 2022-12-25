import React, { useState, useEffect } from 'react';

import HowTo from './HowTo';
import PageForm from './PageForm';
import Count from './Counts';
import Personalities from './Personalities';
import PredictionResults from './PredictionResults';
import Contribution from './Contribution';
import Creator from './Creator';

const Main = (props) => {
  const { isSignIn, isAuthenticated, setIsAuthenticated } = props;

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
  }, [isSignIn, isAuthenticated]);

  return (
    <main id='main'>
      <HowTo />
      <PageForm
        formType={formType}
        setFormType={setFormType}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Count />
      <Personalities isAuthenticated={isAuthenticated} />
      <PredictionResults />
      <Contribution />
      <Creator />
    </main>
  );
};

export default Main;
