import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <div className='grid bg-gray-800 text-gray-400 h-screen'>
            <Outlet />
        </div>
    )
}

export default DefaultLayout