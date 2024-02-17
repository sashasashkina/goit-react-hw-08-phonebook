import { Link } from 'react-router-dom';
import MainMenu from './MainMenu/MainMenu';
import css from './NavBar.module.css';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

const NavBar = () => {
  const isLogin = false;
  return (
    <div className={css.navbar}>
      <Link to="/"> Logo</Link>
      <MainMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
  );
};
export default NavBar;
