import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { useDispatch } from 'react-redux';

import { addContacts } from '../../redux/Contacts/contacts-operations';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const Phonebook = () => {
  const dispatch = useDispatch();

  const nameId = nanoid();
  const phoneId = nanoid();
  const [value, setValue] = useState({ ...INITIAL_STATE });

  const onAddContact = data => {
    dispatch(addContacts(data));
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
        <label className={css.title} htmlFor={phoneId}>
          Number
        </label>
        <input
          className={css.input}
          id={phoneId}
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
