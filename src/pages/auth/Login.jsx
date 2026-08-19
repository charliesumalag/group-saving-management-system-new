import React, { useState } from 'react';



const Login = () => {
    const [email, setEmail] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    function togglePassword() {
        setShowPassword(prev => !prev);
    }

    function rememberMeToggle(){
        setRememberMe((prev) => !prev)
    }

  return (
    <div className='min-h-screen bg-[linear-gradient(-40deg,#090D1A,#1E293B)] w-full flex flex-col justify-center items-center font-sans'>
        <div className='w-[440px] h-[592px] rounded-[24px] bg-white p-[40px] ' >
            <div className='flex gap-[8px] items-center'>
                <img src="/logo-icon.png" alt="" />
                <h1 className='font-outfit font-extrabold text-[22px]'>Co<span className='text-[#FF6B57]'>Save</span></h1>
            </div>
            <div className='mt-[16px]'>
                <h2 className='text-[#0F172A] font-bold font-outfit text-[24px] '>Welcome back</h2>
                <p className='text-gray-500 font-inter text-[14px]'>Sign in to manage your group savings circles</p>
            </div>
            <form action="" className='mt-[24px] flex flex-col gap-[20px]'>
                <div className='flex flex-col gap-[6px]'>
                    <label htmlFor="" className='font-inter text-[#475569] text-[12px] tracking-[0.5px] font-semibold'>EMAIL ADDRESS</label>
                    <div className='relative' >
                        <i className={`fa-regular fa-envelope absolute left-[16px] top-1/2 -translate-y-1/2 text-gray-400 text-[18px] transition-opacity duration-200 ${emailFocused ? 'opacity-0' : 'opacity-100'  } `}></i>
                        <input type="email" onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)} placeholder='name@yourgroup.com' className={`w-full p-[16px] h-[48px] transition-[padding] font-inter text-[14px] text-[#94A3B8] duration-200 ease-in-out rounded-[12px] border-1 border-[#E2E8F0] ${emailFocused ? 'pl-[16px]' : 'pl-[48px]'}`} />
                    </div>
                </div>
                <div className='flex flex-col gap-[6px]'>
                    <label htmlFor="" className='font-inter text-[#475569] text-[12px] tracking-[0.5px] font-semibold'>PASSWORD</label>
                    <div className='relative' >
                        <img src="/vector.png" alt="" className={`absolute left-[16px] top-1/2 -translate-y-1/2  transition-opacity duration-200 ${passwordFocused ? 'opacity-0' : 'opacity-100' } `} />
                        <button onClick={togglePassword} type='button'>
                            <i className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'} absolute right-[16px] top-1/2 -translate-y-1/2 text-gray-400 text-xl `}></i>
                        </button>
                        <input type={!showPassword ? "password" : "text"} onFocus={() => setPasswordFocused(true)} onBlur={() => setPasswordFocused(false)} placeholder='enter password' className={`w-full p-[16px] h-[48px] transition-[padding] font-inter text-[14px] text-[#94A3B8] duration-200 ease-in-out rounded-[12px] border-1 border-[#E2E8F0] ${passwordFocused ? 'pl-[16px]' : 'pl-[48px]'}`} />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        {/* <input type="checkbox" className='appearance-none checked:bg-blue-400 h-[18px] w-[18px] checked:border-blue-400 border border-[#E2E8F0] rounded-[4px] cursor-pointer' /> */}
                        <button onClick={rememberMeToggle} type='button'>
                            <i className={`fa-regular ${rememberMe ? 'fa-square-check text-blue-300' : 'fa-square text-[#E2E8F0]'}  text-[20px]`}></i>
                        </button>
                        <label htmlFor="" className='font-inter text-[13px] text-[#475569] font-light'>Remember this device</label>
                    </div>
                    <a href="#" className='font-inter text-[13px] text-[#FF6B57] font-semibold'>Forgot password?</a>
                </div>
                <button type='submit' className='h-[50px] w-full bg-[#FF6B57] rounded-[12px] text-white text-[15px] font-inter font-bold'>Sign In</button>
            </form>
            <div className='flex justify-between items-center mt-[14px]'>
                <hr className='w-[45%] border-[#E2E8F0] ' />
                <span className='font-inter text-[12px] text-[#94A3B8] '>or</span>
                <hr className='w-[45%] border-[#E2E8F0]' />
            </div>
            <button className='h-[50px] rounded-[12px] mt-[14px] border-1 border-[#E2E8F0] w-full font-inter font-semibold text-[15px] text-[#475569] '>Create cooperative account</button>
        </div>
    </div>
  )
}

export default Login