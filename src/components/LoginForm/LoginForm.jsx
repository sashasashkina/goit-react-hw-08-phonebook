import { useState, useId } from 'react';
// import { nanoid } from 'nanoid';
import css from './LoginForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [value, setValue] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValue(preState => ({ ...preState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...value });
    console.log(value);

    reset();
  };

  const reset = () => {
    setValue({ ...INITIAL_STATE });
  };

  //   const nameId = useMemo(() => nanoid(), []);
  //   const emailId = useMemo(() => nanoid(), []);
  //     const passwordId = useMemo(() => nanoid(), []);

  const emailId = useId();
  const passwordId = useId();

  const { email, password } = value;

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;
