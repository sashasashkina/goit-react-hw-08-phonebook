import { useDispatch } from 'react-redux';

import RegisterForm from '../../components/RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };
  return (
    <main>
      <h1>Please Sing Up</h1>
      <RegisterForm onSubmit={handleSignup} />
    </main>
  );
};
export default RegisterPage;
