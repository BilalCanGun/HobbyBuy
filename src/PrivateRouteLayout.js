import React from 'react'
import { Outlet ,useLocation,Navigate} from 'react-router-dom'
import { projectAuth } from './firebase/config';


const PrivateRouteLayout = () => {
    const location = useLocation();

  return projectAuth.currentUser ? (<Outlet/>):(<Navigate to="/" state={{from:location}} replace /> )
}

export default PrivateRouteLayout