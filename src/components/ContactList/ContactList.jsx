import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/Contacts/contacts-selectors';
import { deleteContacts } from '../../redux/Contacts/contacts-operations';

export const ContactList = () => {
  const items = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  const elements = items.map(({ id, name, phone }) => (
    <li className={css.list} key={id}>
      {name}:{phone}
      <button
        className={css.button}
        onClick={() => dispatch(deleteContacts(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ol className={css.item}>{elements}</ol>;
};

export default ContactList;
