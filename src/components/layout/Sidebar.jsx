import React from 'react'
import AuthLogo from '../auth/AuthLogo'
import Navbar from './Navbar'

const Sidebar = () => {
  return (
    <div className='w-full max-w-[280px] bg-[#0F172A] h-screen py-[32px] px-[16px] gap-[40px] flex flex-col'>
        <AuthLogo />
        <Navbar />
        <div className='mt-auto block flex items-center gap-[12px] py-[12px] px-[16px] w-full bg-[#FFFFFF]/[5.1%] rounded-[12px]'>
            <span className='font-inter font-semibold text-[12px] text-white/[66.67%]'>System Status</span>
            <span className='inline-block py-[2px] px-[6px] font-inter font-bold text-black bg-[#10B981] rounded-[4px]'>ONLINE</span>
        </div> 
    </div>
  )
}

export default Sidebar