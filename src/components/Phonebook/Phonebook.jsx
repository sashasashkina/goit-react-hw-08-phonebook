import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Phonebook extends Component {
  nameId = nanoid();
  numberId = nanoid();

  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { nameId, numberId, handleSubmit, handleChange } = this;
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.formGroup}>
          <label htmlFor={nameId}>Name</label>
          <input
            className={css.input}
            id={nameId}
            placeholder="Name contacts"
            name="name"
            type="text"
            required
            value={name}
            // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
            // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            onChange={handleChange}
          />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default Phonebook;
