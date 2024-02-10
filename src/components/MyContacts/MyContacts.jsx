import { useEffect } from 'react';
import css from './MyContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import Phonebook from 'components/Phonebook/Phonebook';
import { selectAllContacts } from '../../redux/Contacts/contacts-selectors';
import { setFilter } from '../../redux/Filter/filter-slice';
import { fetchContacts } from '../../redux/Contacts/contacts-operations';

const MyContacts = () => {
  const { items, isLoading, error } = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Phonebook</h2>
      <Phonebook />
      <h2 className={css.title}>Contacts</h2>
      <div className={css.listWrapper}>
        <input
          name="filter"
          onChange={changeFilter}
          placeholder="Find contacts by name"
        />
        {isLoading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {Boolean(items.length) && <ContactList />}
      </div>
    </div>
  );
};

export default MyContacts;
