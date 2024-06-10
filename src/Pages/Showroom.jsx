import React from 'react';
import Header from '../components/Header'; 
import Rentedvehicle from './Rentedvehicle';
import Uploadvehicle from "./Uploadvehicle" 
import Profile from './Profile';
import car2 from '../assets/car2.png'; 
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Showroom = () => {
  const Links = [
    { to: '/Rentedvehicle', label: 'Rentedvehicle' },
    { to: '/Uploadvehicle', label: 'Uploadvehicle' },
    { to: '/Profile', label: 'Profile' },

  ];

  return (
    <div>
      <Header links={Links} /> 
    
      
 {/* const cars = [ 
   {
    id: 1,
    image: 'path-to-image', // replace with actual image path
    name: 'Audi Q3',
    seats: '4 seaters',
    ac: 'AC',
    transmission: 'Automatic',
    price: '3,000'
  },
  // add more car objects here
];


   const [selectedCompany, setSelectedCompany] = useState('');
 const [selectedType, setSelectedType] = useState('');
   const [searchText, setSearchText] = useState('');
   const [priceRange, setPriceRange] = useState([0, 5000]);

   const handleCompanyChange = (e) => {
     setSelectedCompany(e.target.value);
   };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
   };

   const handleSearchTextChange = (e) => {
     setSearchText(e.target.value);
   };

   const handlePriceChange = (e) => {
     setPriceRange([0, e.target.value]);
   };

 const filteredCars = cars.filter(car => 
    (selectedCompany === '' || car.company === selectedCompany) &&
     (selectedType === '' || car.type === selectedType) &&
     (car.name.toLowerCase().includes(searchText.toLowerCase())) &&
     (parseInt(car.price.replace(/,/g, '')) <= priceRange[1])
 ); */}


 
    <div className="p-4 bg-gray-200">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Right Place Right Time.</h1>
      </div>
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4">
           <select 
          // value={selectedCompany} onChange={handleCompanyChange} 
          className="p-2 border border-gray-300 rounded">
            <option value="">Vehicle company</option>
            {/* Add options for vehicle companies */}
          </select> 
          
          <select 
          // value={selectedType} onChange={handleTypeChange} 
          className="p-2 border border-gray-300 rounded">
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
       
        <div className="flex items-center bg-red-500 text-white  p-3 mb-4 rounded-lg">
          <img src={car2} alt="Car" className="w-32 h-auto rounded-lg mr-4" />
          <div className="flex-1">
            <h3 className="text-xl font-bold">Audi Q3</h3>
            <p>4 seaters • AC • Automatic</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">Rs. 3,000</p>
            <p>per day</p>
            <Link to="/BookNow">
              <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-red-600">Book Now</button>
              </Link>
          </div>
        </div>

        <div className="flex items-center bg-red-500 text-white  p-3 mb-4 rounded-lg">
          <img src={car2} alt="Car" className="w-32 h-auto rounded-lg mr-4" />
          <div className="flex-1">
            <h3 className="text-xl font-bold">Audi Q3</h3>
            <p>4 seaters • AC • Automatic</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">Rs. 3,000</p>
            <p>per day</p>
            <Link to="/BookNow">
              <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-red-600">Book Now</button>
              </Link>          </div>
        </div>

        <div className="flex items-center bg-red-500 text-white  p-3 mb-4 rounded-lg">
          <img src={car2} alt="Car" className="w-32 h-auto rounded-lg mr-4" />
          <div className="flex-1">
            <h3 className="text-xl font-bold">Audi Q3</h3>
            <p>4 seaters • AC • Automatic</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">Rs. 3,000</p>
            <p>per day</p>
            <Link to="/BookNow">
              <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-red-600">Book Now</button>
              </Link>          </div>
        </div> 
      </div>
    </div>

      
    </div>


<Footer />
    </div>
  );
};

export default Showroom;