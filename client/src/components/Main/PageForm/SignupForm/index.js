const SignupForm = () => {
  return (
    <div className='col-lg-6 pt-4 pt-lg-0 content'>
      <h3>Sign-Up</h3>
      <p>Feel free to join our community.</p>
      <form>
        <div className='form-floating mb-1'>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating mb-1'>
          <input
            type='text'
            className='form-control'
            id='username'
            placeholder='Username'
          />
          <label htmlFor='username'>Username</label>
        </div>

        <div className='form-floating mb-1'>
          <select
            className='form-select'
            id='gender'
            aria-label='Floating label select example'
          >
            <option value='0'>male</option>
            <option value='1'>female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating mb-1'>
          <input
            type='password'
            className='form-control'
            id='password1'
            placeholder='Password'
          />
          <label htmlFor='password1'>Password</label>
        </div>

        <div className='form-floating mb-1'>
          <input
            type='password'
            className='form-control'
            id='password2'
            placeholder='Confirm Password'
          />
          <label htmlFor='password2'>Confirm Password</label>
        </div>

        <div className='col-12 mt-2'>
          <button className='btn btn-success' type='submit'>
            Sign-Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
