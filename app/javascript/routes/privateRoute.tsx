import React from "react";
import { Navigate } from 'react-router-dom'

interface Props {
  component: React.ComponentType
  path?: string
}

const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  const isAuthenticated = localStorage.getItem('token');

  if (isAuthenticated) {
    return <RouteComponent />
  }

  return <Navigate to="/login" />
}

export default PrivateRoute;