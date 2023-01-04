import React from 'react'

const Toggle = ({ isOpen }) => {
    if (isOpen) {
        return (
            <div className='flex flex-col h-5 justify-between cursor-pointer'>
                <span className='w-10 pb-1 bg-white block mx-5'></span>
                <span className='w-9 pb-1 bg-white block mx-5'></span>
                <span className='w-8 pb-1 bg-white block mx-5'></span>

            </div>
        )
    }
    else {
        return (
            <div className='flex flex-col h-5 justify-between'>
                <span className='w-10 pb-1 bg-white block mx-5'></span>
                <span className='w-10 pb-1 bg-white block mx-5'></span>
                <span className='w-10 pb-1 bg-white block mx-5'></span>

            </div>
        )
    }
}

export default Toggle
