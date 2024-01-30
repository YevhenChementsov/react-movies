import PropTypes from 'prop-types';

const Header = ({ children }) => (
  <header className="flex min-h-16 items-center shadow-md">{children}</header>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
