import React from 'react'
import LoginPage from '../../components/Login'
import Navbar from '../../components/Navbar'
const Login = () => {
    return (
        <>
            <Navbar />
            <LoginPage />
        </>
    )
}

export default Login

Login.getLayout = function PageLayout(page) {
    return (
        <>

            {page}

        </>
    )
}