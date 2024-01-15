import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li className={css.list} key={id}>
      {name}:{number}
      <button
        className={css.button}
        onClick={() => deleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ol className={css.item}>{elements}</ol>;
};

export default ContactList;
