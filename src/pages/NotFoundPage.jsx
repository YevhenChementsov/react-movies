import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <b>404</b>
      <p>Sorry, we couldn&#39;t find that page &#58;&#40;</p>
      <Link to="/">Back Home</Link>
    </main>
  );
};

export default NotFoundPage;
