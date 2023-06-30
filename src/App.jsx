
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import Notes from "./components/Notes";
import EditNote from "./components/EditNote";
import AddNote from "./components/AddNote";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import React from "react";

import PrivateRoute from "./PrivateRoute";

function App() {
const [uInfo , setUInfo] =  useState();
const navigate = useNavigate()

useEffect(() => {
 const token = Cookies.get('token')
  if(token) {
    setUInfo(token)
  }

}, [uInfo])

const handleLogout = () => {
  try{
    Cookies.remove('token')
    setUInfo(null)
    window.location.reload()
    navigate('user/login')
  }
  catch (error) {
    console.log('LogOut error', error);
  } 
}

  return (
    <div className="bg-white ">
      <header className="bg-blue-500 py-10">
        <nav className="h-full">
          <div className="container mx-auto flex justify-between items-center">
            <h3 className="text-2xl font-bold">Gabi Notes</h3>
            <ul className="hidden md:flex space-x-6">
            <li>
                <Link
                  to="/"
                  className="bg-black px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                >
                  Home
                </Link>
              </li>
            {uInfo && (
               <>
             
              
               
                  <li>
                    <Link
                      to="/addNote"
                      className="bg-black px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                    >
                      Add Note
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="bg-black px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                    >
                      Profile
                    </Link>
                  </li>
                
                  <li>
                    <Link
                      className="bg-red-600 px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </>

)}
{!uInfo && (
                <>

                  <li>
                    <Link
                      to="/user/login"
                      className="bg-black px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user/register"
                      className="bg-black px-4 py-2 rounded-3xl hover:bg-red-500 text-white"
                    >
                      Register
                    </Link>
                  </li>

                  
                </>
  )}
          
            </ul>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register/>} />
        <Route path="/edit/:id" element={<PrivateRoute />}>
          <Route path="/edit/:id" element={<EditNote />} />
        </Route>
        <Route path="/addnote" element={<PrivateRoute />}>
          <Route path="/addnote" element={<AddNote />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
