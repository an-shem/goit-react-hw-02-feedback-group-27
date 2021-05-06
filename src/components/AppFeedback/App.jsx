import { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notific';

import styles from './App.module.scss';

class App extends Component {
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

  hendelState = () => {
    const arreyState = Object.values(this.state).some(item => item > 0);
    return arreyState;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles.App}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.hendelClick}
          />
        </Section>
        {this.hendelState() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </div>
    );
  }
}

export default App;
