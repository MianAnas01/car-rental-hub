// import React from 'react';
// import Header from '../components/Header';
// import Rentedvehicle from './Rentedvehicle';
// import Uploadvehicle from "./Uploadvehicle"
// import Profile from './Profile';
// import car2 from '../assets/car2.png';
// import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';

// const Showroom = () => {
//   const Links = [
//     { to: '/Profile', label: 'Profile' },
//     { to: '/Rentedvehicle', label: 'Rented Vehicle' },
//     { to: '/Uploadvehicle', label: 'Upload Vehicle' },

//   ];

//   return (
//     <div>
//       <Header links={Links} />

//  {/* const cars = [
//    {
//     id: 1,
//     image: 'path-to-image', // replace with actual image path
//     name: 'Audi Q3',
//     seats: '4 seaters',
//     ac: 'AC',
//     transmission: 'Automatic',
//     price: '3,000'
//   },
//   // add more car objects here
// ];

//    const [selectedCompany, setSelectedCompany] = useState('');
//  const [selectedType, setSelectedType] = useState('');
//    const [searchText, setSearchText] = useState('');
//    const [priceRange, setPriceRange] = useState([0, 5000]);

//    const handleCompanyChange = (e) => {
//      setSelectedCompany(e.target.value);
//    };

//   const handleTypeChange = (e) => {
//     setSelectedType(e.target.value);
//    };

//    const handleSearchTextChange = (e) => {
//      setSearchText(e.target.value);
//    };

//    const handlePriceChange = (e) => {
//      setPriceRange([0, e.target.value]);
//    };

//  const filteredCars = cars.filter(car =>
//     (selectedCompany === '' || car.company === selectedCompany) &&
//      (selectedType === '' || car.type === selectedType) &&
//      (car.name.toLowerCase().includes(searchText.toLowerCase())) &&
//      (parseInt(car.price.replace(/,/g, '')) <= priceRange[1])
//  ); */}

//     <div className="p-4 bg-gray-200">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold">Right Place Right Time.</h1>
//       </div>
//       <div className="flex justify-center mb-8">
//         <div className="flex space-x-4">
//            <select
//           // value={selectedCompany} onChange={handleCompanyChange}
//           className="p-2 border border-gray-300 rounded">
//             <option value="">Vehicle company</option>
//             {/* Add options for vehicle companies */}
//           </select>

//           <select
//           // value={selectedType} onChange={handleTypeChange}
//           className="p-2 border border-gray-300 rounded">
//             <option value="">Vehicle type</option>
//            {/* Add options for vehicle types  */}
//           </select>
//           <input
//             type="text"
//             // value={searchText}
//             // onChange={handleSearchTextChange}
//             placeholder="Search"
//             className="p-2 border border-gray-300 rounded"
//           />
//           <button className="p-2 bg-black text-white rounded">Search</button>
//         </div>
//       </div>
//       <div className="flex justify-center mb-8">
//         <label className="mr-4">Price:</label>
//         <input
//           type="range"
//           min="0"
//           max="5000"
//           // value={priceRange[1]}
//           // onChange={handlePriceChange}
//           className="slider"
//         />
//         {/* <span className="ml-4">{priceRange[1]}</span> */}
//       </div>

//       <div className="flex items-center justify-center min-h-screen p-4">
//       <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full ">

//         <div className="flex items-center bg-red-500 text-white p-3 mb-4 rounded-lg">
//           <img src={car2} alt="Car" className="w-32 h-auto rounded-lg mr-4" />
//           <div className="flex-1">
//             <h3 className="text-xl font-bold">Audi Q3</h3>
//             <p>4 seaters • AC • Automatic</p>
//           </div>
//           <div className="text-right">
//             <p className="text-xl font-bold">Rs. 3,000</p>
//             <p>per day</p>
//             <Link to="/BookNow">
//               <button className="mt-2 px-4 py-2 bg-gray-500 text-white hover:bg-red-600 rounded-lg">Book Now</button>
//               </Link>
//           </div>
//         </div>

