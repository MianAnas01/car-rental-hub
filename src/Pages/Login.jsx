// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');

//   // const handleEmailChange = (e) => setEmail(e.target.value);
//   // const handlePasswordChange = (e) => setPassword(e.target.value);

//   // const handleCustomerLogin = () => {
//   //   // Handle customer login logic
//   //   console.log('Customer Login:', { email, password });
//   // };

//   // const handleRentalLogin = () => {
//   //   // Handle rental login logic
//   //   console.log('Rental Login:', { email, password });
//   // };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-200">
//       <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <p className="mb-6 text-center">Please enter your details below to continue</p>
//         <input
//           type="email"
//           placeholder="Enter Email Address"
//           // value={email}
//           // onChange={handleEmailChange}
//           className="w-full p-3 mb-4 border rounded-lg"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           // value={password}
//           // onChange={handlePasswordChange}
//           className="w-full p-3 mb-4 border rounded-lg"
//         />
//            <Link to="/Home">
//           <button
//           // onClick={handleCustomerLogin}
//           className="w-full p-3 mb-4 font-bold text-white bg-gray-400  hover:bg-gray-500 rounded-lg"
//         >
//           Login 
//         </button>
//         </Link>
//         <div className="text-center text-gray-600" >
//           <span>Don't have an account? </span>
//           <a href="/signup" className="text-black">Sign up</a>
//         </div>
//       </div>
//       </div>

//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/user/login', { email, password });
      // Assuming response.data contains the token and user information
      console.log('Login Successful:', response.data);
      // Redirect or do something else on successful login
    } catch (error) {
      console.error('Login Failed:', error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <p className="mb-6 text-center">Please enter your details below to continue</p>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full p-3 mb-4 font-bold text-white bg-gray-400 hover:bg-gray-500 rounded-lg"
        >
          Login
        </button>
        <div className="text-center text-gray-600">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-black">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
