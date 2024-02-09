import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdditionalInfo = ({ title, linkToCast, linkToReviews }) => {
  return (
    <div className="[grid-area:3/1/4/3]">
      <h3>
        <b>{title}</b>
      </h3>
      <ul>
        <li>
          <Link
            className="ml-4 text-blue-600 hover:text-red-400"
            to={linkToCast}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            className="ml-4 text-blue-600 hover:text-red-400"
            to={linkToReviews}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

AdditionalInfo.propTypes = {
  title: PropTypes.string.isRequired,
  linkToCast: PropTypes.string.isRequired,
  linkToReviews: PropTypes.string.isRequired,
};

export default AdditionalInfo;
