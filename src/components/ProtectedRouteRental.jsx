// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../context/auth/auth.provider';

// const ProtectedRoute = ({ rentalOnly }) => {
//   const { authanticated, role , userLoading} = useAuth(); // Add isLoading
// console.log(authanticated, role , userLoading, "protected user data");
//   if (userLoading) {
//     return <div>Loading...</div>; // Show loading indicator while checking auth status
//   }

//   if (!authanticated) {
//     return <Navigate to="/login" />;
//   }

//   if ((rentalOnly && role!="rental")  ) {
//     return <Navigate to="/Customer" />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth/auth.provider';

const ProtectedRoute = ({ rentalOnly, customerOnly }) => {
  const { authanticated, role , userLoading} = useAuth(); // Add isLoading
console.log(authanticated, role , userLoading, "protected user data");
  if (userLoading) {
    return <div>Loading...</div>; // Show loading indicator while checking auth status
  }

  if (!authanticated) {
    return <Navigate to="/login" />;
  }

  if (rentalOnly && role !== "rental" && role !== "both") {
    return <Navigate to="/Customer" />;
  }

  if (customerOnly && role !== "customer" && role !== "both") {
    return <Navigate to="/Rental" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
