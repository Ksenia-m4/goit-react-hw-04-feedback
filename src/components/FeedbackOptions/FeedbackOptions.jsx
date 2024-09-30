import PropTypes from "prop-types";
import { Button, Item, List } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option) => {
        return (
          <Item key={option}>
            <Button
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
