import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import Logo from '../../assets/logo.png'
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { useRouter } from "next/router";
import Navbar from '../../components/navbar'
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const RegisterPage = () => {
    const [open, setOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [focus, setFocus] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [error, setError] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorInvalid, setErrorInvalid] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleChangeEmail = event => {
        setError('')
        setEmail(event.target.value)
    }
    const handleChangePassword = event => {
        setErrorPassword('')
        setPassword(event.target.value)
    }

    const handleBlurEmail = (event) => {
        setIsFocused(false);
        if (!event.target.value) {
            setError("Email tidak boleh kosong")
        } else {
            setError("")
        }
        if (!emailRegex.test(email)) {
            setErrorInvalid('Alamat email invalid');
        } else {
            setErrorInvalid('');
        }
    }

    const handleBlurPassword = (event) => {
        setIsFocused(false)
        if (!event.target.value) {
            setErrorPassword("Password tidak boleh kosong")
        } else {
            setErrorPassword("")
        }
    }

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div className='w-full flex flex-row mt-20 py-8 space-x-4 justify-center font-poppins'>
            <div className="max-w-md space-y-4 flex flex-col justify-center bg-white font-poppins">
                <div className='flex flex-col space-y-2'>
                    <div className="flex flex-row items-center justify-center">
                        <span className="text-black font-bold text-xl text-center">MARI GABUNG DENGAN KAMI UNTUK RAIH KARIR IMPIANMU</span>
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <div className="flex flex-row items-center justify-center">
                        <span className="text-black font-bold text-xl">DAFTAR</span>
                    </div>
                    <div className="w-full h-px bg-gray-500"></div>
                </div>
                <div className="flex flex-col space-y-6">
                    <span className="text-black text-lg">Masuk ke akun kamu untuk melanjutkan.</span>
                    <div className="relative rounded-md shadow-sm">
                        <input
                            type="email"
                            value={email}
                            onChange={handleChangeEmail}
                            onFocus={() => setIsFocused(true)}
                            onBlur={handleBlurEmail}
                            required
                            className="form-input border-2 focus:outline-none focus:border-violet-600 border-gray-500 py-3 px-4 block w-full leading-5 transition duration-150 ease-in-out peer"
                            id="email"
                        />
                        <label
                            htmlFor="email"
                            className={`${email.length > 0 ? "absolute text-violet-600 -top-4 bg-white left-2 px-2 pt-2 text-xs font-medium" : "absolute top-3.5 left-2 px-2 text-gray-500 font-medium peer-focus:-top-4 peer-focus:pt-2 peer-focus:bg-white peer-focus:text-xs peer-focus:text-violet-600"
                                }`}
                        >
                            Email
                        </label>
                        {error ? <div className="text-red-500 text-xs mt-2">{error}</div> : '' || errorInvalid ? <div className="text-red-500 text-xs mt-2">{errorInvalid}</div> : ''}
                    </div>

                    <div className="relative rounded-md shadow-sm">
                        <div className="flex flex-row items-center justify-between">
                            <input
                                type={passwordVisible ? "password" : "text"}
                                value={password}
                                onChange={handleChangePassword}
                                onFocus={() => setIsFocused(true)}
                                onBlur={handleBlurPassword}
                                required
                                className="form-input border-2 focus:outline-none focus:border-violet-600 border-gray-500 py-3 px-4 block w-full leading-5 transition duration-150 ease-in-out peer"
                                id="email"
                            />
                            {passwordVisible ? <EyeSlashIcon onClick={handlePasswordVisibility} className="absolute right-4 w-5 h-5 text-gray-500 font-semibold cursor-pointer peer-focus:text-violet-600 focus:text-violet-600" />
                                : <EyeIcon onClick={handlePasswordVisibility} className="absolute right-4 w-5 h-5 text-gray-500 font-semibold cursor-pointer peer-focus:text-violet-600 focus:text-violet-600" />}

                            <label
                                htmlFor="password"
                                className={`${password.length > 0 ? "absolute text-violet-600 -top-4 bg-white left-2 px-2 pt-2 text-xs font-medium" : "absolute top-3.5 left-2 px-2 text-gray-500 font-medium peer-focus:-top-4 peer-focus:pt-2 peer-focus:bg-white peer-focus:text-xs peer-focus:text-violet-600"
                                    }`}
                            >
                                Password
                            </label>
                        </div>
                        {errorPassword && <div className="text-red-500 text-xs mt-2">{errorPassword}</div>}
                    </div>

                </div>
                <div className="flex text-sm text-black hover:text-violet-600 font-normal justify-center cursor-pointer">Forgot Password?</div>
                <div className="flex flex-col space-y-4 w-full">
                    <button className="bg-violet-600 w-full hover:bg-gray-800 text-white font-bold p-2">MASUK</button>
                    <div className="flex flex-row space-x-1 items-center justify-between">
                        <div className="w-full h-px bg-gray-500" />
                        <span className="w-full font-bold text-gray-500 text-sm text-center">MASUK SEBAGAI</span>
                        <div className="w-full h-px bg-gray-500" />
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-4 cursor-pointer">
                        <FcGoogle size={30} />
                        <FaFacebook size={30} color="#1d4ed8" />
                        <BsLinkedin size={30} color='#1d4ed8' className="rounded-full" />
                    </div>
                </div>
                <div className="flex justify-center space-x-2">
                    <span>Belum memiliki akun?</span>
                    <span className="text-violet-600 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-violet-600 ">Daftar disini</span>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage