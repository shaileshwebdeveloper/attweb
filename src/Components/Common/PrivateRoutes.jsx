import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {

    
  const isAuth = false

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }
  return children;
}

