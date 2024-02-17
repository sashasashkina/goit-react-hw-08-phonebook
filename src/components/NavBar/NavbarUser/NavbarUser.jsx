import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors.js';

import css from './NavbarUser.module.css';

const NavbarUser = () => {
  const { name } = useSelector(selectUser);
  return (
    <div className={css.block}>
      {name}
      <button>Logout</button>
    </div>
  );
};
export default NavbarUser;
