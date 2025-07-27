import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-700 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Welcome to the <span className="text-yellow-400">React Router</span> Application
      </h1>
      <p className="mt-2 text-lg md:text-xl text-gray-300 max-w-xl">
        This is the home page of our modern and responsive React Router application. Explore the features by navigating through the app.
      </p>
    </div>
  );
};

export default Home;
