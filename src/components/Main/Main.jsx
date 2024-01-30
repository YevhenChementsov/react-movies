import PropTypes from 'prop-types';

const Main = ({ children }) => <main className="p-5">{children}</main>;

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
