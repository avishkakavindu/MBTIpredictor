const LoginForm = () => {
  return (
    <div class='col-lg-6 pt-4 pt-lg-0 content'>
      <h3>Login</h3>
      <p>Let's login to your account.</p>
      <form>
        <div class='form-floating mb-1'>
          <input
            type='text'
            class='form-control'
            id='username'
            placeholder='Username'
          />
          <label for='username'>Username</label>
        </div>

        <div class='form-floating mb-1'>
          <input
            type='password'
            class='form-control'
            id='password1'
            placeholder='Password'
          />
          <label for='password1'>Password</label>
        </div>

        <div class='col-12 mt-2'>
          <button class='btn btn-success' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
