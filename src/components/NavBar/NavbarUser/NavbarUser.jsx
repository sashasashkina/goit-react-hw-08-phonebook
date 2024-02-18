import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';
import { selectUser } from '../../../redux/auth/auth-selectors.js';

import css from './NavbarUser.module.css';

const NavbarUser = () => {
  const { name } = useSelector(selectUser);
  console.log(name);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

  return (
    <div className={css.block}>
      {name}
      <button onClick={onLogout} className={css.logout_button}>
        Logout
      </button>
    </div>
  );
};
export default NavbarUser;
