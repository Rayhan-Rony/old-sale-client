import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    console.log(user)
    const location = useLocation()
    if (loading) {
        return <div>Loading ......</div>
    }
    console.log(user)
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;