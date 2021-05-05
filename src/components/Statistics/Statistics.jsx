import styles from './Statistics.module.scss';

const Statistics = ({ data }) => {
  const { good, neutral, bad } = data;
  return (
    <div className={styles.wrap}>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default Statistics;
