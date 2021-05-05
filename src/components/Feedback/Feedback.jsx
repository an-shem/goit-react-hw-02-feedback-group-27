import { Component } from 'react';
import Statistics from '../Statistics';

import styles from './Feedback.module.scss';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const countPositiveFeedback = Math.round(
      (good * 100) / this.countTotalFeedback(),
    );
    const positiveFeedback = Number.isNaN(countPositiveFeedback)
      ? 0
      : countPositiveFeedback;
    return positiveFeedback;
  };

  hendelClick = e => {
    const value = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <div className={styles.wrapper}>
          <button type="button" value="good" onClick={this.hendelClick}>
            Good
          </button>
          <button type="button" value="neutral" onClick={this.hendelClick}>
            Neutral
          </button>
          <button type="button" value="bad" onClick={this.hendelClick}>
            Bad
          </button>
        </div>
        <Statistics
          data={this.state}
          onTotalFeedback={this.countTotalFeedback}
          onPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}

export default Feedback;
