import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLogin } from '../../../redux/auth/auth-selectors';

import menuItems from '../MainMenu/items';
import css from './MainMenu.module.css';

const MainMenu = () => {
  const isLogin = useSelector(selectIsLogin);

  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const element = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={css.link} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={css.menu}>{element}</ul>;
};

export default MainMenu;
