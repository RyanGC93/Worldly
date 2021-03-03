import React from 'react'
import LoginPage from '../LoginPage/LoginPage'
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';


export default () => {
    const sessionUser = useSelector(state => state.session.user);
    if (sessionUser) return <Redirect to='/' />;
    return (
        <>
            <LoginPage />
        </>    
    )   
}
