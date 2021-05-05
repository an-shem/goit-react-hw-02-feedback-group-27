import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const Statistics = ({
  data,
  onTotalFeedback,
  onPositiveFeedbackPercentage,
}) => {
  const { good, neutral, bad } = data;

  return (
    <div className={styles.wrap}>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {onTotalFeedback()}</p>
      <p>
        Positive feedback:
        {onPositiveFeedbackPercentage()}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    onTotalFeedback: PropTypes.func,
    onPositiveFeedbackPercentage: PropTypes.func,
  }),
};

export default Statistics;
