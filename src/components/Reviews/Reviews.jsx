import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  return <div>Reviews of the {movieId}</div>;
};

export default Reviews;
