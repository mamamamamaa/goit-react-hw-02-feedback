import PropTypes from 'prop-types';
import { Item } from './FeedbackOptions.styled';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul>
        {options &&
          options.map(option => (
            <Item key={option}>
              <button
                type="button"
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {capitalize(option)}
              </button>
            </Item>
          ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
