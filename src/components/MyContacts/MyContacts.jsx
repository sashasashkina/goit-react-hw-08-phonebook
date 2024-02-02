// import { useEffect, useState } from 'react';
// import css from './MyContacts.module.css';
// import { nanoid } from 'nanoid';
// import { ContactList } from 'components/ContactList/ContactList';
// import Phonebook from 'components/Phonebook/Phonebook';

// const MyContacts = () => {
//   const [contacts, setContacts] = useState(
//     () => JSON.parse(localStorage.getItem('my-contacts')) || []
//   );
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('my-contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const isDuplicate = ({ name, number }) => {
//     const normalizedName = name.toLowerCase();
//     const normalizedNumber = number.toLowerCase();

//     const duplicate = contacts.find(item => {
//       const normalizedCurrentName = item.name.toLowerCase();
//       const normalizedCurrentNumber = item.number.toLowerCase();
//       return (
//         normalizedCurrentName === normalizedName &&
//         normalizedCurrentNumber === normalizedNumber
//       );
//     });
//     return Boolean(duplicate);
//   };

//   const addContact = data => {
//     if (isDuplicate(data)) {
//       return alert(`${data.name} is already in contacts.`);
//     }

//     setContacts(prevState => [
//       ...prevState,
//       {
//         id: nanoid(),
//         ...data,
//       },
//     ]);
//   };

//   const deleteContact = id => {
//     setContacts(prevStates => prevStates.filter(item => item.id !== id));
//   };

//   const changeFilter = ({ target }) => {
//     setFilter(target.value);
//   };

//   const getFilterContacts = () => {
//     const normalizedFilter = filter.toLocaleLowerCase();

//     const filteredContacts = contacts.filter(({ name, number }) => {
//       const normalizedName = name.toLocaleLowerCase();
//       const normalizedNumber = number.toLocaleLowerCase();
//       return (
//         normalizedName.includes(normalizedFilter) ||
//         normalizedNumber.includes(normalizedFilter)
//       );
//     });

//     return filteredContacts;
//   };

//   const filteredContacts = getFilterContacts();

//   return (
//     <div className={css.wrapper}>
//       <h2 className={css.title}>Phonebook</h2>
//       <Phonebook onSubmit={addContact} />
//       <h2 className={css.title}>Contacts</h2>
//       <div className={css.listWrapper}>
//         <input
//           onChange={changeFilter}
//           name="filter"
//           placeholder="Find contacts by name"
//         />
//         <ContactList
//           contacts={filteredContacts}
//           deleteContact={deleteContact}
//         />
//       </div>
//     </div>
//   );
// };

// export default MyContacts;

import css from './MyContacts.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import Phonebook from 'components/Phonebook/Phonebook';
import { addContact, deleteContact } from '../../redux/Contacts/contacts-slice';
import { setFilter } from '../../redux/Filter/filter-slice';
import { getFilteredContacts } from '../../redux/Contacts/contacts-selectors';

const MyContacts = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

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

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Phonebook</h2>
      <Phonebook onSubmit={onAddContact} />
      <h2 className={css.title}>Contacts</h2>
      <div className={css.listWrapper}>
        <input
          name="filter"
          onChange={changeFilter}
          placeholder="Find contacts by name"
        />
        <ContactList contacts={contacts} deleteContact={onDeleteContact} />
      </div>
    </div>
  );
};

export default MyContacts;
