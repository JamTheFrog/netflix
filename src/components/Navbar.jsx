import React from 'react'

function Navbar() {
  return (
    <div className='flex items-centre justify-between p-4 z-[100] w-full'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
        <div>
            <button className='text-white pr-4'>Sign in</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar