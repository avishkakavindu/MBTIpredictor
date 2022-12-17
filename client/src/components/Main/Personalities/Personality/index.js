const Personality = (props) => {
  const { imagePath, personality, personalityName, description, id, refLink } =
    props;

  return (
    <div className='col-lg-3 col-md-6 d-flex align-items-stretch mt-4' id={id}>
      <div className='col icon-box'>
        <div className='icon'>
          <img
            src={imagePath}
            className='img-fluid animated'
            alt={personality}
          />
        </div>
        <h4>
          <a href='{refLink}'>{personalityName}</a>
        </h4>
        <h6>{personality}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Personality;
