import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <b>404</b>
      <p>Sorry, we couldn&apos;t find that page :(</p>
      <Link to="/">Back Home</Link>
    </main>
  );
};

export default NotFound;
