import React from 'react'

const Navbar = () => {
  return (
    <ul className='flex p-10 border-b-2 border-gray-200 items-center gap-2'>
        <li className='text-2xl'>Group Save</li>
        <li className='text-lg'>Admin</li>
        <li className='ml-auto flex items-center '>
            <div className='flex gap-4 items-center' >
                <span><i className="fa-regular fa-bell text-2xl cursor-pointer"></i></span>
                <span className='text-lg'>Admin</span>
            </div>
            <span><i className="fa-solid fa-caret-down text-xl cursor-pointer"></i></span>
        </li>
    </ul>
  )
}

export default Navbar