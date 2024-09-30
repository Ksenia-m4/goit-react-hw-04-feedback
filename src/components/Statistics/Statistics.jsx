import PropTypes from "prop-types";
import { Paragraph } from "./Statistics.styled";

export const Statistics = ({
  good,
  positivePercentage,
  neutral,
  total,
  bad,
}) => {
  return (
    <>
      <Paragraph>Good: {good}</Paragraph>
      <Paragraph>Neutral: {neutral}</Paragraph>
      <Paragraph>Bad: {bad}</Paragraph>
      <Paragraph>Total: {total} </Paragraph>
      <Paragraph>Positive feedback: {positivePercentage}%</Paragraph>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};
