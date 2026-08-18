import React, { useState } from 'react'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    function togglePassword() {
        setShowPassword((prev) => !prev);
    }
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center font-sans'>
        <div className='absolute top-4 left-0 w-full px-6 flex flex-col gap-4 '>
            <div className='flex gap-2'>
                <img src="wallet-solid.svg" alt=""  className='w-[16px]' />
                <h1 className='text-xl italic text-[#3E38F5]'>Group Saving</h1>
            </div>
            <hr className=' border-gray-200' />
        </div>
        <div className='w-full flex flex-col max-w-md gap-6'>
            <div>
                <h2 className='text-3xl'>Login</h2>
                <p>Hi, Welcome back</p>
            </div>
            <form action="" className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="username" className='text-base text-gray-700'>Username</label>
                    <input type="text" id='username' className='border border-gray-400 px-2 py-2 rounded-sm text-gray-500 font-sans w-full focus:border-[#3E38F5] focus:ring-1 focus:ring-[#3E38F5] outline-none ' placeholder='Enter username'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='text-base text-gray-700'>Password</label>
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} id='password' className='border border-gray-400 px-2 py-2 rounded-sm text-gray-500 font-sans w-full focus:border-[#3E38F5] focus:ring-1 focus:ring-[#3E38F5] outline-none pr-10' placeholder='Enter password'/>
                        <button type='button' onClick={togglePassword} aria-label={showPassword ? "Hide password" : "Show password"}  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>
                            <i className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                        </button>
                    </div>
                </div>
                <div className='flex justify-between mt-6'>
                    <label htmlFor="remember" className='flex gap-2 items-center text-gray-700'>
                    <input type="checkbox" id='remember' /> Remember me
                    </label>
                    <a href="" className='text-gray-700'>Forgot password?</a>
                </div>
                <button className='bg-[#3E38F5] p-2 rounded-md border-none text-white font-sans cursor-pointer tracking-widest hover:bg-[#0400ff] transition-colors duration-200 '>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login