import React from 'react'
import { Audio, Oval } from 'react-loader-spinner'
const Loader = ({ className }) => {
    return (
        <div>
            <Oval
                height={50}
                width={50}
                color="#994ff3"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass />
        </div>
    )
}

export default Loader