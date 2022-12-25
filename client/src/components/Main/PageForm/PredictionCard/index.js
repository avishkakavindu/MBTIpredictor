import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

import { updatePredict } from '../../../../services/prediction.service';

const PredictionCard = (props) => {
  const {
    predictions,
    isLowAccuracy,
    setFormType,
    alertMessage,
    setAlert,
    isCorrect,
    isPrivate,
    setIsPrivate,
    setIsCorrect,
    mbtiTypes,
  } = props;

  const { id, mbti_types, probabilities, best_mbti_type } = predictions;

  const [isRefresh, setIsRefresh] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  /** Handle hovering animation in refresh icon */
  const handleRefreshHover = () => {
    setIsRefresh(true);
  };

  useEffect(() => {
    /** Alert fade countdown */
    const timer = setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [alertMessage]);

  /** Create payload for isPrivate */
  const handleIsPrivate = async () => {
    const payload = {
      isPrivate,
    };
    await handleUpdate(id, payload);
    setIsPrivate(!isPrivate);
  };

  /** Create payload for wrong prediction */
  const handleWrongPrediction = async (e) => {
    const payload = {
      correct_mbti_type: e.target.value,
      isCorrect: false,
    };
    await handleUpdate(id, payload);
  };

  /** Handle isCorrect, and isPrivate markings */
  const handleUpdate = async (id, payload) => {
    try {
      await updatePredict(id, payload).then(
        (response) => {
          setIsAlertVisible(true);
          setAlert({
            is_success: true,
            detail: 'Record Updated!',
          });
          console.log(alertMessage, isAlertVisible);
        },
        (error) => {
          setIsAlertVisible(true);
          setAlert({
            is_success: false,
            detail: 'Something went wrong!',
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id={id} className='col-lg-6 pt-4 pt-lg-0 content'>
      {alertMessage && isAlertVisible && (
        <div
          className={`alert ${
            alertMessage?.is_success ? 'alert-success' : 'alert-danger'
          } alert-dismissible fade show position-absolute`}
          role='alert'
        >
          <span>{alertMessage.detail}</span>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
          ></button>
        </div>
      )}

      <div className='card mb-3 border-success'>
        <div className='row g-0'>
          <div className='col-3 text-center'>
            <img
              className='img-fluid rounded-start mt-2'
              src={best_mbti_type?.image_male}
              alt='MBTI Type'
              width='100px'
            />
            <h4 className='mt-2 mb-0'>{best_mbti_type?.name}</h4>
            <h6 className='text-muted'>{best_mbti_type?.mbti_display}</h6>
            <p className='text-muted fs-8'>{best_mbti_type?.description}</p>
          </div>
          <div className='col-9'>
            <FontAwesomeIcon
              icon={faRefresh}
              className={`${
                isRefresh ? 'fa-spin text-danger' : ''
              } text-success fa-2x float-end p-2`}
              onMouseOver={handleRefreshHover}
              onMouseOut={() => setIsRefresh(false)}
              onClick={() => {
                setFormType('PREDICT');
              }}
            />
            <div className='card-body mt-5'>
              <h4 className='card-title mb-4'>
                Text is belongs to <strong>{best_mbti_type?.name}</strong>
                {isLowAccuracy && (
                  <span className='badge fs-7 float-end bg-warning'>
                    low accuracy
                  </span>
                )}
              </h4>
              <span className='card-text'>Top 3 predictions:</span>
              <div className='m-auto'>
                <button type='button' className='btn btn-outline-success me-1'>
                  {mbti_types ? mbti_types[0] : 'N/A'}
                  <span className='badge bg-success ms-1'>
                    {`${
                      probabilities
                        ? parseFloat(probabilities[0]).toFixed(2)
                        : '0'
                    }%`}
                  </span>
                </button>
                <button type='button' className='btn btn-outline-success me-1'>
                  {mbti_types ? mbti_types[1] : 'N/A'}
                  <span className='badge bg-warning ms-1'>
                    {`${
                      probabilities
                        ? parseFloat(probabilities[1]).toFixed(2)
                        : '0'
                    }%`}
                  </span>
                </button>
                <button type='button' className='btn btn-outline-success me-1'>
                  {mbti_types ? mbti_types[2] : 'N/A'}
                  <span className='badge bg-danger ms-1'>
                    {`${
                      probabilities
                        ? parseFloat(probabilities[2]).toFixed(2)
                        : '0'
                    }%`}
                  </span>
                </button>
              </div>
              <div className='card-text mt-2 float-end'>
                <div className='form-check pt-2'>
                  <label
                    className='form-check-label fs-7'
                    htmlFor='flexCheckDefault'
                  >
                    Keep it private
                  </label>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                    checked={isPrivate ? true : false}
                    onChange={() => {
                      handleIsPrivate();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <div className='row'>
              <label
                htmlFor='mbti-type'
                className='col-sm-9 p-0 m-auto ps-2 fs-8 text-muted col-form-label'
              >
                Wrong prediction? help us to improve by providing correct type
              </label>
              <div className='col-sm-3'>
                <select
                  className='form-select form-select-sm'
                  aria-label='.form-select-sm example'
                  onChange={handleWrongPrediction}
                >
                  <option defaultValue={17}>Prediction is correct</option>
                  {mbtiTypes.values.map((x, idx) => {
                    return (
                      <option key={idx} value={mbtiTypes.values[idx]}>
                        {mbtiTypes.mbti_types[idx]}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;
