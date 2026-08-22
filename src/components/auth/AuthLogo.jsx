import React from 'react'

const AuthLogo = () => {
    return (
        <div className='flex gap-[8px] items-center'>
            <img src="/logo-icon.png" alt="" />
            {/* <h1 className='font-outfit font-extrabold text-[24px]'>Co<span className='text-[#FF6B57]'>Save</span></h1> */}
            <h1 className='font-outfit font-extrabold text-[24px] text-white'>Co<span className='text-white'>Save</span></h1>
        </div>
    )
}

export default AuthLogo