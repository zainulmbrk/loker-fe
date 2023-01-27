import React, { useState, useEffect } from 'react'
import Card from '../card'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FilterSidebar = () => {
    const [selectedOptions, setSelectedOptions] = useState([])
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    const handleChange = (e) => {
        const { value } = e.target
        if (selectedOptions.includes(value)) {
            setSelectedOptions(selectedOptions.filter((option) => option !== value))
        } else {
            setSelectedOptions([...selectedOptions, value])
        }
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
        <div className="w-full font-poppins">
            <div className="block w-full max-w-sm rounded bg-white border border-gray-200 py-2">
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <div className='flex flex-col space-y-4'>
                            {isLargeScreen ? <><h2 className='text-black font-semibold text-lg px-4'>Filter Berdasarkan</h2><div className='w-full h-px bg-gray-200' /></> : ''}

                            <div>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-black">
                                    <span>Tampil Berdasarkan</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black font-bold`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <div className='flex flex-row items-center justify-start space-x-4'>
                                        <button className='py-1.5 px-3 rounded-l-full rounded-r-full text-white bg-violet-600 '>Paling Sesuai</button>
                                        <button className='py-1.5 px-3 rounded-l-full rounded-r-full text-white bg-yellow-400 '>Paling Baru</button>
                                    </div>
                                </Disclosure.Panel>
                            </div>

                        </div>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <div className='flex flex-col space-y-4'>
                            <div className='w-full h-px bg-gray-200 px-4' />
                            <div>
                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-black">
                                    <span>Tipe Pekerjaan</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black font-bold`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    <div className='flex flex-col space-y-2'>

                                        <label className="flex flex-row space-x-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox"
                                                name="type"
                                                value="full-time"
                                                checked={selectedOptions.includes('full-time')}
                                                onChange={handleChange}
                                            />
                                            <span className="ml-2">Full-time</span>
                                        </label>
                                        <label className="flex flex-row space-x-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox"
                                                name="type"
                                                value="part-time"
                                                checked={selectedOptions.includes('part-time')}
                                                onChange={handleChange}
                                            />
                                            <span className="ml-2">Part-time</span>
                                        </label>
                                        <label className="flex flex-row space-x-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox"
                                                name="type"
                                                value="magang"
                                                checked={selectedOptions.includes('magang')}
                                                onChange={handleChange}
                                            />
                                            <span className="ml-2">Magang</span>
                                        </label>
                                        <label className="flex flex-row space-x-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox"
                                                name="type"
                                                value="freelance"
                                                checked={selectedOptions.includes('freelance')}
                                                onChange={handleChange}
                                            />
                                            <span className="ml-2">Freelance</span>
                                        </label>

                                    </div>
                                </Disclosure.Panel>
                            </div>

                        </div>
                    )}
                </Disclosure>
            </div>
        </div>

    )
}

export default FilterSidebar