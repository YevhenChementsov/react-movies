import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="m-[0_auto] grid min-h-screen min-w-[320px] max-w-[1440px] grid-rows-[auto_1fr_auto] px-5">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
