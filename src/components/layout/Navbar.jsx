import React from 'react'

const Navbar = () => {
  return (
    <ul className='flex flex-col items-center gap-[6px]'>
        <li className='flex items-center gap-[12px] py-[12px] px-[16px] bg-[#FF6B57]/[10.2%] w-full rounded-[12px]'>
          {/* <span><i className="fa-regular fa-house text-[#FF6B57] text-[16px] font-bold"></i></span> */}
          <span><img src="/dashboard-icon.png" alt="" /></span>
          <span className='text-[#FF6B57] font-bold text-[14px] font-inter'>Dashboard</span>
          <span className='inline-block h-[20px] w-[4px] bg-[#FF6B57] rounded-[2px] ml-auto'></span>
        </li>
         <li className='flex items-center gap-[12px] py-[12px] px-[16px] w-full '>
          <span><img src="/members-icon.png" alt="" /></span>
          <span className='text-[#94A3B8] font-medium text-[14px] font-inter'>Members</span>
        </li>
         <li className='flex items-center gap-[12px] py-[12px] px-[16px] w-full '>
          <span><img src="/transactions-icon.png" alt="" /></span>
          <span className='text-[#94A3B8] font-medium text-[14px] font-inter'>Savings</span>
        </li>
        <li className='flex items-center gap-[12px] py-[12px] px-[16px] w-full '>
          <span><img src="/cooperatives-icon.png" alt="" /></span>
          <span className='text-[#94A3B8] font-medium text-[14px] font-inter'>Contributions</span>
        </li>
        <li className='flex items-center gap-[12px] py-[12px] px-[16px] w-full '>
          <span><img src="/reports-icon.png" alt="" /></span>
          <span className='text-[#94A3B8] font-medium text-[14px] font-inter'>Reports</span>
        </li>
        <li className='flex items-center gap-[12px] py-[12px] px-[16px] w-full '>
          {/* <span><img src="/reports-icon.png" alt="" /></span> */}
          <span><i className="fa-regular fa-bell text-[#94A3B8] text-[20px]"></i></span>
          <span className='text-[#94A3B8] font-medium text-[14px] font-inter'>Alerts</span>
        </li>
        <li className='flex items-center gap-[12px] py-[12px] px-[16px] w-full '>
          <span><img src="/settings.png" alt="" /></span>
          <span className='text-[#94A3B8] font-medium text-[14px] font-inter'>Settings</span>
        </li>   
    </ul>
  )
}

export default Navbar