import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainMenu from './MainMenu/MainMenu';
import css from './NavBar.module.css';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { selectIsLogin } from '../../redux/auth/auth-selectors';

const NavBar = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <div className={css.navbar}>
      <Link className={css.img} to="/">
        Logo
      </Link>
      <MainMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
  );
};
export default NavBar;
