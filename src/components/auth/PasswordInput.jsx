import React from 'react'

const PasswordInput = ({setPasswordFocused, passwordFocused, showPassword, togglePassword}) => {
    return (
        <div className='flex flex-col gap-[6px]'>
            <label htmlFor="password" className='font-inter text-[#475569] text-[12px] tracking-[0.5px] font-semibold'>PASSWORD</label>
            <div className='relative' >
                <img src="/vector.png" alt="" className={`absolute left-[16px] top-1/2 -translate-y-1/2  transition-opacity duration-200 ${passwordFocused ? 'opacity-0' : 'opacity-100' } `} />
                <button onClick={togglePassword} type='button'>
                    <i className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'} absolute right-[16px] top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer `}></i>
                </button>
                <input id='password' type={!showPassword ? "password" : "text"} onFocus={() => setPasswordFocused(true)} onBlur={() => setPasswordFocused(false)} placeholder='enter password' className={`w-full p-[16px] h-[48px] transition-[padding] font-inter text-[14px] text-[#94A3B8] duration-200 ease-in-out rounded-[12px] border-1 border-[#E2E8F0] ${passwordFocused ? 'pl-[16px]' : 'pl-[48px]'} focus:border-[#FF6B57] outline-none font-light `} />
            </div>
        </div>
    )
}

export default PasswordInput