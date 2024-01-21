import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import { useState } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const Phonebook = ({ onSubmit }) => {
  const nameId = nanoid();
  const numberId = nanoid();
  const [value, setValue] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValue(preState => ({ ...preState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
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

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import css from './Phonebook.module.css';

// const Phonebook = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const nameId = nanoid();
//   const numberId = nanoid();

//   const handleChange = event => {
//     const { name, value } = event.currentTarget;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     onSubmit({ name, number });
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <div className={css.formGroup}>
//         <label htmlFor={nameId}>Name</label>
//         <input
//           className={css.input}
//           id={nameId}
//           placeholder="Name contacts"
//           name="name"
//           type="text"
//           required
//           value={name}
//           // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           onChange={handleChange}
//         />
//       </div>
//       <div className={css.formGroup}>
//         <label className={css.title} htmlFor={numberId}>
//           Number
//         </label>
//         <input
//           className={css.input}
//           id={numberId}
//           placeholder="Number contacts"
//           type="text"
//           name="number"
//           required
//           value={number}
//           // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//           onChange={handleChange}
//         />
//       </div>
//       <button className={css.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

// export default Phonebook;
