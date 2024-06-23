// import React from 'react';
// import { Link } from 'react-router-dom';

// const SignUpForm = () => {

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Handle form submission logic here
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Create An Account</h2>
//         <p className="mb-6 text-center">Create a free account to start using our services for free!</p>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               // value={formData.firstName}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               // value={formData.lastName}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               // value={formData.address}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="contactNumber"
//               placeholder="Contact No."
//               // value={formData.contactNumber}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email Address"
//               // value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               // value={formData.password}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <Link to="/Login">
//         <button
//           // onClick={handleCustomerLogin}
//           className="w-full p-3 mb-4 font-bold text-white bg-gray-400  hover:bg-gray-500 rounded-lg"
//         >
//           SignUp as a customer
//         </button>
//        </Link>

//         <Link to="/Login">
//         <button
//           // onClick={handleRentalLogin}
//           className="w-full p-3 mb-4 font-bold text-white bg-gray-400  hover:bg-gray-500 rounded-lg"
//         >
//           SignUp as a rental
//         </button>
//        </Link>

//         </form>
//         <div className="text-center mt-4">
//           <p className='text-gray-600'>Already have an account? <a href="/login" className="text-black">Login</a></p>
//         </div>
//       </div>
//     </div>

//   );
// }

// export default SignUpForm;

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/auth.provider";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    contact: "",
    email: "",
    password: "",
    role: "", 
  });
  const navigation = useNavigate();

const{signup} = useContext(AuthContext) 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   await signup(formData); 
   navigation("/login")  

    console.log(formData, "form data");
  };

useEffect(()=> {
const token = localStorage.getItem("token")
console.log(token, "token")
if(token){
navigation("/Home")
}
}, [])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create An Account
        </h2>
        <p className="mb-6 text-center">
          Create a free account to start using our services for free!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="contact"
              placeholder="Contact No."
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            onClick={() =>
              handleChange({
                target: {
                  name: "role",
                  value: "customer",
                },
              })
            }
            className="w-full p-3 mb-4 font-bold text-white bg-gray-400  hover:bg-gray-500 rounded-lg"
          >
            SignUp as a customer
          </button>

          <button
            type="submit"
            onClick={() =>
              handleChange({
                target: {
                  name: "role",
                  value: "rental",
                },
              })
            }
            className="w-full p-3 mb-4 font-bold text-white bg-gray-400  hover:bg-gray-500 rounded-lg"
          >
            SignUp as a rental
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-black">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
