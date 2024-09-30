import { Component } from "react";

import { Statistics } from "./components/Statistics/Statistics.jsx";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions.jsx";
import { Section } from "./components/Section/Section.jsx";
import { Notification } from "./components/Notification/Notification.jsx";

import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (feedbackType) => {
    this.setState((prevState) => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  countTotalFeedback() {
    let value = 0;
    for (const key in this.state) {
      value += this.state[key];
    }
    return value;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  }

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ["good", "neutral", "bad"];

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
