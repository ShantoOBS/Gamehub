import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { router } from './Routes/Routes';
import { RouterProvider } from "react-router";
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import Loading from './Components/Loading/Loading';

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      {loading ? <Loading /> : <RouterProvider router={router} />}
      <ToastContainer />
    </AuthProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
