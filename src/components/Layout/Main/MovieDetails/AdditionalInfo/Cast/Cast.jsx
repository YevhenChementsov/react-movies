import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  return <div>Cast of the {movieId}</div>;
};

export default Cast;
