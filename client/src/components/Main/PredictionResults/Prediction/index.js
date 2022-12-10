const Prediction = (props) => {
  const { id, text, imagePath, name, mbtiType } = props;

  return (
    <div className='swiper-slide' id={id}>
      <div className='prediction-results-item'>
        <p>
          <box-icon
            type='solid'
            name='quote-alt-left'
            color='#e4e6ea'
          ></box-icon>
          <span className='ms-2'>{text}</span>
          <box-icon
            type='solid'
            name='quote-alt-right'
            color='#e4e6ea'
          ></box-icon>
        </p>
        <img src={imagePath} className='prediction-results-img' alt='' />
        <h3>{name}</h3>
        <h4>{mbtiType}</h4>
      </div>
    </div>
  );
};

export default Prediction;
