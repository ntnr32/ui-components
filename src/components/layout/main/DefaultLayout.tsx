import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SplitScreen } from '../..'

const DefaultLayout = () => {
    return (
        <div className='grid bg-slate-900 text-gray-400 h-screen'>
            <SplitScreen leftWidth={2} rightWidth={10}>
                <div className='flex flex-col p-4 gap-4 bg-slate-950 h-full'>
                    <Link to={`/`}>Home</Link>
                    <Link to={`/demo1`}>Demo One</Link>
                    <Link to={`/demo2`}>Demo Two</Link>
                </div>
                <Outlet />
            </SplitScreen>
        </div>
    )
}

export default DefaultLayout