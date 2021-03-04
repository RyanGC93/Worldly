import React from 'react'
import LoginPage from '../LoginPage/LoginPage'


export default ({setAuthenticated}) => {
    return (
        <>
            <LoginPage setAuthenticated={setAuthenticated}/>
        </>    
    )   
}
