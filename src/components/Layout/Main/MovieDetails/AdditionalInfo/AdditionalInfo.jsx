import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdditionalInfo = ({ title, toCast, toReviews }) => {
  return (
    <>
      <h3 className="mt-4">
        <b>{title}</b>
      </h3>
      <ul>
        <li>
          <Link className="ml-4 text-blue-600 hover:text-red-400" to={toCast}>
            Cast
          </Link>
        </li>
        <li>
          <Link
            className="ml-4 text-blue-600 hover:text-red-400"
            to={toReviews}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

AdditionalInfo.propTypes = {
  title: PropTypes.string.isRequired,
  toCast: PropTypes.string.isRequired,
  toReviews: PropTypes.string.isRequired,
};

export default AdditionalInfo;
