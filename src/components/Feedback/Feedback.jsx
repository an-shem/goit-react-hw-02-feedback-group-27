import { Component } from 'react';
import Statistics from '../Statistics';

import styles from './Feedback.module.scss';
console.log(styles);

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelClick = e => {
    const value = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
    console.log(this.state);
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
        <Statistics data={this.state} />
      </>
    );
  }
}

export default Feedback;
