import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const MyContactsPage = lazy(() =>
  import('../Pages/MyContactsPage/MyContactsPage')
);
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="my-contacts" element={<MyContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
