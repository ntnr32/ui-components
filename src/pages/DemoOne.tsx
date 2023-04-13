import React from 'react'
import { SplitScreen } from '../components'

const DemoOne = () => {
    return (
        <SplitScreen leftWidth={4} rightWidth={8} className='min-h-screen'>
            <div className='bg-red-400 h-full grid place-content-center text-black'>Left</div>
            <div className='bg-green-400 h-full grid place-content-center text-black'>Right</div>
        </SplitScreen>
    )
}

export default DemoOne