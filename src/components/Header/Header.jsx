import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/">WatchWave</Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </>
  );
};

export default Header;
