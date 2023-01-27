import React from 'react'
import Search from '../../components/search'
import Loader from '../../components/loader'
import Company from '../../components/company'
const Homepage = () => {
    return (
        <>
            <Search />
            <div className='flex flex-col lg:px-28 px-8'>
                <Company />
            </div>
        </>
    )
}

export default Homepage