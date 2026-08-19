import React from 'react'

const EmailInput = ({setEmailFocused, emailFocused}) => {
    return (
        <div className='flex flex-col gap-[6px]'>
            <label htmlFor="email" className='font-inter text-[#475569] text-[12px] tracking-[0.5px] font-semibold'>EMAIL ADDRESS</label>
            <div className='relative' >
                <i className={`fa-regular fa-envelope absolute left-[16px] top-1/2 -translate-y-1/2 text-gray-400 text-[18px] transition-opacity duration-200 ${emailFocused ? 'opacity-0' : 'opacity-100'  } `}></i>
                <input type="email" id='email' onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)} placeholder='name@yourgroup.com' className={`w-full p-[16px] h-[48px] transition-[padding] font-inter text-[14px] text-[#94A3B8] duration-200 ease-in-out rounded-[12px] border-1 border-[#E2E8F0] ${emailFocused ? 'pl-[16px]' : 'pl-[48px]'} focus:border-[#FF6B57] outline-none font-light`} />
            </div>
        </div>
    )
}

export default EmailInput