const PredictForm = () => {
  return (
    <div class='col-lg-6 pt-4 pt-lg-0 content'>
      <h3>Test your personality</h3>
      <p>Please fill the following form to test your MBTI personality.</p>
      <form>
        <div class='form-floating mb-1'>
          <textarea
            class='form-control'
            placeholder='Leave a comment here'
            id='userText'
          ></textarea>
          <label for='userText'>Your text</label>
        </div>

        <div class='col-12 mt-2'>
          <button class='btn btn-success' type='submit'>
            Predict
          </button>
        </div>
      </form>
    </div>
  );
};

export default PredictForm;
