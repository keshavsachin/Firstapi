import React from 'react'
import {Navigate,Outlet} from "react-router-dom"
function ProtectedRoutes() {
    const auth=localStorage.getItem("Token");

  return auth?<Outlet/>:<Navigate to ="/Signup"/>
}

export default ProtectedRoutes