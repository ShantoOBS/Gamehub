import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import Loading from '../Components/Loading/Loading';
import { Navigate, useLocation } from 'react-router';

export default function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Loading />;

  if (user) return children;

  return <Navigate state={location.pathname} to="/login" />;
}
