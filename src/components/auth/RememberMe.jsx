import React from 'react'

const RememberMe = ({rememberMe, rememberMeToggle}) => {
    return (
        <div className='flex items-center gap-2'>
            <button onClick={rememberMeToggle} type='button'>
                <i className={`fa-regular ${rememberMe ? 'fa-square-check text-blue-300' : 'fa-square text-[#E2E8F0]'}  text-[20px] cursor-pointer `}></i>
            </button>
            <label htmlFor="" className='font-inter text-[13px] text-[#475569] font-light'>Remember this device</label>
        </div>
    )
}

export default RememberMe