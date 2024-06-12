import React from "react";
import Header from "../components/Header";
import Showroom from "./Showroom";
import Profile from "./Profile";
import car2 from "../assets/car2.png";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Uploadvehicle = () => {
  const Links = [
    { to: "/Showroom", label: "Showroom" },
    { to: "/Profile", label: "Profile" },
  ];

  return (
    <div>
      <Header links={Links} />

      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">UPLOAD VEHICLE</h2>
            <p className="mb-6">Upload information about your vehicle.</p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  name="brand"
                  placeholder="Car Brand"
                  // value={formData.brand} onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="model"
                  placeholder="Car Model"
                  // value={formData.model} onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="seats"
                  placeholder="How many seats?"
                  // value={formData.seats} onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="manual"
                  placeholder="Manual/Auto"
                  // value={formData.manual} onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="rent"
                  placeholder="Rent per day/per week in PKR"
                  // value={formData.rent} onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="location"
                  placeholder="Car location"
                  // value={formData.location} onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="License Plate"
                  placeholder="License Plate Number"
                  // value={formData.location} onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <button
                type="button"
                // onClick={handleSubmit}
                className="w-full p-2 bg-gray-500 text-white rounded-lg"
              >
                {/* <Link to="YourVehivle">    */}
                Upload
                {/* </Link>  */}
              </button>
            </form>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-red-500 rounded-full w-32 h-32 flex items-center justify-center">
              <p className="text-white mt-2">upload image</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-4">YOUR VEHICLES</h2>
          <p className="mb-6">Your vehicles that you uploaded on site.</p>
          <div className="flex items-center bg-red-500 text-white p-4 rounded-lg">
            <img src={car2} alt="Car" className="w-32 h-auto rounded-lg mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-bold">Audi Q3</h3>
              <p>4 seaters • AC • Automatic</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">Rs. 3,000</p>
              <p>per day</p>
              <span className="bg-white text-red-500 px-2 py-1 rounded-full mt-2 inline-block">
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-4">BOOKING REQUESTS</h2>
          <div className="flex items-center bg-blue-500 text-white p-4 rounded-lg">
            <img src={car2} alt="Car" className="w-32 h-auto rounded-lg mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-bold">Audi Q3</h3>
              <p>4 seaters • AC • Automatic</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">Rs. 3,000</p>
              <p>per day</p>
              <span className="bg-red-500 px-2 py-1 rounded-full mt-2 inline-block mr-2">
                Decline
              </span>
              <span className="bg-green-500 px-2 py-1 rounded-full mt-2 inline-block">
                Accept
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Uploadvehicle;
