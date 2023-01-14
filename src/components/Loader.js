import React from 'react'
import Gif from '../assets/loading-load.gif'

const Loader = ({ width }) => {
    return (
        <div className={`!w-${width} m-auto flex items-center justify-center`}>

            <img src={Gif} width="150px" />

        </div>
    )
}

export default Loader
