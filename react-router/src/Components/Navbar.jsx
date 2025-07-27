import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">React Router</h1>
      <div className=' mr-6 space-x-4'>
        <NavLink to='/' className="ml-4 hover:text-amber-300">Home</NavLink>
        <NavLink to='/about' className="ml-4 hover:text-amber-300">About</NavLink>
        <NavLink to='/users' className="ml-4 hover:text-amber-300">Users</NavLink>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
