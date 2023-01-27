import React, { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import Logo from '../../assets/logo.png'
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Modal from "../modal";
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaBuilding, FaBloggerB } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { useRouter } from "next/router"
import { toast } from "react-toastify";
import { Dialog, Menu, Transition } from "@headlessui/react";
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Navbar = () => {
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
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const [warning, setWarning] = useState('')
    const router = useRouter()
    const [navOpen, setNavOpen] = useState(false)
    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    useEffect(() => {
        setIsLargeScreen(window.innerWidth > 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 768)
    }

    const handleClick = () => {
        if (isLargeScreen) {
            setOpen(true)
            if (router.pathname === '/login') {
                setOpen(false)
                toast.warning('Anda berada di halaman login')
            }
        }
        else {
            router.push('/login')
        }
    }

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

    const handleClose = () => {
        setOpen(false)
        setEmail('')
        setPassword('')
        setError('')
        setErrorPassword('')
        setErrorInvalid('')
    }


    const navbarMenu = [
        { name: 'LOWONGAN KERJA', href: '/loker', icon: <MdWork size={20} /> },
        { name: 'PERUSAHAAN', href: '/loker', icon: <FaBuilding size={20} /> },
        { name: 'BLOG', href: '/loker', icon: <FaBloggerB size={20} /> }
    ]

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-10 bg-white flex md:flex-row flex-col text-black py-3.5 md:px-16 px-4 md:space-y-0 space-y-4 font-poppins shadow justify-between md:items-center items-start">
                <div onClick={() => router.push('/')} className="cursor-pointer flex md:w-1/6 w-full flex-row md:items-center items-start md:space-x-2 space-x-0 md:space-y-0 space-y-4">
                    <Image src={Logo} width={65} height={65} />
                    <span className="font-semibold text-xl text-black tracking-tight">
                        loker.ind
                    </span>
                </div>

                <div className={`block flex-grow md:flex md:w-5/6 w-3/5 md:flex-row flex-col md:static absolute -top-4 md:bg-white bg-blue-600 md:h-auto h-screen md:items-center items-start md:space-x-4 space-x-0 md:space-y-0 space-y-4 md:px-0 px-8 font-poppins md:justify-between justify-start transition-all duration-500 ease-in ${isMenuOpen ? "right-0" : "right-[-100%]"
                    }`}>
                    <div className="md:mt-0 md:w-5/6 w-full mt-20 flex md:flex-row md:justify-between md:space-y-0 flex-col space-y-4">
                        <ul className="flex md:flex-row flex-col md:items-center md:space-x-4 space-x-0 md:space-y-0 space-y-4 md:text-black text-white md:text-xs text-sm">
                            {navbarMenu.map((items, index) => {
                                return (
                                    <li key={index} className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-violet-600">
                                        <Link href={items.href}>{items.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="flex flex-row items-center md:space-x-2 space-x-0">
                            <input placeholder="search" className="hidden md:inline-block text-sm px-4 py-1 outline-none leading-none border rounded text-black border-gray-400 mt-4 lg:mt-0" />
                            <div className="flex md:items-center items-start md:flex-row flex-col md:space-x-4 space-x-0 md:space-y-0 space-y-4">
                                <button onClick={() => router.push('/register')} className="md:text-black text-white md:text-xs text-sm md:bg-transparent p-2 rounded-md bg-violet-500 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-violet-600">DAFTAR</button>
                                <button onClick={handleClick} className="md:text-black text-white md:text-xs text-sm hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-violet-600">MASUK</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/6 w-full text-white items-center justify-center md:text-xs text-sm p-2 rounded-md bg-violet-500 hover:bg-violet-600 space-x-1 flex flex-row">
                        <button>UNTUK PERUSAHAAN</button>
                        <ChevronDoubleRightIcon className="w-4 h-4 font-bold" />
                    </div>
                </div>

                <div className="absolute right-4 top-0 block md:hidden">
                    <button
                        onClick={() => setNavOpen(true)}
                        className={`flex items-center px-3 py-2 rounded text-black ${isMenuOpen ? 'close' : 'menu'}`}
                    >
                        <div>
                            {!navOpen ? <Bars3Icon className="w-8 h-8 duration-1000 ease-in-out" /> : ""}
                        </div>
                    </button>
                </div>
            </nav>
            <Modal open={open} setOpen={setOpen} maxWidth="max-w-md">
                <div className="w-full space-y-4 flex flex-col bg-white font-poppins">
                    <div className='flex flex-col space-y-2'>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-black font-bold text-xl">MASUK</span>
                            <XMarkIcon onClick={handleClose} className="w-6 h-6 text-gray-500 cursor-pointer" />
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
            </Modal>
            {/* mobile nav */}
            <Transition.Root show={navOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={setNavOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-violet-600">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 pt-4 -mr-12">
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-10 h-10 ml-1 focus:outline-none"
                                            onClick={() => setNavOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon
                                                className="w-8 h-8 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex items-center flex-shrink-0 px-4">
                                    {/* <div className="w-auto h-8">
                                        <Image
                                            src={logo_blue.src}
                                            alt="Your Company"
                                            objectFit="contain"
                                            width={200}
                                            height={50}
                                        />
                                    </div> */}
                                </div>
                                <div className="flex-1 h-0 mt-5 overflow-y-auto">
                                    <nav className="px-8 space-y-4">
                                        <div className="flex flex-row items-center md:space-x-2 space-x-0">
                                            <input placeholder="search" className="hidden md:inline-block text-sm px-4 py-1 outline-none leading-none border rounded text-black border-gray-400 mt-4 lg:mt-0" />
                                            <div className="flex md:items-center items-start md:flex-row flex-col md:space-x-4 space-x-0 md:space-y-0 space-y-4">
                                                <button onClick={() => router.push('/register')} className="md:text-black text-white md:text-xs text-sm md:bg-transparent p-2 rounded-md bg-violet-500 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-violet-600">DAFTAR</button>
                                                <button onClick={handleClick} className="md:text-black text-white md:text-xs text-sm hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-violet-600">MASUK</button>
                                            </div>
                                        </div>
                                        <div className="w-full h-px bg-gray-300"></div>
                                        <div className="md:mt-0 md:w-5/6 w-full mt-20 flex md:flex-row md:justify-between md:space-y-0 flex-col space-y-4">
                                            <ul className="flex md:flex-row flex-col md:items-center md:space-x-4 space-x-0 md:space-y-0 space-y-4 md:text-black text-white md:text-xs text-sm">
                                                {navbarMenu.map((items, index) => {
                                                    return (
                                                        <li key={index} className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-violet-600">
                                                            <Link href={items.href}>
                                                                <div className="flex flex-row items-center space-x-2">
                                                                    <span>{items.icon}</span>
                                                                    <span>{items.name}</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="w-full h-px bg-gray-300"></div>
                                        <div className="md:w-1/6 w-full text-white items-center justify-center md:text-xs text-sm p-2 rounded-md bg-violet-500 hover:bg-violet-600 space-x-1 flex flex-row">
                                            <button>UNTUK PERUSAHAAN</button>
                                            <ChevronDoubleRightIcon className="w-4 h-4 font-bold" />
                                        </div>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default Navbar;

{/* <nav className="dark:text-white border boder-gray-800 bg-white text-gray-secondary flex w-full fixed top-0 z-10 items-center justify-between flex-wrap lg:px-16 px-0 py-2 font-poppins">
                <div className="flex items-center flex-shrink-0 space-x-2 cursor-pointer" onClick={() => router.push('/')}>
                    <Image src={Logo} width={65} height={65} />
                    <span className="font-semibold text-xl text-black tracking-tight">
                        loker.ind
                    </span>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className={`flex items-center px-3 py-2 rounded text-black ${isMenuOpen ? 'close' : ''}`}
                    >
                        <div>
                            {!isMenuOpen ? <Bars3Icon className="w-8 h-8 duration-1000 ease-in-out" /> : <XMarkIcon className="w-8 h-8 duration-1000 ease-in-out" />}
                        </div>
                    </button>
                </div>
                <div
                    className={`w-full block flex-grow lg:flex space-x-4 lg:items-center lg:w-auto ${isMenuOpen ? "block" : "hidden"
                        }`}
                >
                    <div className="text-xs lg:flex-grow lg:space-x-4 px-4">
                        <Link
                            href="/loker"
                            className={`block mt-4 lg:inline-block lg:mt-0 text-black hover:underline hover:decoration-2 hover:decoration-violet-600 hover:underline-offset-4 ${router.pathname === '/loker' ? 'underline decoration-2 decoration-violet-600 underline-offset-4' : ''}`}
                        >
                            LOWONGAN KERJA
                        </Link>
                        <Link
                            href="/about"
                            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline hover:decoration-2 hover:decoration-violet-600 hover:underline-offset-4"
                        >
                            PERUSAHAAN
                        </Link>
                        <Link
                            href="/contact"
                            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:underline hover:decoration-2 hover:decoration-violet-600 hover:underline-offset-4"
                        >
                            BLOG
                        </Link>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 font-poppins">
                        <div>
                            <input placeholder="search" className="hidden lg:inline-block text-sm px-4 py-1 outline-none leading-none border rounded text-black border-gray-400 mt-4 lg:mt-0" />
                        </div>
                        <div className="flex flex-row space-x-4">
                            <button onClick={() => router.push('/register')} className="lg:text-black text-white text-xs lg:bg-transparent p-2 rounded-md bg-violet-500 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-violet-600">DAFTAR</button>
                            <button onClick={() => setOpen(true)} className="text-black text-xs hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-violet-600">MASUK</button>
                        </div>
                        <div className="text-white text-xs p-2 rounded-md bg-violet-500 hover:bg-violet-600 space-x-1 flex flex-row">
                            <button>UNTUK PERUSAHAAN</button>
                            <ChevronDoubleRightIcon className="w-4 h-4 font-bold" />
                        </div>
                    </div>
                </div>
            </nav> */}