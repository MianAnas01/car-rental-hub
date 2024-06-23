// import React from "react";
// import { Link } from "react-router-dom";

// const BookNow = () => {
//     const [formData, setFormData] = useState({
//       firstName: '',
//       lastName: '',
//       address: '',
//       contactNo: '',
//       email: '',
//       cnic: '',
//       customerId: '',
//       startDate: '',
//       endDate: '',
//     });

//     const handleChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value
//       });
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log(formData);
//       // Add your form submission logic here
//     };

// return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
//       <div className="bg-gray-300 p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">Book Now</h1>
//         <p className="text-center mb-6">
//           Enter your details to continue booking
//         </p>
//         <form
//         // onSubmit={handleSubmit}
//         >
//           <div className="mb-4">
//             <input
//               type="text"
//               name="firstName"
//               // value={formData.firstName}
//               // onChange={handleChange}
//               placeholder="First Name"
//               className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="lastName"
//               // value={formData.lastName}
//               // onChange={handleChange}
//               placeholder="Last Name"
//               className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="address"
//               // value={formData.address}
//               // onChange={handleChange}
//               placeholder="Address"
//               className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="contactNo"
//               // value={formData.contactNo}
//               // onChange={handleChange}
//               placeholder="Contact No."
//               className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               name="email"
//               // value={formData.email}
//               // onChange={handleChange}
//               placeholder="Email Address"
//               className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="cnic"
//               // value={formData.cnic}
//               // onChange={handleChange}
//               placeholder="CNIC"
//               className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <span>From: </span>
//             <input
//               type="text"
//               name="date"
//               // value={formData.destination}
//               // onChange={handleChange}
//               placeholder="Start Date"
//               className="w-2/5 p-2 border rounded focus:outline-none focus:border-blue-500"
//             />
//             <span> To: </span>
//             <input
//               type="text"
//               name="date"
//               // value={formData.destination}
//               // onChange={handleChange}
//               placeholder="End Date"
//               className="w-2/5 p-2 border rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <Link to="./Contract">
//             <button
//               type="submit"
//               className="w-full bg-gray-500 text-black p-2 rounded hover:bg-gray-600"
//             >
//               Next
//             </button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookNow;


import React, { useState } from "react";
import axios from "axios";
import { base_url } from "../config/config";


const BookNow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    contactNo: "",
    email: "",
    cnic: "",
    customerId: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${base_url}/book`, formData);
      console.log(res.data);
    } catch (error) {
      console.error("Error adding new booking:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-gray-300 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Book Now</h1>
        <p className="text-center mb-6">Enter your details to continue booking</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="Contact No."
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              placeholder="CNIC"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <span>From: </span>
            <input
              type="text"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              placeholder="Start Date"
              className="w-2/5 p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <span> To: </span>
            <input
              type="text"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              placeholder="End Date"
              className="w-2/5 p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-black p-2 rounded hover:bg-gray-600"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
