import PropTypes from 'prop-types';

export const Notification = props => {
  return <p>{props.message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
