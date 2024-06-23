import React from "react";
import Showroom from "./Showroom";
import Rentedvehicle from "./Rentedvehicle";
import Profile from "./Profile";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BookNow from "./BookNow";
import car2 from "../assets/car2.png";

const Home = () => {
  const Links = [
    { to: "/Profile", label: "Profile" },
    // user?.isCustomer && 
    { to: "/Rentedvehicle", label: "Rentedvehicle" },
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
              className="p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Vehicle company</option>
              <option value="Honda">Honda</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Audi">Audi</option>
            </select>

            <select
              // value={selectedType} onChange={handleTypeChange}
              className="p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Vehicle type</option>
              <option value="Honda">Car</option>
              <option value="Suzuki">Jeep</option>
              <option value="Audi">Wegan</option>
            </select>
            <input
              type="text"
              // value={searchText}
              // onChange={handleSearchTextChange}
              placeholder="Search"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <button className="p-2 bg-white text-black rounded-lg">
              Search
            </button>
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
          {/* <div
           key={car.id}
            className="flex justify-between items-center p-4 mb-4 bg-gray-100 rounded-lg shadow"
          >
          <img src={car.image} alt={car.name} className="w-32 h-20 object-cover" />
            <div className="flex-1 ml-4">
              <h2 className="text-xl font-bold"> {car.name} </h2>
             <p>{car.seats} | {car.ac} | {car.transmission}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">
                Rs.
               {car.price} 
              </p>
              <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                <Link to="/Booknow">Book Now</Link>
              </button>
            </div>
          </div> */}
        </div>

        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full ">
            <div className="flex items-center bg-red-500 text-white p-3 mb-4 rounded-lg">
              <img
                src={car2}
                alt="Car"
                className="w-32 h-auto rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">Audi Q3</h3>
                <p>4 seaters • AC • Automatic</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">Rs. 3,000</p>
                <p>per day</p>
                <Link to="/BookNow">
                  <button className="mt-2 px-4 py-2 bg-gray-500 text-white hover:bg-red-600 rounded-lg">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex items-center bg-red-500 text-white  p-3 mb-4 rounded-lg">
              <img
                src={car2}
                alt="Car"
                className="w-32 h-auto rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">Audi Q3</h3>
                <p>4 seaters • AC • Automatic</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">Rs. 3,000</p>
                <p>per day</p>
                <Link to="/BookNow">
                  <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-red-600">
                    Book Now
                  </button>
                </Link>{" "}
              </div>
            </div>

            <div className="flex items-center bg-red-500 text-white  p-3 mb-4 rounded-lg">
              <img
                src={car2}
                alt="Car"
                className="w-32 h-auto rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">Audi Q3</h3>
                <p>4 seaters • AC • Automatic</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">Rs. 3,000</p>
                <p>per day</p>
                <Link to="/BookNow">
                  <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-red-600">
                    Book Now
                  </button>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
