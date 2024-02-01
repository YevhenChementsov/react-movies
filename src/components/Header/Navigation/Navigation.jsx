import { NavLink } from 'react-router-dom';

const setActiveColor = ({ isActive }) => (isActive ? 'text-red-400' : '');

const Navigation = () => {
  return (
    <>
      <nav className="flex gap-2 text-lg">
        <NavLink to="/" className={setActiveColor}>
          Home
        </NavLink>
        <NavLink to="/movies" className={setActiveColor}>
          Movies
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
