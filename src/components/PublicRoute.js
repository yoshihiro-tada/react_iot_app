import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PublicRoute = () => {
  const { user } = useAuthContext();
  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;