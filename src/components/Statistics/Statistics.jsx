import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <div>
      <p className={style.text}>
        Good:<span className={style.value}>{good}</span>
      </p>
      <p className={style.text}>
        Neutral:<span className={style.value}>{neutral}</span>
      </p>
      <p className={style.text}>
        Bad:<span className={style.value}>{bad}</span>
      </p>
      <p className={style.text}>
        Total:<span className={style.value}>{totalFeedback}</span>
      </p>
      <p className={style.text}>
        Positive feedback:
        <span className={style.value}>{positiveFeedbackPercentage}%</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
