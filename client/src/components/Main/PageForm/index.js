import { useState } from 'react';
import { loginImage } from '../../../assets';
import { getMBTITypes } from '../../../services/personality.service';
import { predict } from '../../../services/prediction.service';
import './assets/styles/styles.css';

import LoginForm from './LoginForm';
import PredictForm from './PredictForm';
import PredictionCard from './PredictionCard';
import SignupForm from './SignupForm';

const PageForm = (props) => {
  const { formType, setFormType, setIsAuthenticated } = props;

  const [isFormValid, setIsFormValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [isPrivate, setIsPrivate] = useState(false);
  const [text, setText] = useState('');
  const [predictions, setPredictions] = useState({});
  const [isLowAccuracy, setIsLowAccuracy] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertMessage, setAlert] = useState('');
  const [mbtiTypes, setmbtiTypes] = useState({});

  /**
   * Decides what form to render
   * @returns form component
   */
  const renderForm = () => {
    if (formType === 'SIGNUP') {
      return <SignupForm />;
    } else if (formType === 'LOGIN') {
      return <LoginForm setIsAuthenticated={setIsAuthenticated} />;
    } else if (formType === 'PREDICT_CARD') {
      return (
        <PredictionCard
          predictions={predictions}
          isLowAccuracy={isLowAccuracy}
          isCorrect={isCorrect}
          isPrivate={isPrivate}
          setIsPrivate={setIsPrivate}
          setIsCorrect={setIsCorrect}
          setFormType={setFormType}
          alertMessage={alertMessage}
          setAlert={setAlert}
          mbtiTypes={mbtiTypes}
        />
      );
    } else {
      return (
        <PredictForm
          setText={setText}
          handleSubmit={handleSubmit}
          isFormValid={isFormValid}
          errorMessage={errorMessage}
          isLoading={isLoading}
          predictions={predictions}
          isLowAccuracy={isLowAccuracy}
        />
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsFormValid(true);

    try {
      /** Get mbti types for dropdown */
      await getMBTITypes().then(
        (response) => {
          console.log(response.data);
          setmbtiTypes(response.data);
        },
        (errors) => {
          console.log(errors);
        }
      );
    } catch (error) {
      console.log(error);
    }

    try {
      /** Get predictions */
      await predict(text).then(
        (response) => {
          const { predictions, is_low_accuracy, msg, is_correct, is_private } =
            response.data;
          setPredictions(predictions);
          setIsLowAccuracy(is_low_accuracy);
          setIsCorrect(is_correct);
          setIsPrivate(is_private);
          setFormType('PREDICT_CARD');
          setAlert(msg);
        },
        (error) => {
          setIsFormValid(false);
          setErrorMessage(error.response.data);
        }
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id='personalityTest' className='personality-test'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={loginImage} className='img-fluid' alt='' />
          </div>
          {renderForm()}
        </div>
      </div>
    </section>
  );
};

export default PageForm;
