const Prediction = (props) => {
  const { id, text, imagePath, name, mbtiType, mbti_name } = props;

  return (
    <div className='swiper-slide' id={id}>
      <div className='prediction-results-item'>
        <div>
          <box-icon
            type='solid'
            name='quote-alt-left'
            color='#e4e6ea'
          ></box-icon>
          <div className='ms-2 text-box'>{text}</div>
          <box-icon
            type='solid'
            name='quote-alt-right'
            color='#e4e6ea'
          ></box-icon>
        </div>
        <img src={imagePath} className='prediction-results-img' alt='' />
        <h3>{name}</h3>
        <h4>
          {mbtiType} the {mbti_name}
        </h4>
      </div>
    </div>
  );
};

export default Prediction;
