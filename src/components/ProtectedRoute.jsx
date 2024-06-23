// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import AuthContext from '../context/auth/auth.provider';

// const ProtectedRoute = ({ children }) => {
//   const { authenticated } = useContext(AuthContext);

//   if (!authenticated) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/auth/auth.provider';
import { LoadingContext } from '../context/loading/loading.provider';

const ProtectedRoute = ({ rentalOnly }) => {
  const { authenticated, user  } = useContext(AuthContext); // Add isLoading
console.log(user," user data")

const {loading} = useContext(LoadingContext);
if (loading ) {
  return <div>
    loading...
  </div>
}

if (!authenticated) {
    return <Navigate to="/login" />;
  }

  // if (!user?.isRental && rentalOnly) {
  //   return <Navigate to="/Home" />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;