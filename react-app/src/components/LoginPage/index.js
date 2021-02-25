import React from 'react'
import LoginPage from '../LoginPage/LoginPage'
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


export default () => {
    const sessionUser = useSelector(state => state.session.user);
    if (sessionUser) return <Redirect to='/' />;
    return (
        <>
            {/* <h1>sddsad</h1> */}
            <LoginPage />
        </>    
    )   


}
