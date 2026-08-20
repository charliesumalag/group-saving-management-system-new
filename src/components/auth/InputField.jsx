import React from 'react'

const InputField = ({focused,setFocused, placeholder, icon, label, type}) => {
  return (
    <div className='flex flex-col gap-[6px] '>
        <label htmlFor="fullName" className='font-inter text-[#475569] text-[12px] tracking-[0.5px] font-semibold'>{label}</label>
        <div className='relative group' >
            {/* <i className={`${icon} absolute left-[16px] top-1/2 -translate-y-1/2 text-gray-400 text-[18px] transition-opacity duration-200 ${focused ? 'opacity-0' : 'opacity-100'  } `}></i> */}
            <i className={`${icon} absolute left-[16px] top-1/2 -translate-y-1/2 text-gray-400 text-[18px] transition-opacity duration-200 opacity-100 group-focus-within:opacity-0`}></i>
            <input type={type} id='fullName' onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder={placeholder} className={`w-[202px] p-[16px] h-[48px] transition-[padding] font-inter text-[14px] text-[#94A3B8] duration-200 ease-in-out rounded-[12px] border-1 border-[#E2E8F0] ${focused ? 'pl-[16px]' : 'pl-[48px]'} focus:border-[#FF6B57] outline-none font-light`} />
        </div>
    </div>
  )
}

export default InputField