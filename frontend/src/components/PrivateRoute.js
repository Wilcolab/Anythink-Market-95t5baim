import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ currentUser, children }) => {
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
// https://stackoverflow.com/questions/69923420/how-to-use-private-route-in-react-router-domv6
