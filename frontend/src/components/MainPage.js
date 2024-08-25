import React from 'react'
import ItemComponent from './ItemComponent'
import Navbar from './Navbar'

export default function MainPage() {
    return (
        <>
        <Navbar />
        <div className='bg-red-50 flex justify-center'>

            <div className='grid grid-cols-2 gap-4 p-4 mt-6'>
                <ItemComponent />
            </div>
        </div>
        </>
    )
}