//         <div className="flex items-center bg-red-500 text-white  p-3 mb-4 rounded-lg">
//           <img src={car2} alt="Car" className="w-32 h-auto rounded-lg mr-4" />
//           <div className="flex-1">
//             <h3 className="text-xl font-bold">Audi Q3</h3>
//             <p>4 seaters • AC • Automatic</p>
//           </div>
//           <div className="text-right">
//             <p className="text-xl font-bold">Rs. 3,000</p>
//             <p>per day</p>
//             <Link to="/BookNow">
//               <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-red-600">Book Now</button>
//               </Link>          </div>
//         </div>

//         <div className="flex items-center bg-red-500 text-white  p-3 mb-4 rounded-lg">
//           <img src={car2} alt="Car" className="w-32 h-auto rounded-lg mr-4" />
//           <div className="flex-1">
//             <h3 className="text-xl font-bold">Audi Q3</h3>
//             <p>4 seaters • AC • Automatic</p>
//           </div>
//           <div className="text-right">
//             <p className="text-xl font-bold">Rs. 3,000</p>
//             <p>per day</p>
//             <Link to="/BookNow">
//               <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-red-600">Book Now</button>
//               </Link>          </div>
//         </div>
//       </div>
//     </div>

//     </div>

// <Footer />
//     </div>
//   );
// };

// export default Showroom;

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../context/auth/auth.provider";
import { base_url } from "../config/config";
import BookNow from "./BookNow";

const Showroom = () => {
  const Links = [
    { to: "/Profile", label: "Profile" },
    { to: "/Rentedvehicle", label: "Rented Vehicle" },
    { to: "/Uploadvehicle", label: "Upload Vehicle" },
  ];
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // const fetchVehicles = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await axios.post(
    //       `${base_url}/vehicle/rental/getvehicle`,
    //       { all: "all" }
    //     );

    //     setVehicles(response.data?.vehicles);
    //   } catch (error) {
    //     console.error("Error fetching vehicles:", error.message);
    //     // Handle the error, e.g., display an error message to the user
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `${base_url}/vehicle/rental/getvehicle`,
          { "all": "all" } // Include the 'all' parameter in the request body
        );
    
        setVehicles(response.data?.vehicles);
      } catch (error) {
        console.error("Error fetching vehicles:", error.message);
        // Handle the error, e.g., display an error message to the user
      } finally {
        setLoading(false);
      }
    };
    
    if (user) {
      fetchVehicles();
    }
  }, [user]);

  return (
    <div>
      <Header links={Links} />
      <div className="p-4 bg-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Right Place Right Time.</h1>
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <select
              // value={selectedCompany} onChange={handleCompanyChange}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="">Vehicle company</option>
              {/* Add options for vehicle companies */}
            </select>

            <select
              // value={selectedType} onChange={handleTypeChange}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="">Vehicle type</option>
              {/* Add options for vehicle types  */}
            </select>
            <input
              type="text"
              // value={searchText}
              // onChange={handleSearchTextChange}
              placeholder="Search"
              className="p-2 border border-gray-300 rounded"
            />
            <button className="p-2 bg-black text-white rounded">Search</button>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <label className="mr-4">Price:</label>
          <input
            type="range"
            min="0"
            max="5000"
            // value={priceRange[1]}
            // onChange={handlePriceChange}
            className="slider"
          />
          {/* <span className="ml-4">{priceRange[1]}</span> */}
        </div>

        <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
          <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full">
            <h2 className="text-2xl font-bold mb-4">Available VEHICLES</h2>

            {!loading ? (
              vehicles?.length > 0 &&
              vehicles.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center bg-red-500 text-white p-4 rounded-lg"
                >
                  <img
                    src={item.avatar}
                    alt="Car"
                    className="w-32 h-auto rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.carBrand}</h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.carModel}</h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.noOfSeats}</h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.transmission}</h3>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.address}</h3>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.licensePlate}</h3>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.status}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">{item.rentPerDay}</p>
                    <p>per day</p>
                    <span className="bg-white text-red-500 px-2 py-1 rounded-full mt-2 inline-block">
                      {item.status}
                    </span>
                   
                  </div>
                </div>
              ))
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Showroom;
