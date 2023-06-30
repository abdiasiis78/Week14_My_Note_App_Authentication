import Cookies from 'js-cookie'
import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'


function PrivateRoute() {
    const token = Cookies.get('token')
    const location = useLocation()
if(!token){
    return <Navigate to='user/login' state={{from: location}}/>
}
return <Outlet/>
}

export default PrivateRoute