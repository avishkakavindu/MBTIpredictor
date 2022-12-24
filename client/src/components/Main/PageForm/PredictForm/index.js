import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import { predict } from '../../../../services/prediction.service';
import { personalityFace } from '../../../../assets';

const PredictForm = () => {
  const [text, setText] = useState('');
  const [predictions, setPredictions] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsFormValid(true);

    try {
      await predict(text).then(
        (response) => {
          const { predictions, is_low_accuracy } = response.data;
          setPredictions(predictions);
          console.log(predictions);
        },
        (error) => {
          setIsFormValid(false);
          setErrorMessage(error.response.data);
          console.log(error);
        }
      );
      setIsLoading(false);
    } catch (error) {}
  };

  return (
    <div className='col-lg-6 pt-4 pt-lg-0 content'>
      <h3>Test your personality</h3>
      <p>Please fill the following form to test your MBTI personality.</p>
      <form onSubmit={handleSubmit}>
        <div className='form-floating mb-1'>
          <textarea
            className={`txt-height form-control ${
              !isFormValid ? 'is-invalid' : ''
            }`}
            placeholder='Leave a comment here'
            id='userText'
            rows='5'
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <label htmlFor='userText'>Your text</label>
          {!isFormValid && (
            <div id='validationServer05Feedback' className='invalid-feedback'>
              {errorMessage.error}
            </div>
          )}
        </div>

        <div className='col-12 mt-2'>
          <button className='btn btn-success' type='submit'>
            {(isLoading && (
              <FontAwesomeIcon
                icon={faSpinner}
                size='1x'
                className='me-2 fa-spin'
              />
            )) || (
              <FontAwesomeIcon
                icon={faQuestionCircle}
                size='1x'
                className='me-2'
              />
            )}
            Predict
          </button>
        </div>
      </form>
      {predictions.mbti_types && (
        <div className=' my-3 p-5 border rounded'>
          Text is belongs to <strong>{predictions.mbti_types[0]}</strong>
        </div>
      )}

      <div className='card mb-3 border-success'>
        <div className='row g-0'>
          <div className='col-3 p-2'>
            <img
              className='img-fluid rounded-start'
              src={personalityFace}
              alt='mbti_type'
              width='100px'
            />
          </div>
          <div className='col-9'>
            <div className='card-body'>
              <h5 className='card-title'>
                Text is belongs to <strong>INTJ</strong>
              </h5>
              <p className='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className='card-footer'>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictForm;
