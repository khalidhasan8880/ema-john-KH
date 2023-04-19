import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    if (loading) {
        return (
        <div className='loading'>
            <h1> Loading...</h1>
        </div>)
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'> </Navigate>;
};

export default PrivetRoute;