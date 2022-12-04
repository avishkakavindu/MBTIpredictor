const SignupForm = () => {
  return (
    <div class='col-lg-6 pt-4 pt-lg-0 content'>
      <h3>Sign-Up</h3>
      <p>Feel free to join our community.</p>
      <form>
        <div class='form-floating mb-1'>
          <input
            type='email'
            class='form-control'
            id='email'
            placeholder='name@example.com'
          />
          <label for='email'>Email address</label>
        </div>

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
          <select
            class='form-select'
            id='gender'
            aria-label='Floating label select example'
          >
            <option value='0'>male</option>
            <option value='1'>female</option>
          </select>
          <label for='gender'>Gender</label>
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

        <div class='form-floating mb-1'>
          <input
            type='password'
            class='form-control'
            id='password2'
            placeholder='Confirm Password'
          />
          <label for='password2'>Confirm Password</label>
        </div>

        <div class='col-12 mt-2'>
          <button class='btn btn-success' type='submit'>
            Sign-Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
