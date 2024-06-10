// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = ({ links = [] }) => {
  return (
    <header className="flex p-4 sticky top-0 ">
    <div className="hidden md:flex space-x-4">
      
    <Link to="/Home">
            <img src={logo} alt="Logo" className="w-25 h-10"/>
          </Link>
  </div>

      <nav className="flex items-center "> 
       
        <div className="flex space-x-4">
          {links.map((link, index) => (
       <Link key={index} to={link.to} className="text-black px-3 py-2 font-bold text-xl leading-tight tracking-wide rounded-lg opacity-70">
        <h1>{link.label}</h1> </Link>  
 
           ))}
        </div>
       
      </nav>
    </header>
  );
};

export default Header;
