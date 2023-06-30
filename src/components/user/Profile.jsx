import React from 'react'
import { useGetUserQuery } from '../../store/api/userSlice'
import { FaUser } from 'react-icons/fa'



function Profile() {

  const {data: user = []} = useGetUserQuery()

  return (
    <div className="min-h-screen flex flex-row justify-center bg-gray-200">
    <div className="mx-auto rounded-lg mt-20 mb-20 bg-green-300 p-10 shadow md:w-3/4 lg:w-1/2">
      <div className='flex flex-row text-center justify-center m-6'>
        <FaUser   className='text-center align-middle text-cyan-600' size={50} />
      </div>
      <h4 className="mb-10 text-2xl font-bold">Profile</h4>
      <p className="mb-10 text-2xl">Name: {user.name} </p>
      <p className="mb-10 text-2xl">Email: {user.email} </p>
    </div>
  </div>
  )
}

export default Profile