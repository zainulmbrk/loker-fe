import React from 'react'
import LoginPage from '../../components/login'
import Navbar from '../../components/navbar'
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