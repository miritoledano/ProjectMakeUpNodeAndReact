import { Alert } from '@mui/material';
import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

 export const ProtectedRoute = ({children}) => {
    const role = useSelector((state) => state.user.currentUser)?.role
    let location = useLocation();

    if(role!=="ADMIN") {
        alert("אינך מנהל")
        alert(role)
        return <Navigate to="/" state={{ from: location}} replace />
      
    }
 return children

};

export default ProtectedRoute;