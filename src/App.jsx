import { useReducer } from "react";

import { Statistics } from "./components/Statistics/Statistics.jsx";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions.jsx";
import { Section } from "./components/Section/Section.jsx";
import { Notification } from "./components/Notification/Notification.jsx";

import "./App.css";

// Вынесение редьюсера за пределы компонента предотвращает создание новой функции при каждом рендере
const feedbackReducer = (state, action) => {
  switch (action.type) {
    case "good":
      return { ...state, good: state.good + action.payload };

    case "neutral":
      return { ...state, neutral: state.neutral + action.payload };

    case "bad":
      return { ...state, bad: state.bad + action.payload };

    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
};

const App = () => {
  const [state, dispatch] = useReducer(feedbackReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (feedbackType) => {
    dispatch({ type: feedbackType, payload: 1 });
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositivePercentage = () => {
    countTotalFeedback();
    return total > 0 ? Math.round((state.good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const options = ["good", "neutral", "bad"];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={countPositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;

// const [good, setGood] = useState(0);
// const [neutral, setNeutral] = useState(0);
// const [bad, setBad] = useState(0);

// const onLeaveFeedback = (feedbackType) => {
//   switch (feedbackType) {
//     case "good":
//       setGood((state) => state + 1);
//       break;

//     case "neutral":
//       setNeutral((state) => state + 1);
//       break;

//     case "bad":
//       setBad((state) => state + 1);
//       break;

//     default:
//       break;
//   }
// };
