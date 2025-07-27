import React from 'react'
import { dummyUsers } from '../UserData/Users'
import { useNavigate } from 'react-router-dom'

const Userlist = () => {
  const navigate = useNavigate();
    const handleUserClick = (id) => {
        navigate(`/users/${id}`);
    };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">User List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyUsers.map(user => (
          <div
            key={user.id} onClick={()=> handleUserClick(user.id)}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">@{user.username}</h3>
            <p className="text-gray-600"><span className="font-semibold">Email:</span> {user.email}</p>
            <p className="text-gray-600"><span className="font-semibold">Phone:</span> {user.phone}</p>
            <p className="text-gray-600"><span className="font-semibold">Location:</span> {user.location}</p>
            <button onClick={() => handleUserClick(user.id)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Userlist
