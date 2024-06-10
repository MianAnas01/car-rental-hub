import React from 'react';
import Header from '../components/Header'; 
import Showroom from './Showroom'; 
import Rentedvehicle from './Rentedvehicle'; 
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Profile = () => {
  const Links = [
    { to: '/Showroom', label: 'Showroom' },
    { to: '/Rentedvehicle', label: 'Rentedvehicle' },

  ];

  return (
    <div>
      <Header links={Links} /> 
        
    
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">EDIT PROFILE</h2>
          <form>
            <div className="mb-4">
              <input type="text" placeholder="First Name" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Last Name" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Contact No" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Email Address" className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <input type="password" placeholder="Password" className="w-full p-2 border rounded-lg" />
            </div>
        <Link to="./Home">    <button type="button" className="w-full  p-3 mb-4  bg-gray-500 text-white rounded-lg">Update Profile</button>
        </Link> <br />
        <Link to="./Home">  <button type="button" className="w-full  p-3 mb-4  bg-gray-500 text-white rounded-lg">Sign Out</button>
          </Link>
           </form>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-red-500 rounded-full w-32 h-32 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0 2c-2.673 0-8 1.34-8 4v2h16v-2c0-2.66-5.327-4-8-4z" /></svg>
          </div>
        </div>
      </div>
    </div>


    <Footer />
    </div>
  );
};

export default Profile;