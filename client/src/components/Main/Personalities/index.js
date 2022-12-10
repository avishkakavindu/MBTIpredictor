import Personality from './Personality';
import './assets/styles/styles.css';
import { personalityFace } from '../../../assets';

const Personalities = () => {
  const payload = [
    {
      id: 1,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 2,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 3,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 4,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 5,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 6,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 7,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 8,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 9,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 10,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 11,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 12,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 13,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 14,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 15,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
    {
      id: 16,
      type: 'INTJ',
      name: 'Architect',
      description:
        'Imaginative and strategic thinker, with a plan for everything',
      path: personalityFace,
    },
  ];

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
          {payload.map((personality, key) => {
            const { type, name, description, path, id } = personality;
            return (
              <Personality
                key={id}
                id={id}
                imagePath={path}
                personality={type}
                personalityName={name}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Personalities;
