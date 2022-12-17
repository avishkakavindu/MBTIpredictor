import { useState } from 'react';
import { login } from '../../../../services/auth.service';

const LoginForm = (props) => {
  const { setIsAuthenticated } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password).then(
        (response) => {
          console.log(response);
          setIsAuthenticated(true);
          setIsFormValid(true);
        },
        (error) => {
          setIsFormValid(false);
          const { detail } = error.response.data;
          setErrorMessage(detail);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='col-lg-6 pt-4 pt-lg-0 content'>
      <h3>Login</h3>
      <p>Let's login to your account.</p>
      <form onSubmit={handleSubmit}>
        {!isFormValid && (
          <div
            className='alert alert-danger alert-dismissible fade show'
            role='alert'
          >
            <span>{errorMessage}</span>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='alert'
              aria-label='Close'
            ></button>
          </div>
        )}
        <div className='form-floating mb-1'>
          <input
            type='text'
            className={`form-control ${!isFormValid ? 'is-invalid' : ''}`}
            id='email'
            name='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='email'>Email</label>
        </div>

        <div className='form-floating mb-1'>
          <input
            type='password'
            className={`form-control ${!isFormValid ? 'is-invalid' : ''}`}
            id='password1'
            name='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
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
