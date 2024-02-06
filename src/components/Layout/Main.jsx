import PropTypes from 'prop-types';

const Main = ({ children }) => <main className="my-4">{children}</main>;

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
