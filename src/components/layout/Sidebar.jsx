import React from 'react'

const Sidebar = () => {
  return (
    <ul className='h-full text-lg p-8 flex flex-col gap-4 border-2 border-red-600 max-w-sm'>
        <li className='flex items-center gap-1 cursor-pointer'>
            <span><i className="fa-regular fa-house"></i></span>
            <span className=''>Dashboard</span>
        </li>
        <li className='flex items-center gap-1 cursor-pointer'>
            <span><i className="fa-solid fa-people-group"></i></span>
            <span>Members</span>
        </li>
        <li className='flex items-center gap-1 cursor-pointer'>
            <span><i className="fa-solid fa-cent-sign"></i></span>
            <span>Savings</span>
        </li>
         <li className='flex items-center gap-1 cursor-pointer'>
            <span><i class="fa-regular fa-heart"></i></span>
            <span>Contributions</span>
        </li>
        <li className='flex items-center gap-1 cursor-pointer'>
            <span><i class="fa-solid fa-chart-simple"></i></span>
            <span>Reports</span>
        </li>
        <li className='flex items-center gap-1 cursor-pointer'>
            <span><i className="fa-regular fa-bell"></i></span>
            <span>Alerts</span>
        </li>
        <li className='flex items-center gap-1 cursor-pointer mt-auto'>
            <span><i class="fa-solid fa-gear"></i></span>
            <span>Settings</span>
        </li>
        
    </ul>
  )
}

export default Sidebar