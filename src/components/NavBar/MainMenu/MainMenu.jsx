import { NavLink } from 'react-router-dom';
import css from './MainMenu.module.css';

const MainMenu = () => {
  return (
    <ul className={css.menu}>
      <li>
        <NavLink className={css.link} to="/">
          Home page
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/my-contacts">
          My Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
