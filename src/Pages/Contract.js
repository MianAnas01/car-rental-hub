// import React from "react";
// import { Link } from "react-router-dom";

// const Contract = ({ vehicleData }) => {
//   // Destructure vehicle data for easier access
//   const { model, brand, ac, seats, licensePlate, transmission, days } =
//     vehicleData;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h1 className="text-3xl font-bold mb-6 text-center">CONTRACT</h1>
//         <spann className="text-center mb-4">
//           By using our website, you agree to the contract.
//         </spann>
//         <div className="flex justify-center mb-6">
//           <img
//             src="/path/to/car-image.jpg"
//             alt="Car"
//             className="w-48 h-32 object-cover"
//           />
//         </div>
//         <div className="text-center space-y-2">
//           <p>
//             Car model: <span className="font-semibold">{model}</span>
//           </p>
//           <p>
//             Brand: <span className="font-semibold">{brand}</span>
//           </p>
//           <p>
//             AC/no AC: <span className="font-semibold">{ac}</span>
//           </p>
//           <p>
//             No. of seats: <span className="font-semibold">{seats}</span>
//           </p>
//           <p>
//             License plate: <span className="font-semibold">{licensePlate}</span>
//           </p>
//           <p>
//             Auto/Manual: <span className="font-semibold">{transmission}</span>
//           </p>
//           <p>
//             No. of Days: <span className="font-semibold">{days}</span>
//           </p>
//         </div>
//         <p className="mt-6 text-center">
//           Customer will be responsible for every kind of damage or issue to the
//           car during rental period.
//         </p>
//         <p className="mt-2 text-center">
//           By pressing the CONFIRM button, you agree to these terms and cannot
//           deny afterwards!
//         </p>
//         <div className="flex justify-center mt-6">
//           <Link to="./Payment">
//             <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
//               CONFIRM
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contract;
