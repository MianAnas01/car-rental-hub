import React from 'react';
import Header from '../components/Header'; 
import Profile from './Profile';
import Showroom from './Showroom';
import car2 from "../assets/car2.png";
import Footer from '../components/Footer';

const Rentedvehicle = () => {
  const Links = [
    { to: '/Showroom', label: 'Showroom' },
    { to: '/Profile', label: 'Profile' },

  ];

      const Rentedvehicle = [
    {
      id: 1,
      model: 'Audi Q3',
      seats: '4 seaters',
      ac: 'AC',
      transmission: 'Automatic',
      price: 'Rs. 3,000',
      status: 'ACTIVE',
      rentedOn: '15 January, 2024',
      deliverable: '23 January, 2024'
    },
    {
      id: 2,
      model: 'Audi Q3',
      seats: '4 seaters',
      ac: 'AC',
      transmission: 'Automatic',
      price: 'Rs. 3,000',
      status: 'ACTIVE',
      rentedOn: '11 January, 2024',
      deliverable: '22 January, 2024'
    },
    {
      id: 3,
      model: 'Audi Q3',
      seats: '4 seaters',
      ac: 'AC',
      transmission: 'Automatic',
      price: 'Rs. 3,000',
      status: 'ACTIVE',
      rentedOn: '12 January, 2024',
      deliverable: '26 January, 2024'
    }
  ];


  return (
    <div>
      <Header links={Links} /> 

    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4">RENTED VEHICLES</h2>
        <p className="mb-6">Your vehicles which you rented from the site.</p>
        {Rentedvehicle.map(vehicle=> (
          <div key={vehicle.id} className="flex items-center bg-lime-400 text-black p-4 rounded-lg mb-4">
            <img src={car2} alt="Car" className="w-32 h-auto rounded-lg mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-bold">{vehicle.model}</h3>
              <p>{vehicle.seats} • {vehicle.ac} • {vehicle.transmission}</p>
              <p className="mt-2">Rented on: {vehicle.rentedOn}</p>
              <p>Deliverable: {vehicle.deliverable}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">{vehicle.price}</p>
              <p>per day</p>
              <span className="bg-white text-black px-2 py-1 rounded-full mt-2 inline-block">{vehicle.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>    
    <Footer />
    </div>    
    
  );
};

export default Rentedvehicle;