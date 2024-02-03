import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/Contacts/contacts-selectors';
import { deleteContact } from '../../redux/Contacts/contacts-slice';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();
  const elements = contacts.map(({ id, name, number }) => (
    <li className={css.list} key={id}>
      {name}:{number}
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ol className={css.item}>{elements}</ol>;
};

export default ContactList;
