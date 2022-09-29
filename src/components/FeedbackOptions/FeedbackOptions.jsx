import PropTypes from 'prop-types';
import { Item } from './FeedbackOptions.styled';

export const FeedbackOptions = props => {
  const [good, neutral, bad] = props.options;
  return (
    <div>
      <ul>
        <Item>
          <button
            type="button"
            onClick={() => {
              props.onLeaveFeedback(good);
            }}
          >
            Good
          </button>
        </Item>
        <Item>
          <button
            type="button"
            onClick={() => {
              props.onLeaveFeedback(neutral);
            }}
          >
            Neutral
          </button>
        </Item>
        <Item>
          <button
            type="button"
            onClick={() => {
              props.onLeaveFeedback(bad);
            }}
          >
            Bad
          </button>
        </Item>
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
