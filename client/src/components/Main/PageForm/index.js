import { loginImage } from '../../../assets';
import LoginForm from './LoginForm';
import PredictForm from './PredictForm';
import SignupForm from './SignupForm';

const PageForm = (props) => {
  const { formType } = props;

  /**
   * Decides what form to render
   * @returns form component
   */
  const renderForm = () => {
    if (formType === 'SIGNUP') {
      return <SignupForm />;
    } else if (formType === 'LOGIN') {
      return <LoginForm />;
    } else {
      return <PredictForm />;
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
