import React, { useState, useEffect } from 'react'
import { dataCompany } from '../../utils/data'
import Loader from '../loader'
import Image from 'next/image'
const Company = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setData(dataCompany);
            setIsLoading(false);
        }, 3000);
    }, [])
    if (isLoading) {
        return (
            <div className='flex flex-col justify-center m-5'>
                <span className='text-black font-semibold text-lg'>Perusahaan Ternama</span>
                <div className='flex items-center justify-center'>
                    <Loader />
                </div>
            </div>
        )
    }
    return (
        <div className='flex flex-col space-y-4 m-5'>
            <span className='text-black font-semibold text-lg'>Perusahaan Ternama</span>
            <div className='grid grid-cols-4 gap-x-4 gap-y-8'>
                {data.slice(0, 12).map((items, index) => {
                    return (
                        <div key={index} className=''>
                            <Image src={items.image} width={150} height={75} alt='company' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Company