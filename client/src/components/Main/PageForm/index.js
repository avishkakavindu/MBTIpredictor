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
    <section id='personalityTest' class='personality-test'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-6'>
            <img src={loginImage} class='img-fluid' alt='' />
          </div>
          {renderForm()}
        </div>
      </div>
    </section>
  );
};

export default PageForm;
