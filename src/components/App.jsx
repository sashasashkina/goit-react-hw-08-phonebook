import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { current } from '../redux/auth/auth-operations';
import AppRoutes from './AppRoutes';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <div>
      <AppRoutes />
    </div>
  );
}
export default App;
