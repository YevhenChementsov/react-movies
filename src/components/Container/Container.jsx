import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
