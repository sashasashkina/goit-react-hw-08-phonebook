import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/Contacts/contacts-selectors';

import { addContacts } from '../../redux/Contacts/contacts-operations';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

const Phonebook = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectFilteredContacts);
  console.log(items);
  const nameId = nanoid();
  const phoneId = nanoid();
  const [value, setValue] = useState({ ...INITIAL_STATE });

  // const isDuplicate = ({ name, phone }) => {
  //   const normalizedName = name.toLowerCase();
  //   const normalizedPhone = phone.toLowerCase();

  //   const duplicate = items.find(item => {
  //     const normalizedCurrentName = item.name.toLowerCase();
  //     const normalizedCurrentPhone = item.phone.toLowerCase();
  //     return (
  //       normalizedCurrentName === normalizedName &&
  //       normalizedCurrentPhone === normalizedPhone
  //     );
  //   });
  //   return Boolean(duplicate);
  // };
  const onAddContact = data => {
    // if (isDuplicate(data)) {
    //   return alert(`${data.name} is already in contacts.`);
    // }

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

  const { name, phone } = value;
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
          name="phone"
          required
          value={phone}
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
