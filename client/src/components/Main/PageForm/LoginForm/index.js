const LoginForm = () => {
  return (
    <div className='col-lg-6 pt-4 pt-lg-0 content'>
      <h3>Login</h3>
      <p>Let's login to your account.</p>
      <form>
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
          <input
            type='password'
            className='form-control'
            id='password1'
            placeholder='Password'
          />
          <label htmlFor='password1'>Password</label>
        </div>

        <div className='col-12 mt-2'>
          <button className='btn btn-success' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
