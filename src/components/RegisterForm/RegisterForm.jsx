import { useState, useId } from 'react';
// import { nanoid } from 'nanoid';
import css from './RegisterForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const [value, setValue] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValue(preState => ({ ...preState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    reset();
  };

  const reset = () => {
    setValue({ ...INITIAL_STATE });
  };

  //   const nameId = useMemo(() => nanoid(), []);
  //   const emailId = useMemo(() => nanoid(), []);
  //     const passwordId = useMemo(() => nanoid(), []);
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, email, password } = value;

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.block}>
        <label htmlFor={nameId}> Name:</label>
        <input
          value={name}
          onChange={handleChange}
          name="name"
          id={nameId}
          required
        />
      </div>
      <div className={css.block}>
        <label htmlFor={emailId}> Email:</label>
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          required
        />
      </div>
      <div className={css.block}>
        <label htmlFor={passwordId}> Password:</label>
        <input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegisterForm;
