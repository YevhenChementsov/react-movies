import { NavLink } from 'react-router-dom';

const setActiveColor = ({ isActive }) => (isActive ? 'text-red-400' : '');

const Header = () => (
  <header className="flex min-h-16 items-center border-b border-solid border-black">
    <nav className="flex gap-2 text-lg">
      <NavLink to="/" className={setActiveColor}>
        Home
      </NavLink>
      <NavLink to="/movies" className={setActiveColor}>
        Movies
      </NavLink>
    </nav>
  </header>
);

export default Header;
