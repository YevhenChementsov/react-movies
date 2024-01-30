import PropTypes from 'prop-types';

const Footer = ({ children }) => (
  <footer className="mobile:flex-col flex min-h-16 items-center justify-center gap-1">
    {children}
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
