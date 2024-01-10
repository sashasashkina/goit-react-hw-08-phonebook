import css from './Contacts.module.css';

export const Contacts = ({ items, deleteContact }) => {
  const elements = items.map(({ name, number, id }) => (
    <li className={css.list} key={id}>
      {name}:{number}.
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
export default Contacts;
