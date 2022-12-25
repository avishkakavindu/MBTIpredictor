import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const PredictForm = (props) => {
  const { setText, handleSubmit, isFormValid, errorMessage, isLoading } = props;

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
    </div>
  );
};

export default PredictForm;
