import React from 'react'
import Skeleton from 'react-loading-skeleton'
const CardSkeleton = ({ cards }) => {
    return (

        <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8'>
            {Array(cards).fill(0).map((items, index) => {
                return (
                    <div key={index} className='w-full flex py-2 rounded px-4 flex-col space-y-4 justify-between border border-gray-200'>
                        <div className='w-full flex flex-row space-x-2 items-center'>
                            <div className='rounded-full p-2'>
                                <Skeleton circle width={40} height={40} />
                            </div>
                            <div className='w-full flex flex-col space-y-2'>
                                <span><Skeleton /></span>
                                <span><Skeleton /></span>
                            </div>
                        </div>
                        <div className='w-full flex flex-col space-y-2'>
                            <div className='flex flex-row space-x-4 items-center'>
                                <span><Skeleton /></span>
                                <span><Skeleton /></span>
                            </div>
                            <div className='flex flex-row space-x-4 items-center'>
                                <span><Skeleton /></span>
                                <span><Skeleton /></span>
                            </div>
                            <div className='flex flex-row space-x-4 items-center'>
                                <span><Skeleton /></span>
                                <span><Skeleton /></span>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <span><Skeleton /></span>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}

export default CardSkeleton