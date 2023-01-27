import React from 'react'
import RegisterPage from '../../components/register'
import Navbar from '../../components/navbar'
const Register = () => {
    return (
        <>
            <Navbar />
            <RegisterPage />
        </>
    )
}

export default Register

Register.getLayout = function PageLayout(page) {
    return (
        <>

            {page}

        </>
    )
}