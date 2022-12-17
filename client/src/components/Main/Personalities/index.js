import Personality from './Personality';
import './assets/styles/styles.css';
import { personalityFace } from '../../../assets';
import { getPersonalities } from '../../../services/personality.service';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../../../services/auth.service';

const Personalities = (props) => {
  // const payload = [
  //   {
  //     id: 1,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 2,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 3,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 4,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 5,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 6,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 7,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 8,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 9,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 10,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 11,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 12,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 13,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 14,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 15,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  //   {
  //     id: 16,
  //     type: 'INTJ',
  //     name: 'Architect',
  //     description:
  //       'Imaginative and strategic thinker, with a plan for everything',
  //     path: personalityFace,
  //   },
  // ];

  const { isAuthenticated } = props;

  const [personalities, setPersonalities] = useState([]);
  const [gender, setGender] = useState(0); // 0 == male

  // on load
  useEffect(() => {
    getPersonalities(gender).then(
      (response) => {
        setPersonalities(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  // if is authenticated based gender
  useEffect(() => {
    if (isAuthenticated) {
      getCurrentUser().then((response) => {
        setGender(response.gender);
      });
    }
  }, [isAuthenticated]);

  return (
    <section id='personalityTypes' className='personalities section-bg'>
      <div className='container'>
        <div className='section-title'>
          <span>MBTI Personalities</span>
          <h2>MBTI Personalities</h2>
          <p>
            The Myers-Briggs Personality Type Indicator is a self-report
            inventory designed to identify a person's personality type,
            strengths, and preferences. Learn more about different personality
            types.
          </p>
        </div>

        <div className='row'>
          {personalities.map((personality, idx) => {
            const {
              id,
              name,
              description,
              image_male,
              image_female,
              mbti_display,
              ref_link,
            } = personality;
            return (
              <Personality
                key={idx}
                id={id}
                imagePath={gender === 0 ? image_male : image_female}
                personality={mbti_display}
                personalityName={name}
                description={description}
                refLink={ref_link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Personalities;
