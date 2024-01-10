import { Component } from 'react';
import css from './MyContacts.module.css';
import { nanoid } from 'nanoid';
import Contacts from 'components/Contacts/Contacts';
import Phonebook from 'components/Phonebook/Phonebook';

class MyContacts extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  isDuplicate({ name, number }) {
    const { contacts } = this.state;
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
  }

  addContact = data => {
    if (this.isDuplicate(data)) {
      return alert(`${data.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };

      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  changeFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  getFilterContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      return (
        normalizedName.includes(normalizedFilter) ||
        normalizedNumber.includes(normalizedFilter)
      );
    });

    return filteredContacts;
  }
  render() {
    const { addContact, deleteContact, changeFilter } = this;
    const contacts = this.getFilterContacts();

    return (
      <div className={css.wrapper}>
        <h2 className={css.title}>Phonebook</h2>
        <Phonebook onSubmit={addContact} />
        <h2 className={css.title}>Contacts</h2>
        <div className={css.listWrapper}>
          <input
            onChange={changeFilter}
            name="filter"
            placeholder="Find contacts by name"
          />
          <Contacts items={contacts} deleteContact={deleteContact} />
        </div>
      </div>
    );
  }
}
export default MyContacts;
