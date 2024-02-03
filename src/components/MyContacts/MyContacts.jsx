import css from './MyContacts.module.css';

import { useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import Phonebook from 'components/Phonebook/Phonebook';

import { setFilter } from '../../redux/Filter/filter-slice';

const MyContacts = () => {
  const dispatch = useDispatch();

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
        <ContactList />
      </div>
    </div>
  );
};

export default MyContacts;
