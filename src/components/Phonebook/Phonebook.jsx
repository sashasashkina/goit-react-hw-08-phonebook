import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/Contacts/contacts-slice';
// import { getFilteredContacts } from '../../redux/Contacts/contacts-selectors';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const Phonebook = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const nameId = nanoid();
  const numberId = nanoid();
  const [value, setValue] = useState({ ...INITIAL_STATE });

  const isDuplicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const duplicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      const normalizedCurrentNumber = item.number.toLowerCase();
      return (
        normalizedCurrentName === normalizedName &&
        normalizedCurrentNumber === normalizedNumber
      );
    });
    return Boolean(duplicate);
  };
  const onAddContact = data => {
    if (isDuplicate(data)) {
      return alert(`${data.name} is already in contacts.`);
    }
    const action = addContact(data);
    dispatch(action);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValue(preState => ({ ...preState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(value);
    reset();
  };

  const reset = () => {
    setValue({ ...INITIAL_STATE });
  };

  const { name, number } = value;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.formGroup}>
        <label htmlFor={nameId}>Name</label>
        <input
          className={css.input}
          id={nameId}
          placeholder="Name contacts"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className={css.formGroup}>
        <label className={css.title} htmlFor={numberId}>
          Number
        </label>
        <input
          className={css.input}
          id={numberId}
          placeholder="Number contacts"
          type="text"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Phonebook;
