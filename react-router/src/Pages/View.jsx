import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyUsers } from '../UserData/Users'

const View = () => {
    const [user, setUser] = useState('');
    const {id}= useParams();
    useEffect (() =>{
    const singleuser = dummyUsers.find((user)=> user.id == id)
    setUser(singleuser);
    })
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 border-2'>
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md border-4 border-blue-500">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">User Details</h2>
        <div className="space-y-3 text-lg text-gray-700">
          <p><span className="font-semibold">Username:</span> {user.username}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Phone:</span> {user.phone}</p>
          <p><span className="font-semibold">Location:</span> {user.location}</p>
        </div>
      </div>
    </div>
  )
}

export default View
