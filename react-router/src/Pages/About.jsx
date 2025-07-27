import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
 <div className=" min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-10 text-center">
      <h2 className="text-4xl font-bold mb-6 text-yellow-400">About This Application</h2>
      <p className="text-lg max-w-2xl mb-4 text-gray-300">
        This application is built using <span className="font-semibold text-white">React Router</span>, a powerful routing library for React applications.
        It enables dynamic and client-side navigation, allowing users to move between different pages without refreshing the entire webpage.
      </p>
      <p className="text-lg max-w-2xl text-gray-300">
        The primary purpose of using React Router is to build seamless single-page applications (SPAs) where routing is handled within the browser.
        It helps in maintaining application state, improving performance, and creating a smooth user experience.
      </p>
    </div>
  )
}

export default About
