
import React from 'react';
import Header from '../components/Header'; 
import Profile from './Profile'; 
import Uploadvehicle from './Uploadvehicle';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Rental = () => {
  const Links = [
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
      <div>
        {/* {filteredCars.map(car => ( */}
          <div 
          // key={car.id} 
          className="flex justify-between items-center p-4 mb-4 bg-gray-100 rounded-lg shadow">
            {/* <img src={car.image} alt={car.name} className="w-32 h-20 object-cover" /> */}
            <div className="flex-1 ml-4">
              <h2 className="text-xl font-bold">
                {/* {car.name} */}
                </h2>
              {/* <p>{car.seats} | {car.ac} | {car.transmission}</p> */}
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">Rs. 
              {/* {car.price} */}
              </p>
              <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              <Link to="/Booknow">Book Now</Link>
</button>
            </div>
          </div>
       
        {/* } */}
      </div>
    </div>    
    
    <Footer />
    </div>
  );
};

export default Rental;