import React, { useState, useEffect } from 'react'
import { dataCompany } from '../../utils/data'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Image from 'next/image'
import Search from '../../components/search'
import FilterSidebar from '../../components/filter'
import Pertamina from '../../assets/pertamina.png'
import { MdLocationOn, MdAttachMoney } from 'react-icons/md'
import { BsBriefcaseFill } from 'react-icons/bs'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import CardSkeleton from '../../components/skeleton'
import { Bars3Icon, XMarkIcon, ChevronDoubleRightIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import ModalFilter from '../../components/modalFilter'
const ITEMS_PER_PAGE = 6
const MAX_PAGE_DISPLAY = 5;

const LowonganKerja = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)
    const currentData = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
    const startPage = currentPage - Math.floor(MAX_PAGE_DISPLAY / 2);
    const endPage = currentPage + Math.floor(MAX_PAGE_DISPLAY / 2);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setData(dataCompany);
            setIsLoading(false);
        }, 3000);
    }, [])

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePageClick = (page) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        setIsLargeScreen(window.innerWidth > 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 768)
    }

    return (
        <>
            <div className='md:block hidden'>
                <Search />
            </div>
            <div className='w-full flex md:flex-row flex-col lg:px-28 px-8 py-8 md:space-x-4 md:pt-5 pt-24 space-x-0 justify-between font-poppins'>
                {isLargeScreen ? <div className='w-1/2'><FilterSidebar /> </div> : <div onClick={() => setOpen(true)} className='flex justify-center mb-4 border border-gray-300 bg-transparent w-full hover:bg-gray-50 rounded py-1 cursor-pointer '>
                    <span className='flex flex-row text-black justify-center items-center space-x-1 '>
                        Filter <AdjustmentsHorizontalIcon className='w-4 h-4 ' />
                    </span>
                </div>}

                <div className='container'>
                    {isLoading && <CardSkeleton cards={4} />}
                    <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8'>
                        {currentData?.map((items, index) => {
                            return (
                                <div key={index} className='w-full flex py-2 rounded px-4 flex-col space-y-4 justify-between border border-gray-200'>
                                    <div className='w-full flex flex-row space-x-2 items-center'>
                                        <div className='rounded-full p-2'>
                                            <Image src={items.image || <Skeleton count={10} />} width={100} height={100} alt='image' />
                                        </div>
                                        <div className='w-full flex flex-col space-y-2'>
                                            <span>Frontend Developer</span>
                                            <span>PT. {items.name}</span>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col space-y-2'>
                                        <div className='flex flex-row space-x-4 items-center'>
                                            <MdLocationOn size={20} color='#94a3b8' />
                                            <span>{items.location}</span>
                                        </div>
                                        <div className='flex flex-row space-x-4 items-center'>
                                            <MdAttachMoney size={20} color='#94a3b8' />
                                            <span>{items.salary}</span>
                                        </div>
                                        <div className='flex flex-row space-x-4 items-center'>
                                            <BsBriefcaseFill size={20} color='#94a3b8' />
                                            <span>1-3 Tahun</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-4'>
                                        <span className='flex text-xs text-green-600 font-semibold'>Diperbarui 3 jam yang lalu</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-center items-center space-x-4 mt-5">

                        <button
                            className={`px-4 py-2 text-black`}
                            onClick={() => handlePageClick(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <IoIosArrowBack size={20} />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).slice(startPage, endPage).map((page) => (
                            <button
                                className={`px-2 py-1 m-2 ${currentPage === page ? 'bg-blue-500 text-white' : ' text-black'}`}
                                onClick={() => handlePageClick(page)}
                                key={page}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className={`px-4 py-2 text-black`}
                            onClick={() => handlePageClick(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <IoIosArrowForward size={20} />
                        </button>

                    </div>

                </div>
            </div>
            {/* filter open */}
            {/* <div className="absolute right-0 left-0 top-0 block md:hidden">
                <button
                    onClick={() => setOpenFilter(true)}
                    className={`flex items-center px-3 py-2 rounded text-black ${isFilterMenu ? 'close' : 'menu'}`}
                >
                    <div>
                        {!openFilter ? <Bars3Icon className="w-8 h-8 duration-1000 ease-in-out" /> : <XMarkIcon className="w-8 h-8 duration-1000 ease-in-out" />}
                    </div>
                </button>
            </div> */}

            {/* modal */}
            <ModalFilter open={open} setOpen={setOpen} maxWidth="max-w-md">
                <div className="w-full space-y-4 flex flex-col bg-white font-poppins">
                    <div className='flex flex-col space-y-2'>
                        <div className="flex flex-row items-center justify-between">
                            <span className="text-black font-bold text-xl">Filter Pencarianmu</span>
                            <XMarkIcon onClick={() => setOpen(false)} className="w-6 h-6 text-gray-500 cursor-pointer" />
                        </div>
                        <div className="w-full h-px bg-gray-300"></div>
                    </div>
                    <div className='w-full'>
                        <FilterSidebar />
                    </div>
                </div>
            </ModalFilter>
        </>
    )
}

export default LowonganKerja