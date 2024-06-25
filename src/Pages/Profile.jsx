import React, { useContext, useState } from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { base_url } from '../config/config';
import { AuthContext } from '../context/auth/auth.provider';

const Profile = () => {
const {user} = useContext(AuthContext)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNo: '',
    emailAddress: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${base_url}/user/editProfile/${user._id}`, formData);
      console.log(res.data); // Handle success response as needed
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error response here
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">EDIT PROFILE</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <input type="text" name="contactNo" value={formData.contactNo} onChange={handleInputChange} placeholder="Contact No" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <input type="text" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} placeholder="Email Address" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" className="w-full p-2 border rounded-lg" />
              </div>
              <button type="submit" className="w-full p-3 mb-4 bg-gray-500 text-white rounded-lg">Update Profile</button>
              <br />
             
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
