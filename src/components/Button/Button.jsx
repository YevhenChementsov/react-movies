import PropTypes from 'prop-types';

const Button = ({ children, onClick, ...allyProps }) => (
  <button type="button" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

Button.defaultProps = {
  children: null,
  onClick: () => null,
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
