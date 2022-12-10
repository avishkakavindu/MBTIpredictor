const PredictForm = () => {
  return (
    <div className='col-lg-6 pt-4 pt-lg-0 content'>
      <h3>Test your personality</h3>
      <p>Please fill the following form to test your MBTI personality.</p>
      <form>
        <div className='form-floating mb-1'>
          <textarea
            className='form-control'
            placeholder='Leave a comment here'
            id='userText'
          ></textarea>
          <label htmlFor='userText'>Your text</label>
        </div>

        <div className='col-12 mt-2'>
          <button className='btn btn-success' type='submit'>
            Predict
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictForm;
