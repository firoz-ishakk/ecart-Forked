import { ArrowLeft } from 'iconsax-react'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='w-screen bg-white flex flex-row justify-between h-[20%] p-3'>
            <div>
                <ArrowLeft size="25" color="#292D32"/>
            </div>
            <div className='text-black'>
                name
            </div>
            <div className='text-black'>
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header